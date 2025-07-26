import { Code, Palette, Zap, Users, Shield, Rocket } from "lucide-react"

const features = [
  {
    name: "Custom Software Development",
    description: "Tailored solutions built with cutting-edge technologies that perfectly fit your business needs.",
    icon: Code,
  },
  {
    name: "UI/UX Design",
    description: "Beautiful, intuitive interfaces that users love, backed by research and best practices.",
    icon: Palette,
  },
  {
    name: "Performance Optimization",
    description: "Lightning-fast applications with optimized performance and seamless user experiences.",
    icon: Zap,
  },
  {
    name: "Team Augmentation",
    description: "Expert developers who integrate seamlessly with your existing team and processes.",
    icon: Users,
  },
  {
    name: "Enterprise Solutions",
    description: "Scalable, secure solutions designed for enterprise-level requirements and compliance.",
    icon: Shield,
  },
  {
    name: "Product Strategy",
    description: "From ideation to launch, we help you build products that achieve business goals.",
    icon: Rocket,
  },
]

export default function Features() {
  return (
    <section className="py-24 sm:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">Our Services</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            End-to-end software solutions
          </p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            We've helped some of the world's coolest companies design, build, and ship products that users love.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-foreground">
                  <feature.icon className="h-5 w-5 flex-none text-primary" aria-hidden="true" />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-muted-foreground">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}