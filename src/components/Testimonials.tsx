import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Chen",
    role: "VP of Product",
    company: "TechFlow Inc",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&h=150&q=80",
    content: "Mizuwave transformed our vision into a product that our users absolutely love. Their attention to detail and technical expertise is unmatched.",
    rating: 5
  },
  {
    name: "Marcus Rodriguez",
    role: "CTO",
    company: "DataStream",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&h=150&q=80",
    content: "Working with Mizuwave felt like having an extension of our team. They delivered a scalable solution that exceeded our performance expectations.",
    rating: 5
  },
  {
    name: "Emily Foster",
    role: "Founder",
    company: "GreenTech Solutions",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&h=150&q=80",
    content: "From concept to launch, Mizuwave guided us through every step. Their strategic insights helped us build something our customers genuinely need.",
    rating: 5
  }
]

export default function Testimonials() {
  return (
    <section className="bg-muted py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">Client Success</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Trusted by innovative companies
          </p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            See what our clients say about working with Mizuwave to bring their ideas to life.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-card rounded-2xl p-8 shadow-sm ring-1 ring-border">
              <div className="flex items-center gap-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <blockquote className="text-card-foreground mb-6">
                <p>"{testimonial.content}"</p>
              </blockquote>
              <div className="flex items-center gap-x-4">
                <img 
                  className="h-12 w-12 rounded-full object-cover" 
                  src={testimonial.image} 
                  alt={testimonial.name}
                />
                <div>
                  <h4 className="font-semibold text-card-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}, {testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}