import { MapPin, Globe, BadgePercent } from "lucide-react";
import { SectionWrapper } from "./section-wrapper";
import { Card } from "./ui/card";

const deliveryInfoContent = {
  heading: "Our Operations & Pricing",
  subheading: "Transparent, affordable, and nationwide service from our home base in Kumasi.",
  features: [
    {
      icon: MapPin,
      title: "Our Home Base",
      description: "Our head office is proudly located in the heart of Kumasi, Ghana.",
    },
    {
      icon: Globe,
      title: "Nationwide Reach",
      description: "We offer pickup and delivery services across the entire nation. You only pay for the transport of your parcel to its destination, with no extra pickup fees.",
    },
    {
      icon: BadgePercent,
      title: "Special Kumasi Rate",
      description: "All deliveries within Kumasi are a flat rate of GH₵25, no matter the location.",
    },
  ],
};

export default function DeliveryInfo() {
  return (
    <section className="py-20 bg-secondary/50">
      <SectionWrapper>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-5xl md:text-6xl font-black text-foreground text-balance">
              {deliveryInfoContent.heading}
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              {deliveryInfoContent.subheading}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {deliveryInfoContent.features.map((feature, idx) => (
              <Card
                key={idx}
                className="p-8 bg-card border rounded-2xl shadow-sm text-center flex flex-col items-center hover:shadow-lg hover:border-primary hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <feature.icon className="w-9 h-9 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </SectionWrapper>
    </section>
  );
}

