// Component with extracted constants
import { Button } from "@/components/ui/button";
import { HERO_CONTENT } from "@/presentation/constants/hero";
import { NAVS } from "@/presentation/constants/navs";
import { ArrowRight, MessageCircle, Phone } from "lucide-react";
import Link from "next/link";
import { SectionWrapper } from "./section-wrapper";

export default function Hero() {
  return (
    <section className="relative min-h-screen moving-gradient flex items-center justify-center overflow-hidden">
      <SectionWrapper>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary opacity-2 rounded-full blur-xl" />
          <div
            className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent opacity-2 rounded-full blur-xl"
            style={{ animationDelay: "1s" }}
          />
        </div>

        <div className="relative container mx-auto px-4 py-20 grid md:grid-cols-5 gap-12 items-center">
          {/* Left Content */}
          <div className="md:col-span-3 flex flex-col gap-8 text-primary-foreground relative z-10">
            <div className="space-y-6">
              <div className="inline-flex items-center bg-white/10 border border-white/20 rounded-full px-4 py-2 w-fit">
                <span className="text-sm font-semibold text-primary-foreground">
                  {HERO_CONTENT.badge}
                </span>
              </div>
              <h1 className="text-6xl md:text-7xl font-black leading-normal text-balance">
                {HERO_CONTENT.title}
              </h1>
            </div>

            <p className="text-lg max-w-lg leading-relaxed">
              {HERO_CONTENT.description}
            </p>

            <div className="flex gap-4 flex-wrap">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 gap-2 rounded-full px-8 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                asChild
              >
                <Link href={`#${NAVS.contact}`} className="w-ful">
                  <ArrowRight className="w-5 h-5" />
                  {HERO_CONTENT.primaryButton}
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="gap-2 rounded-full px-8 border-2 border-white text-white hover:bg-white/10 bg-transparent text-lg font-semibold transition-all duration-300"
                asChild
              >
                <Link href={`https://wa.me/${HERO_CONTENT.phoneNumber.replace(/\s/g, "")}`} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5" />
                  {HERO_CONTENT.secondaryButton}
                </Link>
              </Button>
            </div>

            <div className="flex gap-8 pt-6 border-t border-white/20">
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-primary-foreground" />
                <span className="font-semibold">
                  {HERO_CONTENT.phoneNumber}
                </span>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="md:col-span-2 flex justify-center relative">
            <div className="absolute -left-1/2 top-1/2 -translate-y-1/2 w-[150%] max-w-[150%] h-auto">
              <img
                src={HERO_CONTENT.imageSrc}
                alt={HERO_CONTENT.imageAlt}
                className="w-full h-full object-contain"
              />
              <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-2xl shadow-xl">
                <p className="text-4xl font-black">
                  {HERO_CONTENT.availability.hours}
                </p>
                <p className="text-sm font-semibold">
                  {HERO_CONTENT.availability.label}
                </p>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </section>
  );
}
