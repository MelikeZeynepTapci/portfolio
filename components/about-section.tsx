import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowUpRight, Download } from "lucide-react"
import profilePicture from "../styles/assets/profile-picture.jpg"

export function AboutSection() {
  return (
      <section id="about" className="max-w-6xl mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">

            <div className="relative bg-gray-300 dark:bg-navy rounded-[60px] p-4">
              <Image
                  src={profilePicture}
                  alt="About Me"
                  width={500}
                  height={600}
                  className="rounded-[48px] w-full"
              />

            </div>
          </div>

          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-navy dark:text-lavender">More about me</h2>
            <div className="space-y-6">
              <p className="text-muted-foreground text-navy dark:text-lavender">
                I am Meeko, a multidisciplinary designer and blogger based in the vibrant city of Los Angeles. With a keen
                eye for aesthetics and a knack for innovative solutions, I thrive in the dynamic intersection of design.
              </p>
              <p className="text-muted-foreground text-navy dark:text-lavender">
                My journey in this dynamic and ever-evolving field has been a testament to my unwavering passion for
                meticulously crafting meaningful user experiences, leveraging cutting-edge technologies, and fearlessly
                pushing the boundaries of digital creativity.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-2">
                <ArrowUpRight className="w-4 h-4" />
                <span className="text-navy dark:text-lavender">Innovative Thinking</span>
              </div>
              <div className="flex items-center gap-2">
                <ArrowUpRight className="w-4 h-4" />
                <span className="text-navy dark:text-lavender">Rapid Solutions</span>
              </div>
              <div className="flex items-center gap-2">
                <ArrowUpRight className="w-4 h-4" />
                <span className="text-navy dark:text-lavender">Wholistic Approach</span>
              </div>
              <div className="flex items-center gap-2">
                <ArrowUpRight className="w-4 h-4" />
                <span className="text-navy dark:text-lavender">Talent-focused</span>
              </div>
            </div>

            <div className="flex gap-4">
              <Button variant="outline" size="lg">
                Learn More
              </Button>
              <Button variant="default" size="lg">
                <Download className="mr-2 h-4 w-4" /> Download CV
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-32 text-center space-y-12">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold text-navy dark:text-lavender">My capabilities</h2>
            <p className="text-muted-foreground text-navy dark:text-lavender max-w-2xl mx-auto">
              The services I offer are meticulously crafted and tailored to cater specifically to your
              <span className="font-semibold text-navy dark:text-lavender"> unique needs</span> and
              <span className="font-semibold text-navy dark:text-lavender"> requirements</span>.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="outline" className="rounded-full bg-steel/20">
              🎨 Mobile Design
            </Button>
            <Button variant="outline" className="rounded-full bg-steel/20">
              ⚡ UX & Product Design
            </Button>
            <Button variant="outline" className="rounded-full bg-steel/20">
              🎯 Identity & Branding
            </Button>
            <Button variant="outline" className="rounded-full bg-steel/20">
              ✨ Illustration
            </Button>
            <Button variant="outline" className="rounded-full bg-steel/20">
              💻 Web Development
            </Button>
            <Button variant="outline" className="rounded-full bg-steel/20">
              🛍️ Shopify Integration
            </Button>
            <Button variant="outline" className="rounded-full bg-steel/20">
              🚀 Digital Solutions
            </Button>
          </div>
        </div>
      </section>
  )
}

