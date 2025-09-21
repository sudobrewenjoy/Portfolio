"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import { useEffect, useState } from "react"

export function Hero() {
  const [text, setText] = useState("")
  const fullText = "Full-Stack Developer"

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      setText(fullText.slice(0, index))
      index++
      if (index > fullText.length) {
        clearInterval(timer)
      }
    }, 100)

    return () => clearInterval(timer)
  }, [])

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center lg:ml-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <img
            src="/professional-developer-avatar-with-coding-elements.jpg"
            alt="Developer Avatar"
            className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-primary animate-float"
          />

          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-balance">
            Hi, I'm <span className="text-primary animate-glow">Daniel saito</span>
          </h1>

          <div className="text-2xl md:text-3xl text-muted-foreground mb-6 font-mono">
            <span className="border-r-2 border-primary animate-pulse">{text}</span>
          </div>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 text-pretty">
            I craft exceptional digital experiences with modern technologies. Passionate about clean code, innovative solutions, and bringing ideas to life.
I had   BlockChain technology of using smart contract
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8">
            View My Work
          </Button>
          <Button variant="outline" size="lg" className="px-8 bg-transparent">
            Download Resume
          </Button>
        </div>

        <div className="flex justify-center gap-6 mb-12">
          <Button
            variant="ghost"
            size="icon"
            className="w-12 h-12 rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            <Github className="w-6 h-6" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="w-12 h-12 rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            <Linkedin className="w-6 h-6" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="w-12 h-12 rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            <Mail className="w-6 h-6" />
          </Button>
        </div>

        <Button variant="ghost" onClick={scrollToAbout} className="animate-bounce hover:animate-none">
          <ArrowDown className="w-6 h-6" />
        </Button>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        />
      </div>
    </section>
  )
}
