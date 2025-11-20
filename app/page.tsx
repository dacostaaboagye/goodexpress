import Header from "@/components/header"
import Hero from "@/components/hero"
import About from "@/components/about"
import Services from "@/components/services"
import HowItWorks from "@/components/how-it-works"
import Testimonials from "@/components/testimonials"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import DeliveryInfo from "@/components/delivery-info"

export default function Home() {
  return (
    <main className="w-full" id="main-content">
      <Header />
      <Hero />
      <About />
      <Services />
      <HowItWorks />
      <Testimonials />
      <DeliveryInfo />
      <Contact />
      <Footer />
    </main>
  )
}
