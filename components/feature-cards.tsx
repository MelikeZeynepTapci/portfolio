import Link from "next/link"
import { Globe, BookOpen, Mail } from 'lucide-react'

export function FeatureCards() {
  return (
    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4 py-12">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl text-center shadow-lg">
        <div className="flex justify-center mb-6">
          <Globe className="w-8 h-8" />
        </div>
        <h3 className="text-xl font-semibold mb-4">My Portfolio</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Check out some of my portfolio with creative ideas and design.
        </p>
        <Link 
          href="/portfolio"
          className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-50 hover:bg-blue-100 dark:bg-blue-900 dark:hover:bg-blue-800 transition-colors"
        >
          <span className="sr-only">View Portfolio</span>
          <span className="text-blue-600 dark:text-blue-300">→</span>
        </Link>
      </div>

      <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl text-center shadow-lg">
        <div className="flex justify-center mb-6">
          <BookOpen className="w-8 h-8" />
        </div>
        <h3 className="text-xl font-semibold mb-4">My Journal</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Here I share my insights as a freelancer with tips and tricks.
        </p>
        <Link 
          href="/journal"
          className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-yellow-50 hover:bg-yellow-100 dark:bg-yellow-900 dark:hover:bg-yellow-800 transition-colors"
        >
          <span className="sr-only">Read Journal</span>
          <span className="text-yellow-600 dark:text-yellow-300">→</span>
        </Link>
      </div>

      <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl text-center shadow-lg">
        <div className="flex justify-center mb-6">
          <Mail className="w-8 h-8" />
        </div>
        <h3 className="text-xl font-semibold mb-4">Contact Me</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          If you like what you see, let's work to bring your vision to life.
        </p>
        <Link 
          href="/contact"
          className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-green-50 hover:bg-green-100 dark:bg-green-900 dark:hover:bg-green-800 transition-colors"
        >
          <span className="sr-only">Contact Me</span>
          <span className="text-green-600 dark:text-green-300">→</span>
        </Link>
      </div>
    </div>
  )
}

