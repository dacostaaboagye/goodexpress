
// Types
interface Value {
    icon: string;
    title: string;
    description: string;
}

export const ABOUT_CONTENT = {
    image: {
        src: "/professional-delivery-person-smiling.jpg",
        alt: "Professional delivery person"
    },
    heading: "About Our Delivery Service",
    description: "With over 5 years of experience delivering packages across the city, we've built a reputation for speed, reliability, and customer care. Our mission is to make delivery simple, safe, and affordable for everyone.",
    values: [
        {
            icon: "⚡",
            title: "Speed",
            description: "Quick pickups and deliveries"
        },
        {
            icon: "🛡️",
            title: "Safety",
            description: "Your packages handled with care"
        },
        {
            icon: "✅",
            title: "Reliability",
            description: "On-time delivery guaranteed"
        },
        {
            icon: "💬",
            title: "Customer Care",
            description: "Responsive support 24/7"
        },
    ] as Value[]
} as const;