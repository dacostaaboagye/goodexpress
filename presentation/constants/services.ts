import { Briefcase, Clock, LucideIcon, Package, Zap } from "lucide-react";

interface Service {
    icon: LucideIcon;
    title: string;
    description: string;
}

// Text Content Constants
export const SERVICES_CONTENT = {
    heading: "Our Services",
    subheading: "Choose the delivery service that fits your needs",
    services: [
        {
            icon: Zap,
            title: "Same-Day Delivery",
            description: "Our flagship service. When you need something delivered urgently, we guarantee pickup and delivery within 4 hours. Perfect for important documents, last-minute gifts, and time-sensitive materials.",
        },
        {
            icon: Clock,
            title: "Scheduled Delivery",
            description: "Plan ahead with our scheduled delivery service. Choose a specific date and a 2-hour time window for your delivery. Ideal for coordinating with your recipients and managing your logistics.",
        },
        {
            icon: Package,
            title: "Package Pickup",
            description: "Don't have time to drop off your packages? We'll come to you. Our drivers will pick up packages from your home or office at a time that is convenient for you. We handle with care.",
        },
        {
            icon: Briefcase,
            title: "Errand Services",
            description: "Consider us your personal courier. We can handle your shopping, pick up your laundry, pay your bills, or any other errand you need to run. Save time and let us do the running around.",
        },
    ] as Service[]
} as const;