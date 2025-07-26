import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-background text-foreground">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* CTA Section */}
        <div className="border-b border-border py-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
            Ready to build something amazing?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Let's discuss your project and see how we can help bring your vision to life.
          </p>
          <div className="mt-8 flex items-center justify-center gap-x-6">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              Start Your Project
            </Button>
            <Button variant="outline" size="lg" className="border-foreground text-foreground hover:bg-foreground hover:text-background">
              Schedule a Call
            </Button>
          </div>
        </div>

        {/* Main Footer */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold mb-4">Mizuwave</h3>
              <p className="text-muted-foreground mb-6 max-w-md">
                We help innovative companies design, build, and ship products that are attractive, 
                thoughtful, and enjoyable to use. From concept to launch, we're your trusted software partner.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  <Github className="h-5 w-5" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Custom Development</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">UI/UX Design</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Performance Optimization</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Team Augmentation</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Enterprise Solutions</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center gap-x-2">
                  <Mail className="h-4 w-4" />
                  <a href="mailto:hello@mizuwave.com" className="hover:text-foreground transition-colors">
                    hello@mizuwave.com
                  </a>
                </li>
                <li className="flex items-center gap-x-2">
                  <Phone className="h-4 w-4" />
                  <a href="tel:+1234567890" className="hover:text-foreground transition-colors">
                    +1 (234) 567-890
                  </a>
                </li>
                <li className="flex items-start gap-x-2">
                  <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                  <span>San Francisco, CA</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border py-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © 2024 Mizuwave. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <a href="#" className="text-muted-foreground hover:text-foreground text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-muted-foreground hover:text-foreground text-sm transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}