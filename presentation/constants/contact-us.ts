import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";

export const contactContent = {
    header: {
        title: "Get in Touch",
        subtitle: "Ready to book a delivery? Contact us anytime.",
    },
    contactInfo: {
        title: "Contact Information",
        description: "We're available 24/7 to help with your delivery needs.",
        items: [
            {
                id: 1,
                icon: Phone,
                label: "Phone",
                value: "+233 55 235 1213",
            },
            {
                id: 2,
                icon: Phone,
                label: "Phone",
                value: "+233 25 744 1771",
            },
            {
                id: 3,
                icon: MessageCircle,
                label: "WhatsApp",
                value: "+233 55 235 1213",
            },
            {
                id: 4,
                icon: Mail,
                label: "Email",
                value: "richardatobrah23@gmail.com",
            },
            {
                id: 5,
                icon: MapPin,
                label: "Service Area",
                value: "City-wide coverage",
            },
        ],
    },
    bookingForm: {
        title: "Quick Booking",
        fields: {
            name: {
                label: "Your Name",
                placeholder: "Enter your name",
            },
            phone: {
                label: "Phone Number",
                placeholder: "+233 55 235 1213",
            },
            address: {
                label: "Delivery Address/Notes",
                placeholder: "Where should we deliver?/Notes we should consider",
            },
        },
        submitButton: "Book Now",
    },
};