import { ABOUT_CONTENT } from "@/presentation/constants/about";
import { SectionWrapper } from "./section-wrapper";
import { NAVS } from "@/presentation/constants/navs";

export default function About() {
  return (
    <section className="py-20 bg-white" id={NAVS.about}>
      <SectionWrapper>
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            {/* Left Image */}
            <div>
              <img
                src={ABOUT_CONTENT.image.src}
                alt={ABOUT_CONTENT.image.alt}
                className="w-full rounded-2xl shadow-lg"
              />
            </div>

            {/* Right Content */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold text-black mb-4 text-balance leading-normal">
                  {ABOUT_CONTENT.heading}
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {ABOUT_CONTENT.description}
                </p>
              </div>

              <div className="space-y-4">
                {ABOUT_CONTENT.values.map((value, idx) => (
                  <div key={idx} className="flex gap-4 items-start">
                    <div className="text-3xl shrink-0">{value.icon}</div>
                    <div>
                      <h3 className="font-semibold text-black text-lg leading-normal">
                        {value.title}
                      </h3>
                      <p className="text-gray-700">
                        {value.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </section>
  );
}
