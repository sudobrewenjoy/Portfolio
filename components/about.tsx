import { Card, CardContent } from "@/components/ui/card"
import { Code2, Database, Globe, Smartphone } from "lucide-react"

const highlights = [
  {
    icon: Code2,
    title: "Frontend Development",
    description: "React, Next.js, TypeScript, Tailwind CSS",
  },
  {
    icon: Database,
    title: "Backend Development",
    description: "Node.js, Python, PostgreSQL, MongoDB",
  },
  {
    icon: Globe,
    title: "Web Technologies",
    description: "REST APIs, GraphQL, WebSockets, PWAs",
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "React Native, Flutter, iOS, Android",
  },
]

export function About() {
  return (
    <section id="about" className="py-20 lg:ml-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            About <span className="text-primary">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            I'm a passionate full-stack developer with 5+ years of experience building scalable web applications and
            mobile solutions. I love turning complex problems into simple, beautiful, and intuitive solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img src="/developer-working-on-multiple-screens-with-code-an.jpg" alt="Developer workspace" className="rounded-2xl shadow-2xl" />
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-4">My Journey</h3>
            <p className="text-muted-foreground leading-relaxed">
              Started as a curious computer science student, I've evolved into a versatile developer who thrives on
              learning new technologies and solving challenging problems. My experience spans from startups to
              enterprise-level applications.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              When I'm not coding, you'll find me contributing to open-source projects, mentoring junior developers, or
              exploring the latest in AI and machine learning.
            </p>

            <div className="flex flex-wrap gap-3 mt-6">
              {["JavaScript", "TypeScript", "React", "Node.js", "Python", "AWS"].map((tech) => (
                <span key={tech} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => {
            const Icon = item.icon
            return (
              <Card
                key={index}
                className="bg-card border-border hover:border-primary/50 transition-all duration-300 group"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="font-semibold mb-2">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
