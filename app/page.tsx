import { ArrowRight, Github, Linkedin, Mail, Twitter } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { ProjectCard } from "@/components/project-card"
import { SkillBadge } from "@/components/skill-badge"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted">
      <header className="container mx-auto py-6 px-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          Portfolio
        </Link>
        <nav className="hidden md:flex space-x-6">
          <Link href="#about" className="hover:text-primary transition-colors">
            About
          </Link>
          <Link href="#projects" className="hover:text-primary transition-colors">
            Projects
          </Link>
          <Link href="#skills" className="hover:text-primary transition-colors">
            Skills
          </Link>
          <Link href="#contact" className="hover:text-primary transition-colors">
            Contact
          </Link>
        </nav>
        <Button variant="outline" size="sm" className="md:hidden">
          Menu
        </Button>
      </header>

      <main>
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-20 md:py-32 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Hi, I'm <span className="text-primary">Alex</span>
              <br />
              Creative Developer
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-md">
              I build exceptional digital experiences that are fast, accessible, and visually appealing.
            </p>
            <div className="flex space-x-4">
              <Button>
                View Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline">Contact Me</Button>
            </div>
            <div className="flex space-x-4 pt-4">
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="h-6 w-6" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-6 w-6" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20">
              <Image src="/placeholder.svg?height=320&width=320" alt="Profile" fill className="object-cover" priority />
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="bg-muted/50 py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">About Me</h2>
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="md:w-1/2">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="About me"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="md:w-1/2 space-y-4">
                <p className="text-lg">
                  I'm a passionate web developer with over 5 years of experience creating modern, responsive websites
                  and applications. I specialize in front-end development with React and Next.js, but I'm also
                  comfortable working with back-end technologies.
                </p>
                <p className="text-lg">
                  My approach to design focuses on creating intuitive user experiences that are both functional and
                  visually appealing. I believe in clean code, accessibility, and performance optimization.
                </p>
                <p className="text-lg">
                  When I'm not coding, you can find me hiking, reading science fiction, or experimenting with new
                  technologies.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">My Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ProjectCard
                title="E-commerce Platform"
                description="A full-featured online store built with Next.js and Stripe integration."
                image="/placeholder.svg?height=300&width=500"
                tags={["Next.js", "Stripe", "Tailwind CSS"]}
                link="#"
              />
              <ProjectCard
                title="Portfolio Website"
                description="A responsive portfolio website showcasing creative work and projects."
                image="/placeholder.svg?height=300&width=500"
                tags={["React", "Framer Motion", "GSAP"]}
                link="#"
              />
              <ProjectCard
                title="Task Management App"
                description="A productivity application with drag-and-drop interface and real-time updates."
                image="/placeholder.svg?height=300&width=500"
                tags={["TypeScript", "Firebase", "React DnD"]}
                link="#"
              />
            </div>
            <div className="mt-12 text-center">
              <Button variant="outline">
                View All Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="bg-muted/50 py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Skills & Expertise</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              <SkillBadge name="React" level={90} />
              <SkillBadge name="Next.js" level={85} />
              <SkillBadge name="TypeScript" level={80} />
              <SkillBadge name="Tailwind CSS" level={95} />
              <SkillBadge name="Node.js" level={75} />
              <SkillBadge name="GraphQL" level={70} />
              <SkillBadge name="UI/UX Design" level={85} />
              <SkillBadge name="Responsive Design" level={90} />
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Get In Touch</h2>
            <div className="flex flex-col md:flex-row gap-12">
              <div className="md:w-1/2 space-y-6">
                <h3 className="text-2xl font-semibold">Contact Information</h3>
                <p className="text-lg">
                  I'm currently available for freelance work and exciting opportunities. Feel free to reach out if you
                  have a project in mind or just want to connect!
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <span>hello@example.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Twitter className="h-5 w-5 text-primary" />
                    <span>@username</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Linkedin className="h-5 w-5 text-primary" />
                    <span>linkedin.com/in/username</span>
                  </div>
                </div>
              </div>
              {/* <div className="md:w-1/2">
                <ContactForm />
              </div> */}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-background border-t py-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">© {new Date().getFullYear()} Portfolio. All rights reserved.</p>
          <div className="flex justify-center space-x-6 mt-4">
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
