import React from "react";
import { SERVICES_CONTENT } from "@/presentation/constants/services";
import { SectionWrapper } from "./section-wrapper";
import { NAVS } from "@/presentation/constants/navs";


export default function Services() {


  return (
    <section className="py-20 moving-gradient" id={NAVS.services}>
      <SectionWrapper>
        <div className="container mx-auto px-4 space-y-8">
          <div className="text-center  space-y-4">
            <h2 className="text-5xl md:text-6xl font-black text-foreground text-balance leading-normal">
              {SERVICES_CONTENT.heading}
            </h2>
            <p className="text-lg text-white max-w-2xl mx-auto">
              {SERVICES_CONTENT.subheading}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 w-max mx-auto">
            {SERVICES_CONTENT.services.map((service, idx) => (
              <div
                key={service.title}
                className="p-8 bg-background max-w-[350px] w-full h-full flex flex-col justify-center items-center text-center shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-primary mb-4 inline-flex p-3 bg-primary/10 rounded-xl">
                  {React.createElement(service.icon, { className: "w-8 h-8" })}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3 leading-normal">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>
    </section>
  );
}
