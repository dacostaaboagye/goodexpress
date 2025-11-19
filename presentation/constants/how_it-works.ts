interface Step {
    number: string;
    title: string;
    description: string;
    icon: string;
}

// Text Content Constants
export const HOW_IT_WORKS_CONTENT = {
    heading: "How It Works",
    subheading: "Simple and straightforward delivery in 4 easy steps",
    steps: [
        {
            number: "01",
            title: "Request Pickup",
            description: "Tell us what you need delivered and where.",
            icon: "ClipboardList",
        },
        {
            number: "02",
            title: "Package Pickup",
            description: "Our driver arrives and safely picks up your package.",
            icon: "Package",
        },
        {
            number: "03",
            title: "Secure Transit",
            description: "Your package is safely transported to destination.",
            icon: "Truck",
        },
        {
            number: "04",
            title: "Delivered",
            description: "Your package arrives safely and on time.",
            icon: "PackageCheck",
        },
    ] as Step[]
} as const;