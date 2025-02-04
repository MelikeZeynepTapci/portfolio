import Image from "next/image"
import { Pencil } from 'lucide-react'

export function HeroSection() {
  return (
    <div className="max-w-4xl mx-auto text-center py-20 px-4">
      <div className="relative">

        
        <h1 className="text-5xl font-bold mb-4 flex items-center justify-center gap-4">
          Hello!
          I'm Melike.
        </h1>
        <h2 className="text-3xl font-bold mb-8">a software engineer based in Istanbul.</h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          I build
          <span className="font-semibold"> AI-driven applications </span>
             and backend systems that are practical, efficient, and useful. My focus is on creating technology that solves real problems,
          whether it’s <span className="font-semibold">improving access to information, making learning easier</span>, or <span className="font-semibold">enhancing digital interactions.</span>

        </p>
      </div>
    </div>
  )
}

