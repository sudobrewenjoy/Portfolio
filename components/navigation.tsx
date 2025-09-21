"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Code, User, Briefcase, Mail, Zap } from "lucide-react"

const navItems = [
  { name: "Home", href: "#hero", icon: Code },
  { name: "About", href: "#about", icon: User },
  { name: "Skills", href: "#skills", icon: Zap },
  { name: "Projects", href: "#projects", icon: Briefcase },
  { name: "Contact", href: "#contact", icon: Mail },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.href.substring(1))
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.substring(1))
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsOpen(false)
  }

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="fixed top-0 left-0 h-full w-20 bg-sidebar border-r border-sidebar-border z-50 hidden lg:flex flex-col items-center py-8">
        <div className="mb-8">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center animate-glow">
            <Code className="w-6 h-6 text-primary-foreground" />
          </div>
        </div>

        <div className="flex flex-col gap-4">
          {navItems.map((item) => {
            const Icon = item.icon
            const isActive = activeSection === item.href.substring(1)

            return (
              <Button
                key={item.name}
                variant="ghost"
                size="icon"
                onClick={() => scrollToSection(item.href)}
                className={`w-12 h-12 rounded-xl transition-all duration-300 ${
                  isActive
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "text-muted-foreground hover:text-foreground hover:bg-accent"
                }`}
                title={item.name}
              >
                <Icon className="w-5 h-5" />
              </Button>
            )
          })}
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-sidebar/95 backdrop-blur-sm border-b border-sidebar-border z-50 lg:hidden">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Code className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-mono text-lg font-bold">Portfolio</span>
          </div>

          <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)} className="text-foreground">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-sidebar border-b border-sidebar-border">
            <div className="flex flex-col p-4 gap-2">
              {navItems.map((item) => {
                const Icon = item.icon
                const isActive = activeSection === item.href.substring(1)

                return (
                  <Button
                    key={item.name}
                    variant="ghost"
                    onClick={() => scrollToSection(item.href)}
                    className={`justify-start gap-3 ${isActive ? "bg-primary text-primary-foreground" : ""}`}
                  >
                    <Icon className="w-5 h-5" />
                    {item.name}
                  </Button>
                )
              })}
            </div>
          </div>
        )}
      </nav>
    </>
  )
}
