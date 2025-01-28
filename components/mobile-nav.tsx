"use client"

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Menu } from 'lucide-react'
import Link from "next/link"

export function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <nav className="flex flex-col space-y-4">
          <Link href="/" className="text-lg hover:text-primary">
            Home
          </Link>
          <Link href="/about" className="text-lg hover:text-primary">
            About
          </Link>
          <Link href="/portfolio" className="text-lg hover:text-primary">
            Portfolio
          </Link>
          <Link href="/blog" className="text-lg hover:text-primary">
            Blog
          </Link>
          <Link href="/contact" className="text-lg hover:text-primary">
            Contact
          </Link>
          <Link href="/other" className="text-lg hover:text-primary">
            Other
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
  )
}

