import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function ContactSection() {
  return (
    <section id="contact" className="max-w-6xl mx-auto px-4 py-20">
      <h2 className="text-4xl font-bold text-center mb-12">Get in Touch</h2>
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Feel free to reach out.
          </p>
          <div className="space-y-4">
            <p className="flex items-center">
              <span className="font-semibold mr-2">Email:</span> melike@abdibt.com.tr
            </p>

            <p className="flex items-center">
              <span className="font-semibold mr-2">Location:</span> Istanbul, TR
            </p>
          </div>
        </div>
        <form className="space-y-6">
          <Input placeholder="Your Name" />
          <Input type="email" placeholder="Your Email" />
          <Input placeholder="Subject" />
          <Textarea placeholder="Your Message" rows={4} />
          <Button type="submit">Send Message</Button>
        </form>
      </div>
    </section>
  )
}

