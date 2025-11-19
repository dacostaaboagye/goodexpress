

// Types
interface Testimonial {
    name: string;
    role: string;
    content: string;
    rating: number;
    avatar: string;
    avatarImage: string;
}

// Text Content Constants
export const TESTIMONIALS_CONTENT = {
    heading: "What Our Customers Say",
    subheading: "Join hundreds of satisfied customers",
    testimonials: [
        {
            name: "Sarah Johnson",
            role: "Regular Customer",
            content:
                "Super reliable! I've used their service multiple times and never had any issues. Highly recommend!",
            rating: 3,
            avatar: "SJ",
            avatarImage: "/img-1.jpg"
        },
        {
            name: "Mike Chen",
            role: "Business Owner",
            content:
                "The best delivery service in the city. Fast, professional, and reasonably priced. My go-to option.",
            rating: 4,
            avatar: "MC",
            avatarImage: "/img-2.jpg"

        },
        {
            name: "Emma Rodriguez",
            role: "Frequent User",
            content:
                "I love the service and tracking. Always know where my package is. Great customer service too!",
            rating: 3,
            avatar: "ER",
            avatarImage: "/img-3.jpg"

        },
    ] as Testimonial[]
} as const;