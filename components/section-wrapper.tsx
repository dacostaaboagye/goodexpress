import React from "react";

interface SectionWrapperProps {
  children: React.ReactNode;
}

export const SectionWrapper = ({ children }: SectionWrapperProps) => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {children}
    </section>
  );
};
