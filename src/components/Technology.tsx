const technologies = [
  {
    category: "Frontend",
    items: [
      { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
      { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
      { name: "Vue.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg" },
      { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
      { name: "Tailwind", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
      { name: "Astro", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/astro/astro-original.svg" }
    ]
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
      { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
      { name: "Go", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original.svg" },
      { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
      { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
      { name: "Redis", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg" }
    ]
  },
  {
    category: "Cloud & DevOps",
    items: [
      { name: "AWS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" },
      { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
      { name: "Kubernetes", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-original.svg" },
      { name: "GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" },
      { name: "Vercel", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg" },
      { name: "Terraform", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/terraform/terraform-original.svg" }
    ]
  }
]

export default function Technology() {
  return (
    <section className="py-24 sm:py-32 bg-muted">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">Our Technology Stack</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Modern tools for exceptional results
          </p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            We leverage cutting-edge technologies to build scalable, performant, and maintainable solutions.
          </p>
        </div>

        <div className="mt-16 space-y-12">
          {technologies.map((category) => (
            <div key={category.category} className="space-y-8">
              <h3 className="text-xl font-semibold text-foreground text-center">
                {category.category}
              </h3>
              <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-6">
                {category.items.map((tech) => (
                  <div 
                    key={tech.name} 
                    className="bg-card rounded-xl p-6 shadow-sm ring-1 ring-border hover:shadow-md transition-all duration-200 flex flex-col items-center group"
                  >
                    <div className="w-12 h-12 mb-3 flex items-center justify-center">
                      <img 
                        src={tech.logo} 
                        alt={tech.name}
                        className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-200"
                      />
                    </div>
                    <h4 className="text-sm font-medium text-card-foreground text-center">
                      {tech.name}
                    </h4>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}