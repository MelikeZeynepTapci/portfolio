import Link from "next/link"
import { Twitter, Instagram, Linkedin } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-600 dark:text-gray-300">Meeko</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Crafting digital experiences with passion and precision.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-600 dark:text-gray-300">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="#home" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Home</Link></li>
              <li><Link href="#portfolio" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Portfolio</Link></li>
              <li><Link href="#about" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">About</Link></li>
              <li><Link href="#contact" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Contact</Link></li>
              <li><a href="https://medium.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Blog</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-600 dark:text-gray-300">Connect</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700 text-center text-gray-600 dark:text-gray-300">
          <p>&copy; 2023 Meeko. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

