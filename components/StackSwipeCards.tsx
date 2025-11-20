"use client";
import Image from "next/image";
import { cn } from "@/lib/utils"; // Assuming cn is a utility for combining class names
import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import React, {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";

// Define the types for the component props and ref API
export type StackSwipeCardItem = {
  id: string | number;
  content?: React.ReactNode;
  imageUrl?: string;
};

export type StackSwipeCardsProps = {
  items: StackSwipeCardItem[];
  cardHeight?: number; // pixel height of each card (default 420)
  cardGap?: number; // vertical overlap/gap between stacked cards (default 28)
  threshold?: number; // scroll distance per card before advancing to next (default: 120)
  onCardSwiped?: (index: number) => void; // callback when a card completes swipe off
  className?: string; // extra wrapper classes
  initialIndex?: number; // index of top-most visible card at mount (default 0)
};

export type StackSwipeCardsRef = {
  next: () => void;
  prev: () => void;
};

const DEFAULT_CARD_HEIGHT = 420;
const DEFAULT_CARD_GAP = 28;
const DEFAULT_THRESHOLD = 120;

const StackSwipeCards = forwardRef<StackSwipeCardsRef, StackSwipeCardsProps>(
  (
    {
      items,
      cardHeight = DEFAULT_CARD_HEIGHT,
      cardGap = DEFAULT_CARD_GAP,
      threshold = DEFAULT_THRESHOLD,
      onCardSwiped,
      className,
      initialIndex = 0,
    },
    ref
  ) => {
    const componentRef = useRef<HTMLDivElement>(null);
    const [currentIndex, setCurrentIndex] = useState(initialIndex);
    const [isSwiping, setIsSwiping] = useState(false);
    const [componentTop, setComponentTop] = useState(0); // State to store component's top offset

    // Calculate the total scrollable height needed for the stack
    // Each card needs `threshold` scroll distance to swipe off
    const totalScrollHeight =
      (items.length - 1) * threshold + cardHeight + cardGap * 2; // Adjusted to reduce excessive height

    const { scrollY } = useScroll(); // Get absolute scroll position

    useEffect(() => {
      if (componentRef.current) {
        setComponentTop(componentRef.current.offsetTop);
      }
    }, [componentRef]);

    // Map scrollY to a custom progress value for card swiping
    // This progress value will go from 0 to items.length - 1 (since the last card doesn't swipe)
    const cardProgress = useTransform(
      scrollY,
      [componentTop, componentTop + (items.length - 1) * threshold], // Scroll range for swiping
      [0, items.length - 1] // Map to card indices
    );

    // State to hold the current card index based on scroll
    const [scrollCardIndex, setScrollCardIndex] = useState(initialIndex);

    useEffect(() => {
      const unsubscribe = cardProgress.on("change", (latest) => {
        const newIndex = Math.floor(latest);
        if (newIndex !== scrollCardIndex) {
          setScrollCardIndex(newIndex);
          if (newIndex > currentIndex && newIndex < items.length) {
            // Card has swiped off
            onCardSwiped?.(newIndex - 1); // Callback for the card that just swiped off
          }
        }
        // Update current index for programmatic control to reflect scroll
        setCurrentIndex(
          Math.min(Math.max(0, Math.round(latest)), items.length - 1)
        );
      });
      return () => unsubscribe();
    }, [
      cardProgress,
      scrollCardIndex,
      currentIndex,
      items.length,
      onCardSwiped,
    ]);

    const advanceCard = useCallback(() => {
      setCurrentIndex((prev) => {
        const nextIndex = Math.min(prev + 1, items.length - 1);
        if (nextIndex !== prev) {
          // Programmatic scroll to trigger animation
          // This is a simplified approach; a more robust solution would involve
          // directly manipulating scroll position or Framer Motion's scroll controls.
          // For now, we'll just update the index and let scroll catch up.
          onCardSwiped?.(prev);
        }
        return nextIndex;
      });
    }, [items.length, onCardSwiped]);

    const revertCard = useCallback(() => {
      setCurrentIndex((prev) => Math.max(prev - 1, 0));
    }, []);

    useImperativeHandle(ref, () => ({
      next: advanceCard,
      prev: revertCard,
    }));

    // Keyboard accessibility
    useEffect(() => {
      const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === "ArrowDown") {
          event.preventDefault();
          advanceCard();
        } else if (event.key === "ArrowUp") {
          event.preventDefault();
          revertCard();
        }
      };

      window.addEventListener("keydown", handleKeyDown);
      return () => window.removeEventListener("keydown", handleKeyDown);
    }, [advanceCard, revertCard]);

    if (items.length === 0) {
      return (
        <div
          className={cn(
            "flex items-center justify-center p-8 text-muted-foreground border border-dashed rounded-lg",
            className
          )}
          style={{ height: cardHeight }}
        >
          No cards to display.
        </div>
      );
    }

    return (
      <div
        ref={componentRef}
        className={cn("relative w-full overflow-x-hidden", className)}
        style={{ height: totalScrollHeight }} // This div creates the scrollable area
      >
        <div
          className="sticky top-0 flex flex-col items-center justify-center"
          style={{ height: cardHeight + (items.length - 1) * cardGap }} // Set height to match the stack container
        >
          <div
            className="relative w-full" // Removed max-w-md mx-auto for more responsiveness
            style={{ height: cardHeight + (items.length - 1) * cardGap }}
          >
            {items.map((item, i) => {
              const isTopCard = i === currentIndex;
              const isNextCard = i === currentIndex + 1;
              const isBehindCurrent = i < currentIndex;

              // Calculate the scroll progress for the current card
              // This value goes from 0 to 1 as the card swipes off
              const cardSwipeProgress = useTransform(
                cardProgress,
                [i, i + 1],
                [0, 1]
              );

              // Interpolate transform properties based on cardSwipeProgress
              const translateX = useTransform<string | number>(
                cardSwipeProgress,
                [0, 1],
                ["0%", "120%"]
              );
              const rotateZ = useTransform(cardSwipeProgress, [0, 1], [0, 8]);
              const opacity = useTransform(cardSwipeProgress, [0, 0.5], [1, 0]); // Fade out halfway

              // For cards behind the current one, they should be fully swiped off
              let finalTranslateX: MotionValue<string | number> | string =
                isBehindCurrent ? "120%" : translateX;
              let finalRotateZ: MotionValue<number> | number = isBehindCurrent
                ? 8
                : rotateZ;
              let finalOpacity: MotionValue<number> | number = isBehindCurrent
                ? 0
                : opacity;

              // Special handling for the last card: it should not swipe away
              // If it's the last card and the scroll progress has reached its point, keep it unswiped
              if (i === items.length - 1 && cardProgress.get() >= i) {
                finalTranslateX = "0%";
                finalRotateZ = 0;
                finalOpacity = 1;
              }

              // Stacking effect: lower cards move up and scale slightly
              const translateYStack = useTransform(
                cardProgress,
                [i - 1, i], // When the previous card swipes off, this card moves up
                [
                  i * cardGap, // Initial position (top-down stack)
                  (i - 1) * cardGap, // Position when it becomes the "next" card
                ]
              );

              const scaleStack = useTransform(
                cardProgress,
                [i - 1, i],
                [
                  1 - i * 0.02, // Smaller when further back
                  1 - (i - 1) * 0.02, // Slightly larger when it moves up
                ]
              );

              const zIndex = items.length - i; // Higher index means further back visually

              return (
                <motion.div
                  key={item.id}
                  className={cn(
                    "absolute w-full rounded-xl shadow-lg overflow-hidden bg-background border border-border",
                    {
                      "pointer-events-none": !isTopCard, // Only top card is interactive
                    }
                  )}
                  style={{
                    height: cardHeight,
                    top: 0, // Position all cards at the top of the stack container
                    zIndex: zIndex,
                    translateX: finalTranslateX,
                    rotateZ: finalRotateZ,
                    opacity: finalOpacity,
                    y: translateYStack,
                    scale: scaleStack,
                  }}
                  initial={{
                    y: i * cardGap, // Initial position (top-down stack)
                    scale: 1 - i * 0.02,
                    opacity: 1,
                    translateX: "0%",
                    rotateZ: 0,
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  aria-hidden={!isTopCard}
                  tabIndex={isTopCard ? 0 : -1}
                >
                  {item.imageUrl && (
                    <Image
                      src={item.imageUrl}
                      alt={`Card ${i + 1}`}
                      className="absolute inset-0 w-full h-full object-cover"
                      fill
                    />
                  )}
                  <div className="relative p-6 h-full flex flex-col justify-end">
                    {item.content || (
                      <p className="text-2xl font-bold text-white drop-shadow-md">
                        Card {i + 1}
                      </p>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
        {/* ARIA Live Region for accessibility */}
        <div
          role="status"
          aria-live="polite"
          className="sr-only" // Visually hidden but readable by screen readers
        >
          {scrollCardIndex < items.length
            ? `Card ${scrollCardIndex + 1} of ${items.length} is now visible.`
            : `All cards have been swiped.`}
        </div>
      </div>
    );
  }
);

StackSwipeCards.displayName = "StackSwipeCards";

export default StackSwipeCards;
