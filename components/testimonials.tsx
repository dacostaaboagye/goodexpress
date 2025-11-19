import { NAVS } from "@/presentation/constants/navs";
import { TESTIMONIALS_CONTENT } from "@/presentation/constants/testimonial";
import { Quote, Star } from "lucide-react";
import { SectionWrapper } from "./section-wrapper";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Card } from "./ui/card";

export default function Testimonials() {
  return (
    <section className="py-20 moving-gradient" id={NAVS.testimonials}>
      <SectionWrapper>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-5xl md:text-6xl font-black text-primary-foreground text-balance leading-normal">
              {TESTIMONIALS_CONTENT.heading}
            </h2>
            <p className="text-lg text-primary-foreground/80 max-w-3xl mx-auto">
              {TESTIMONIALS_CONTENT.subheading}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TESTIMONIALS_CONTENT.testimonials.map((testimonial, idx) => (
              <Card
                key={idx}
                className="p-8 rounded-none border-border bg-card hover:shadow-lg hover:border-primary transition-all duration-300 hover:-translate-y-1 cursor-pointer relative overflow-hidden flex flex-col"
              >
                <Quote className="absolute -top-2 -left-2 w-16 h-16 text-primary/10" />
                <div className="relative z-10 grow">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map(
                      (
                        _,
                        i // Always render 5 stars
                      ) => (
                        <Star
                          key={i}
                          className={`w-5 h-5 ${
                            i < testimonial.rating
                              ? "fill-primary text-primary"
                              : "text-muted-foreground"
                          }`}
                        />
                      )
                    )}
                  </div>

                  <p className="text-foreground mb-6 leading-relaxed italic">
                    "{testimonial.content}"
                  </p>
                </div>

                <div className="relative z-10 flex items-center gap-4 mt-auto">
                  <Avatar className="w-12 h-12 shrink-0">
                    <AvatarImage
                      src={testimonial.avatarImage}
                      alt={testimonial.name}
                    />
                    <AvatarFallback>
                      {testimonial.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-bold text-foreground">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </SectionWrapper>
    </section>
  );
}
