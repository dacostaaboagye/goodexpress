import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
import { APP_NAME } from "./app-config";

export const footerContent = {
    brand: {
        name: APP_NAME,
        description: "Your trusted delivery partner for fast and reliable service.",
    },
    quickLinks: {
        title: "Quick Links",
        links: [
            { text: "Home", href: "#" },
            { text: "Services", href: "#" },
            { text: "About Us", href: "#" },
            { text: "Contact", href: "#" },
        ],
    },
    businessHours: {
        title: "Business Hours",
        hours: [
            "Monday - Friday: 6 AM - 10 PM",
            "Saturday: 8 AM - 8 PM",
            "Sunday: 8 AM - 6 PM",
            "24/7 Emergency Delivery Available",
        ],
    },
    socialMedia: {
        title: "Follow Us",
        platforms: [
            { name: "Facebook", icon: Facebook, href: "#" },
            { name: "Instagram", icon: Instagram, href: "#" },
            { name: "Twitter", icon: Twitter, href: "#" },
            { name: "Linkedin", icon: Linkedin, href: "#" },
        ],
    },
    legal: {
        copyright: `© 2025 ${APP_NAME}. All rights reserved.`,
        links: [
            { text: "Privacy Policy", href: "#" },
            { text: "Terms of Service", href: "#" },
            { text: "Cookie Policy", href: "#" },
        ],
    },
};