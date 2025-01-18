import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowUpRight, Download } from 'lucide-react'

export function AboutSection() {
  return (
    <section id="about" className="max-w-6xl mx-auto px-4 py-20">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-32 h-8 bg-background">
            <div className="w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNDB2NDBoLTQweiIvPjxwYXRoIGQ9Ik0xMCAyMGw1IDUgNS01LTUtNXoiIGZpbGw9IiMwMDAiLz48L2c+PC9zdmc+')] bg-repeat"></div>
          </div>
          
          <div className="relative bg-[#FFD88D] dark:bg-[#4A3E2A] rounded-[60px] p-8">
            <Image
              src={`${process.env.NEXT_PUBLIC_IMAGE_URL || "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-TMYMmk1A7RiOc0zkLlFDya1MTs4z01.png"}`}
              alt="About Me"
              width={500}
              height={600}
              className="rounded-[48px] w-full"
            />
            
            <div className="absolute bottom-12 left-6 bg-background rounded-full w-24 h-24 flex items-center justify-center">
              <div className="text-center text-xs font-medium [writing-mode:vertical-rl] rotate-180">
                FOR FREELANCE PROJECTS
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <h2 className="text-4xl font-bold text-gray-600 dark:text-gray-300">More about me</h2>
          <div className="space-y-6">
            <p className="text-muted-foreground text-gray-600 dark:text-gray-300">
              I am Meeko, a multidisciplinary designer and blogger based in the vibrant city of Los Angeles. 
              With a keen eye for aesthetics and a knack for innovative solutions, I thrive in the dynamic 
              intersection of design.
            </p>
            <p className="text-muted-foreground text-gray-600 dark:text-gray-300">
              My journey in this dynamic and ever-evolving field has been a testament to my unwavering passion 
              for meticulously crafting meaningful user experiences, leveraging cutting-edge technologies, and 
              fearlessly pushing the boundaries of digital creativity.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center gap-2">
              <ArrowUpRight className="w-4 h-4" />
              <span className="text-gray-600 dark:text-gray-300">Innovative Thinking</span>
            </div>
            <div className="flex items-center gap-2">
              <ArrowUpRight className="w-4 h-4" />
              <span className="text-gray-600 dark:text-gray-300">Rapid Solutions</span>
            </div>
            <div className="flex items-center gap-2">
              <ArrowUpRight className="w-4 h-4" />
              <span className="text-gray-600 dark:text-gray-300">Wholistic Approach</span>
            </div>
            <div className="flex items-center gap-2">
              <ArrowUpRight className="w-4 h-4" />
              <span className="text-gray-600 dark:text-gray-300">Talent-focused</span>
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
          <h2 className="text-4xl font-bold text-gray-600 dark:text-gray-300">My capabilities</h2>
          <p className="text-muted-foreground text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            The services I offer are meticulously crafted and tailored to cater specifically to your 
            <span className="font-semibold text-gray-600 dark:text-gray-300"> unique needs</span> and 
            <span className="font-semibold text-gray-600 dark:text-gray-300"> requirements</span>.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <Button variant="outline" className="rounded-full">
            🎨 Mobile Design
          </Button>
          <Button variant="outline" className="rounded-full">
            ⚡ UX & Product Design
          </Button>
          <Button variant="outline" className="rounded-full">
            🎯 Identity & Branding
          </Button>
          <Button variant="outline" className="rounded-full">
            ✨ Illustration
          </Button>
          <Button variant="outline" className="rounded-full">
            💻 Web Development
          </Button>
          <Button variant="outline" className="rounded-full">
            🛍️ Shopify Integration
          </Button>
          <Button variant="outline" className="rounded-full">
            🚀 Digital Solutions
          </Button>
        </div>
      </div>
    </section>
  )
}

