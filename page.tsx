import { NavBar } from "@/components/nav-bar"
import { HeroSection } from "@/components/hero-section"
import { FeatureCards } from "@/components/feature-cards"
import { AboutSection } from "@/components/about-section"
import { PortfolioSection } from "@/components/portfolio-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { Providers } from "./providers"

export default function Home() {
  return (
    <Providers>
      <div className="bg-lavender/10 dark:bg-navy text-navy dark:text-lavender

">
        <NavBar />
        <main>
          <section id="home">
            <HeroSection />
            <FeatureCards />
          </section>
          <PortfolioSection />
          <AboutSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </Providers>
  )
}

