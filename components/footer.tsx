import Link from "next/link"
import { Twitter, Instagram, Linkedin } from "lucide-react"

export function Footer() {
  return (
      <footer className="bg-white/80 dark:bg-navy/80">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4 text-navy dark:text-lavender">Meeko</h3>
              <p className="text-navy dark:text-lavender">Crafting digital experiences with passion and precision.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-navy dark:text-lavender">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#home" className="text-navy dark:text-lavender hover:text-gray-900 dark:hover:text-white">
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                      href="#portfolio"
                      className="text-navy dark:text-lavender hover:text-gray-900 dark:hover:text-white"
                  >
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link href="#about" className="text-navy dark:text-lavender hover:text-gray-900 dark:hover:text-white">
                    About
                  </Link>
                </li>
                <li>
                  <Link
                      href="#contact"
                      className="text-navy dark:text-lavender hover:text-gray-900 dark:hover:text-white"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <a
                      href="https://medium.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-navy dark:text-lavender hover:text-gray-900 dark:hover:text-white"
                  >
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-navy dark:text-lavender">Connect</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-navy dark:text-lavender hover:text-gray-900 dark:hover:text-white">
                  <Twitter className="w-6 h-6" />
                </a>
                <a href="#" className="text-navy dark:text-lavender hover:text-gray-900 dark:hover:text-white">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="#" className="text-navy dark:text-lavender hover:text-gray-900 dark:hover:text-white">
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-steel/20 dark:border-lavender/20 text-center text-navy dark:text-lavender">
            <p>&copy; 2023 Meeko. All rights reserved.</p>
          </div>
        </div>
      </footer>
  )
}

