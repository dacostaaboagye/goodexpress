"use client";

import { HOW_IT_WORKS_CONTENT } from "@/presentation/constants/how_it-works";
import { NAVS } from "@/presentation/constants/navs";
import { ChevronRight, ClipboardList, Package, PackageCheck, Truck } from "lucide-react";
import { ComponentProps, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";

const iconMap = {
  ClipboardList,
  Package,
  Truck,
  PackageCheck,
};

const Icon = ({ name, ...props }: { name: keyof typeof iconMap } & ComponentProps<"svg">) => {
  const LucideIcon = iconMap[name];
  return <LucideIcon {...props} />;
};

export default function HowItWorks() {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const isMobile = useIsMobile();

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  // Animate the path of the SVG line
  const pathLength = useTransform(scrollYProgress, [0.1, 0.7], [0, 1]);

  // Arrow 1 animation
  const arrowX1 = useTransform(scrollYProgress, [0.1, 0.3], [50, 350]);
  const arrowOpacity1 = useTransform(scrollYProgress, [0.1, 0.15, 0.25, 0.3], [0, 1, 1, 0]);

  // Arrow 2 animation
  const arrowX2 = useTransform(scrollYProgress, [0.3, 0.5], [350, 650]);
  const arrowOpacity2 = useTransform(scrollYProgress, [0.3, 0.35, 0.45, 0.5], [0, 1, 1, 0]);

  // Arrow 3 animation
  const arrowX3 = useTransform(scrollYProgress, [0.5, 0.7], [650, 950]);
  const arrowOpacity3 = useTransform(scrollYProgress, [0.5, 0.55, 0.65, 0.7], [0, 1, 1, 0]);

  // Animate the opacity and scale of each step based on scroll progress
  const stepOpacities = HOW_IT_WORKS_CONTENT.steps.map((_, i) =>
    useTransform(scrollYProgress, [0.1 + i * 0.15, 0.15 + i * 0.15], [0, 1])
  );
  const stepScales = HOW_IT_WORKS_CONTENT.steps.map((_, i) =>
    useTransform(scrollYProgress, [0.1 + i * 0.15, 0.15 + i * 0.15], [0.8, 1])
  );
  const iconScales = HOW_IT_WORKS_CONTENT.steps.map((_, i) =>
    useTransform(scrollYProgress, [0.1 + i * 0.15, 0.15 + i * 0.15], [0.5, 1])
  );

  return (
    <section className="bg-white relative" id={NAVS.howItWorks} ref={targetRef}>
      <div
        className="absolute inset-0 hidden md:block"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3cdefs%3e%3cpattern id='smallGrid' width='10' height='10' patternUnits='userSpaceOnUse'%3e%3cpath d='M 10 0 L 0 0 0 10' fill='none' stroke='oklch(0.85 0.03 100 / 0.3)' stroke-width='0.5'/%3e%3c/pattern%3e%3cpattern id='grid' width='100' height='100' patternUnits='userSpaceOnUse'%3e%3crect width='100' height='100' fill='url(%23smallGrid)'/%3e%3cpath d='M 100 0 L 0 0 0 100' fill='none' stroke='oklch(0.85 0.03 100 / 0.3)' stroke-width='1'/%3e%3c/pattern%3e%3c/defs%3e%3crect width='100%25' height='100%25' fill='url(%23grid)'/%3e%3c/svg%3e")`,
        }}
      />
      <div className={cn("h-[400vh]", { "h-auto min-h-screen": isMobile })}>
        <div className="md:sticky top-0 h-screen flex flex-col items-center justify-center">
          <div className="text-center mb-16 space-y-4 px-4">
            <h2 className="text-5xl md:text-6xl font-black text-black text-balance leading-normal">
              {HOW_IT_WORKS_CONTENT.heading}
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              {HOW_IT_WORKS_CONTENT.subheading}
            </p>
          </div>

          <div className="relative w-full max-w-4xl mx-auto">
            {!isMobile && (
              <svg
                className="absolute top-1/2 left-0 w-full h-auto -translate-y-1/2"
                viewBox="0 0 1000 100"
              >
                <motion.path
                  d="M 50 50 H 950"
                  stroke="oklch(0.62 0.28 32 / 0.7)"
                  strokeWidth="2"
                  strokeDasharray="4 4"
                  fill="none"
                  style={{ pathLength }}
                />
                <motion.foreignObject
                  x={arrowX1}
                  y="38"
                  width="24"
                  height="24"
                  style={{
                    transform: "translateX(-50%)",
                    opacity: arrowOpacity1,
                  }}
                >
                  <ChevronRight className="w-6 h-6 text-primary" />
                </motion.foreignObject>
                <motion.foreignObject
                  x={arrowX2}
                  y="38"
                  width="24"
                  height="24"
                  style={{
                    transform: "translateX(-50%)",
                    opacity: arrowOpacity2,
                  }}
                >
                  <ChevronRight className="w-6 h-6 text-primary" />
                </motion.foreignObject>
                <motion.foreignObject
                  x={arrowX3}
                  y="38"
                  width="24"
                  height="24"
                  style={{
                    transform: "translateX(-50%)",
                    opacity: arrowOpacity3,
                  }}
                >
                  <ChevronRight className="w-6 h-6 text-primary" />
                </motion.foreignObject>
              </svg>
            )}

            <div
              className={cn("flex justify-between items-center relative", {
                "grid grid-cols-2 gap-4 px-8": isMobile,
              })}
            >
              {HOW_IT_WORKS_CONTENT.steps.map((step, idx) => (
                <motion.div
                  key={idx}
                  className="flex flex-col items-center gap-4 text-center"
                  style={{
                    opacity: isMobile ? 1 : stepOpacities[idx],
                    scale: isMobile ? 1 : stepScales[idx],
                  }}
                >
                  <div className="w-24 h-24 rounded-full bg-white border-4 border-primary flex items-center justify-center">
                    <motion.div style={{ scale: isMobile ? 1 : iconScales[idx] }}>
                      <Icon name={step.icon as keyof typeof iconMap} className="w-12 h-12 text-primary" />
                    </motion.div>
                  </div>
                  <div className="mt-4 w-48">
                    <h3 className="text-xl font-bold text-black mb-2 leading-normal">
                      {step.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

