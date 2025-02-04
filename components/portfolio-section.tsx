import { Button } from "@/components/ui/button"

const projects = [
    {
        id: 1,
        name: "PolyGo : AI-Based Personalized Language Learning",
        desc: "An education platform for learning various languages with grammar, vocabulary and more in a personally-crafted way.",
        link: "https://github.com/MelikeZeynepTapci/PolyGo",
    },
    {
        id: 2,
        name: "Roleplay Chatbot",
        desc: "A RAG-based system for building roleplaying sessions with different personas.",
        link: "https://roleplay-chatbot.vercel.app/",
    },
    {
        id: 3,
        name: "Personal Github Projects",
        desc: "A collection of my side projects",
        link: "https://github.com/MelikeZeynepTapci?tab=repositories",
    },
];

export function PortfolioSection() {
    return (
        <section id="portfolio" className="max-w-6xl mx-auto px-4 py-20">
            <h2 className="text-4xl font-bold text-center mb-12">My Portfolio</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project) => (
                    <div
                        key={project.id}
                        className="bg-white/80 dark:bg-navy/80 rounded-lg shadow-md overflow-hidden h-full flex flex-col"
                    >
                        <div className="p-6 flex flex-col flex-grow">
                            <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                            <p className="text-navy dark:text-lavender mb-4 flex-grow">
                                {project.desc}
                            </p>
                            <Button asChild variant="outline" className="mt-auto">
                                <a href={project.link}>View Project</a>
                            </Button>
                        </div>
                    </div>
                ))}
            </div>
        </section>

    );
}

