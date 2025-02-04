import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowUpRight, Download } from "lucide-react"
import profilePicture from "../styles/assets/profile-picture.jpg"


export function DownloadCV() {
  return (
      <div className="flex gap-4">
        <Button asChild variant="default" size="lg">
          <a href="/MelikeTapci_CV.pdf" download>
            <Download className="mr-2 h-4 w-4" /> Download CV
          </a>
        </Button>
      </div>
  );
}

export function AboutSection() {

  const TechStack = () => {
    const techSkills = [
      { emoji: "🚀", text: "AI & NLP Solutions" },
      { emoji: "📊", text: "Data Science & Machine Learning" },
      { emoji: "💡", text: "LLMs and Retrieval Augmented Generation" },
      { emoji: "💻", text: "Backend & Full-Stack Development" },
      { emoji: "⚙️", text: "API Development & Integration" },
    ];

    return (
        <div className="flex flex-wrap justify-center gap-4">
          {techSkills.map((skill) => (
              <Button key={skill.text} variant="outline" className="rounded-full bg-steel/20">
                {skill.emoji} {skill.text}
              </Button>
          ))}
        </div>
    );
  };


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
                I’m Melike, a software engineer with a passion for creating intelligent, user-centric applications. My expertise lies in LLMs, NLP, and AI-driven solutions, and I have experience developing chatbots, RAG applications, and AI-powered assistants.

                I specialize in the intersection of AI and other disciplines, focusing on building systems that enhance human interaction and improve accessibility.              </p>
              <p className="text-muted-foreground text-navy dark:text-lavender">
                My technical background extends more on full-stack projects, and AI research, with a strong command of Python, Flask, Node.js, TypeScript, and cloud platforms.
                I am always looking for exciting challenges and collaborations that push the boundaries of AI applications in different industries.
                If you’re working on an innovative project or have an idea that aligns with my expertise, feel free to connect—let’s build something transformative together!
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4">
              <div>My Educational Background:</div>
              <div className="flex items-center gap-2">
                <ArrowUpRight className="w-4 h-4" />
                <span className="text-navy dark:text-lavender">Istanbul Bilgi University - Computer Engineering (2020-2024)</span>
              </div>


            </div>

            <DownloadCV></DownloadCV>
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
          <TechStack/>


        </div>
      </section>
  )
}

