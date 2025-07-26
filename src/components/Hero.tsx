import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-background min-h-screen flex items-center justify-center px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            Ship Products That{" "}
            <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
              Users Love
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
            We help innovative companies design, build, and ship products that are attractive, 
            thoughtful, and enjoyable to use. From concept to launch, we're your trusted software partner.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button size="lg" className="h-12 px-8 text-base">
              Start Your Project
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg" className="h-12 px-8 text-base">
              <Play className="mr-2 h-4 w-4" />
              See Our Work
            </Button>
          </div>
        </div>
      </div>
      
    </section>
  )
}