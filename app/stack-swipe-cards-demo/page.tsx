"use client";

import React, { useRef } from "react";
import StackSwipeCards, {
  StackSwipeCardItem,
  StackSwipeCardsRef,
} from "@/components/StackSwipeCards";
import { Button } from "@/components/ui/button"; // Assuming you have a Button component

const sampleCards: StackSwipeCardItem[] = [
  {
    id: 1,
    imageUrl: "/professional-delivery-person-smiling.jpg",
    content: (
      <div className="text-white p-4 bg-black bg-opacity-50 rounded-lg">
        <h3 className="text-2xl font-bold">Card One</h3>
        <p>This is the first card in the stack.</p>
      </div>
    ),
  },
  {
    id: 2,
    imageUrl: "/professional-man.jpg",
    content: (
      <div className="text-white p-4 bg-black bg-opacity-50 rounded-lg">
        <h3 className="text-2xl font-bold">Card Two</h3>
        <p>Scroll down to swipe this card away!</p>
      </div>
    ),
  },
  {
    id: 3,
    imageUrl: "/professional-woman-diverse.png",
    content: (
      <div className="text-white p-4 bg-black bg-opacity-50 rounded-lg">
        <h3 className="text-2xl font-bold">Card Three</h3>
        <p>The animation is smooth and staggered.</p>
      </div>
    ),
  },
  {
    id: 4,
    imageUrl: "/professional-woman-smiling.png",
    content: (
      <div className="text-white p-4 bg-black bg-opacity-50 rounded-lg">
        <h3 className="text-2xl font-bold">Card Four</h3>
        <p>Keep scrolling for more!</p>
      </div>
    ),
  },
  {
    id: 5,
    imageUrl: "/placeholder-user.jpg",
    content: (
      <div className="text-white p-4 bg-black bg-opacity-50 rounded-lg">
        <h3 className="text-2xl font-bold">Card Five</h3>
        <p>Almost there!</p>
      </div>
    ),
  },
  {
    id: 6,
    imageUrl: "/placeholder.jpg",
    content: (
      <div className="text-white p-4 bg-black bg-opacity-50 rounded-lg">
        <h3 className="text-2xl font-bold">Card Six</h3>
        <p>This is the last card. Scroll up to reverse!</p>
      </div>
    ),
  },
];

export default function StackSwipeCardsDemoPage() {
  const stackRef = useRef<StackSwipeCardsRef>(null);

  const handleNext = () => {
    stackRef.current?.next();
  };

  const handlePrev = () => {
    stackRef.current?.prev();
  };

  const handleCardSwiped = (index: number) => {
    console.log(`Card at index ${index} swiped off!`);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">
          Stack Swipe Cards Demo
        </h1>
        <p className="text-center text-lg text-gray-600 mb-12">
          Scroll down to see cards swipe off the stack. Scroll up to bring them
          back.
        </p>

        <div className="flex justify-center gap-4 mb-8">
          <Button onClick={handlePrev}>Previous Card</Button>
          <Button onClick={handleNext}>Next Card</Button>
        </div>

        <div className="relative flex justify-center">
          <StackSwipeCards
            ref={stackRef}
            items={sampleCards}
            onCardSwiped={handleCardSwiped}
            className="max-w-xl"
            cardHeight={300}
            cardGap={20}
            threshold={100}
          />
        </div>

        <div className="mt-20 p-8 bg-white rounded-lg shadow-md text-center">
          <h2 className="text-2xl font-semibold mb-4">How it works:</h2>
          <p className="text-gray-700">
            This component uses `framer-motion` to create a scroll-driven
            animation where cards swipe off a stack as you scroll down.
            Programmatic control is also available via the "Previous Card" and
            "Next Card" buttons.
          </p>
          <p className="text-gray-700 mt-2">
            Keyboard navigation: Use `ArrowDown` to advance a card and
            `ArrowUp` to revert a card.
          </p>
        </div>
      </div>
    </div>
  );
}