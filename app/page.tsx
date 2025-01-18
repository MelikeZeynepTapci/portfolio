// app/page.tsx
import { NavBar } from "@/components/nav-bar"
import { HeroSection } from "@/components/hero-section"
import { FeatureCards } from "@/components/feature-cards"
import { AboutSection } from "@/components/about-section"
import { PortfolioSection } from "@/components/portfolio-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#EFDFF9] dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <NavBar />
      <main>
        <section id="home">
          <HeroSection />
          <FeatureCards />
        </section>
        <AboutSection />
        <PortfolioSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}