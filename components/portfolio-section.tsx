import { Button } from "@/components/ui/button"

export function PortfolioSection() {
  return (
    <section id="portfolio" className="max-w-6xl mx-auto px-4 py-20">
      <h2 className="text-4xl font-bold text-center mb-12">My Portfolio</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div key={item} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
            <div className="h-48 bg-gray-200 dark:bg-gray-700"></div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Project {item}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">Short description of the project goes here.</p>
              <Button variant="outline">View Project</Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

