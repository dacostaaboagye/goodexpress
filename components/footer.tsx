import { footerContent } from "@/presentation/constants/footer";
import { SectionWrapper } from "./section-wrapper";

export default function Footer() {
  return (
    <footer className="bg-secondary text-foreground py-12">
      <SectionWrapper>
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {/* Brand */}
            <div>
              <h3 className="text-xl font-bold mb-4">
                {footerContent.brand.name}
              </h3>
              <p className="opacity-90">{footerContent.brand.description}</p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4">
                {footerContent.quickLinks.title}
              </h4>
              <ul className="space-y-2 opacity-90">
                {footerContent.quickLinks.links.map((link) => (
                  <li key={link.text}>
                    <a
                      href={link.href}
                      className="hover:opacity-100 transition"
                    >
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Business Hours */}
            <div>
              <h4 className="font-semibold mb-4">
                {footerContent.businessHours.title}
              </h4>
              <ul className="space-y-2 opacity-90 text-sm">
                {footerContent.businessHours.hours.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="font-semibold mb-4">
                {footerContent.socialMedia.title}
              </h4>
              <div className="flex gap-4">
                {footerContent.socialMedia.platforms.map((platform) => (
                  <a
                    key={platform.name}
                    href={platform.href}
                    className="opacity-90 hover:opacity-100 transition"
                    aria-label={`Follow us on ${platform.name}`}
                  >
                    <platform.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-foreground/20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 opacity-90 text-sm">
              <p>{footerContent.legal.copyright}</p>
              <div className="flex gap-6">
                {footerContent.legal.links.map((link) => (
                  <a
                    key={link.text}
                    href={link.href}
                    className="hover:opacity-100 transition"
                  >
                    {link.text}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </footer>
  );
}
