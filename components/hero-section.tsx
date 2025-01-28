import Image from "next/image"
import { Pencil } from 'lucide-react'

export function HeroSection() {
  return (
    <div className="max-w-4xl mx-auto text-center py-20 px-4">
      <div className="relative">
        <div className="absolute -left-20 top-0 bg-white dark:bg-gray-800 rounded-full px-4 py-2 shadow-sm ">
          <div className="flex items-center space-x-2">
            <span className="text-sm">Web Development</span>
            <span className="text-yellow-400">✨</span>
          </div>
        </div>
        <div className="absolute -right-16 bottom-20 bg-pink-100 dark:bg-pink-900 rounded-full px-4 py-2 shadow-sm ">
          <div className="flex items-center space-x-2">
            <span className="text-sm">No-code Design</span>
            <span>✨</span>
          </div>
        </div>
        
        <h1 className="text-5xl font-bold mb-4 flex items-center justify-center gap-4">
          Hello! 
          <div className="relative mt-5 w-20 h-20">
            ✨
          </div>
          I'm Melike.
        </h1>
        <h2 className="text-3xl font-bold mb-8">a software engineer based in Istanbul.</h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          My focus is on cultivating a positive culture through the creation of inspiring articles that 
          <span className="font-semibold"> explore design</span>, and
          <span className="font-semibold"> web-related</span> topics.
        </p>
      </div>
    </div>
  )
}

