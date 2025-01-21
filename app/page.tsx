"use client";

import { Avatar } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Monitor, Mail, Github, MapPin, GraduationCap, Building, Code2, Phone, Linkedin } from "lucide-react"
import { Navigation } from "./components/navigation"
import { ThemeToggle } from "./components/theme-toggle"
import { SidebarProvider, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar"
import Image from "next/image"
import { useState } from "react"
import emailjs from '@emailjs/browser'

// Initialize EmailJS
emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!);

export default function Portfolio() {
  const skills = {
    "Programming Languages": ["Python", "C/C++", "SQL", "Flutter", "HTML", "CSS"],
    Libraries: ["Pandas", "Numpy", "TensorFlow", "OpenCV", "Matplotlib", "Keras"],
    Tools: [
      "Git",
      "Bash",
      "Android Studio",
      "Jupyter Notebooks",
      "Vivado",
      "Power BI",
      "Tableau",
      "Metabase",
      "MATLAB",
      "Proteus Suite",
      "Office Suite",
      "Adobe Suite",
    ],
  }

  const experiences = [
    {
      title: "Data Engineer",
      company: "SkyElectric",
      location: "Islamabad, Pakistan",
      period: "June 2024 - December 2024",
      responsibilities: [
        "Extracted insights using advanced Python data analysis, improving decision-making.",
        "Designed and maintained systems dashboards and data visualizations using Metabase and Power BI.",
        "Managed and optimized PostgreSQL/MySQL databases for efficient storage, retrieval, and performance.",
        "Streamlined ETL processes, automated Linux workflows and managed CI/CD pipelines with Jenkins.",
      ],
    },
    {
      title: "Intern, Digital Technologies",
      company: "Zong CMPak",
      location: "Islamabad, Pakistan",
      period: "July 2023 - August 2023",
      responsibilities: [
        "Leveraged SQL for efficient database management, data extraction, and query optimization.",
        "Applied data analysis techniques to uncover insights and extract meaningful information from datasets.",
        "Gained hands-on experience in applying machine learning models to solve real-world problems.",
        "Designed data visualizations with Power BI and Tableau, and performed sentiment analysis on textual data.",
      ],
    },
  ]

  const projects = [
    {
      title: "OBD Sentinel: IoT-based Automobile OBD Monitoring System",
      advisor: "Dr. Niaz Ahmed",
      description:
        "Developed an IoT-based OBD Monitoring System with real-time vehicle diagnostics and cloud-based analytics. Designed hardware and a mobile app to deliver insights on performance, safety alerts, and maintenance trends.",
    },
    {
      title: "Facial Expression Detection System",
      description:
        "Built a real-time system to classify emotions using a pre-trained model and webcam input using OpenCV and TensorFlow.",
    },
    {
      title: "Gesture Recognition System using TinyML",
      description: "Deployed an EdgeAI model on Raspberry Pi Pico for customizable hand gesture recognition.",
    },
    {
      title: "Warehouse Automation Monitoring System Model",
      description:
        "Developed a warehouse automation system with automated control and real-time monitoring capabilities.",
    },
  ]

  const educationHistory = [
    {
      degree: "BS Electrical Engineering",
      major: "Computer Engineering",
      institution: "National University of Computer and Emerging Sciences (FAST-NUCES)",
      location: "Islamabad, Pakistan",
      period: "August 2020 – June 2024",
      details: {
        project: "IoT-based Automobile OBD Monitoring System",
      },
    },
    {
      degree: "Intermediate Education",
      major: "Pre-Engineering",
      institution: "Punjab College of Science",
      location: "Islamabad, Pakistan",
      period: "Mar. 2018 – Apr. 2020",
    },
    {
      degree: "O Levels",
      major: "Science Group",
      institution: "Islamabad Convent School",
      location: "Islamabad, Pakistan",
      period: "Sept. 2016 – May 2018",
    },
  ]

  const ContactForm = () => {
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      setIsLoading(true);

      try {
        await emailjs.send(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
          {
            from_name: formData.name,
            from_email: formData.email,
            subject: formData.subject,
            message: formData.message,
            to_name: 'Fahad',
            reply_to: formData.email,
          }
        );

        alert('Message sent successfully!');
        setFormData({ name: "", email: "", subject: "", message: "" }); // Reset form
      } catch (error) {
        console.error('Error sending message:', error);
        alert('Failed to send message. Please try again.');
      } finally {
        setIsLoading(false);
      }
    };

    return (
      <div className="mb-12">
        <h3 className="text-2xl font-semibold mb-6">Send me a message</h3>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <input
              type="text"
              placeholder="Name*"
              required
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="w-full p-3 rounded-lg bg-muted/50 border border-border"
              disabled={isLoading}
            />
            <input
              type="email"
              placeholder="Email*"
              required
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="w-full p-3 rounded-lg bg-muted/50 border border-border"
              disabled={isLoading}
            />
            <input
              type="text"
              placeholder="Subject*"
              required
              value={formData.subject}
              onChange={(e) => setFormData({...formData, subject: e.target.value})}
              className="w-full p-3 rounded-lg bg-muted/50 border border-border"
              disabled={isLoading}
            />
          </div>
          <div>
            <textarea
              placeholder="Message*"
              required
              rows={6}
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              className="w-full p-3 rounded-lg bg-muted/50 border border-border"
              disabled={isLoading}
            />
          </div>
          <div className="md:col-span-2 flex justify-center">
            <Button type="submit" className="px-8" disabled={isLoading}>
              {isLoading ? 'SENDING...' : 'SEND MESSAGE'}
            </Button>
          </div>
        </form>
      </div>
    );
  };

  return (
    <SidebarProvider>
      <div className="flex min-h-screen bg-background text-foreground">
        <Navigation />
        <SidebarInset className="flex-1 overflow-hidden">
          <main className="flex-1 overflow-auto">
            <header className="flex justify-between items-center h-16 px-6 border-b sticky top-0 z-10 bg-background">
              <div className="flex items-center gap-4">
                <SidebarTrigger />
                <h1 className="text-2xl font-bold">Muhammad Fahad Waqar</h1>
              </div>
              <ThemeToggle />
            </header>

            <div className="max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-24">
              {/* About Section */}
              <section id="about" className="space-y-8">
                <div className="flex items-center gap-4">
                  <h2 className="text-3xl font-bold">About me</h2>
                  <div className="h-px flex-1 bg-border" />
                </div>

                <div className="grid lg:grid-cols-[2fr,1fr] gap-8 items-start">
                  <div className="space-y-4">
                    <p className="text-xl font-semibold text-primary">Hello... I&apos;m Muhammad Fahad Waqar!</p>
                    <p className="text-muted-foreground">
                      As a motivated Electrical Engineer focusing on Data Science and Machine Learning, I bring a strong
                      foundation in data analysis, predictive modeling, and workflow automation. My experience spans
                      developing and optimizing data pipelines, designing analytical dashboards, and utilizing advanced
                      tools like Python, SQL, and Power BI to extract actionable insights from data.
                    </p>
                    <p className="text-muted-foreground">
                      Dedicated to solving real-world challenges through innovative, data-driven approaches, I am
                      passionate about leveraging cutting-edge machine-learning techniques. Committed to continuous
                      learning, I aim to make a meaningful impact in AI and Data Science.
                    </p>
                    <div className="flex flex-wrap items-center gap-4 text-muted-foreground pt-4">
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-primary" />
                        <span>Islamabad, Pakistan</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Mail className="h-4 w-4 text-primary" />
                        <a href="mailto:mfahadwaqar@gmail.com" className="hover:text-primary transition-colors">
                          mfahadwaqar@gmail.com
                        </a>
                      </div>
                      <div className="flex items-center gap-2">
                        <Linkedin className="h-4 w-4 text-primary" />
                        <a href="https://www.linkedin.com/in/mfahadwaqar" className="hover:text-primary transition-colors">
                          @mfahadwaqar
                        </a>
                      </div>
                      <div className="flex items-center gap-2">
                        <Github className="h-4 w-4 text-primary" />
                        <a href="https://github.com/mfahadwaqar" className="hover:text-primary transition-colors">
                          @mfahadwaqar
                        </a>
                      </div>
                    </div>
                    <Button className="mt-4">Let&apos;s collaborate!</Button>
                  </div>
                  <div className="relative aspect-square bg-muted rounded-xl overflow-hidden max-w-md mx-auto lg:mx-0">
                    <Image
                      src="/FW_dp.jpg"
                      alt="Muhammad Fahad Waqar"
                      fill
                      sizes="(max-width: 768px) 100vw, 400px"
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>
              </section>

              {/* Education Section */}
              <section id="education" className="space-y-8">
                <div className="flex items-center gap-4">
                  <h2 className="text-3xl font-bold">Education</h2>
                  <div className="h-px flex-1 bg-border" />
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {educationHistory.map((edu, index) => (
                    <Card key={index} className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="mt-1">
                          <GraduationCap className="h-6 w-6 text-primary" />
                        </div>
                        <div className="space-y-2">
                          <h3 className="text-xl font-semibold">{edu.degree}</h3>
                          <p className="text-primary">{edu.major}</p>
                          <p className="text-muted-foreground">{edu.institution}</p>
                          <p className="text-muted-foreground">{edu.location}</p>
                          <p className="text-muted-foreground">{edu.period}</p>
                          {edu.details?.project && (
                            <div className="pt-2">
                              <p className="text-muted-foreground">
                                <span className="text-primary">Final Year Project: </span>
                                {edu.details.project}
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </section>

              {/* Skills Section */}
              <section id="skills" className="space-y-8">
                <div className="flex items-center gap-4">
                  <h2 className="text-3xl font-bold">Skills</h2>
                  <div className="h-px flex-1 bg-border" />
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {Object.entries(skills).map(([category, items]) => (
                    <Card key={category} className="p-6">
                      <h3 className="text-xl font-semibold mb-4">{category}</h3>
                      <div className="flex flex-wrap gap-2">
                        {items.map((skill) => (
                          <Badge key={skill} variant="secondary">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </Card>
                  ))}
                </div>
              </section>

              {/* Experience Section */}
              <section id="experience" className="space-y-8">
                <div className="flex items-center gap-4">
                  <h2 className="text-3xl font-bold">Experience</h2>
                  <div className="h-px flex-1 bg-border" />
                </div>

                <div className="grid gap-6 lg:grid-cols-2">
                  {experiences.map((exp, index) => (
                    <Card key={index} className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="mt-1">
                          <Building className="h-6 w-6 text-primary" />
                        </div>
                        <div className="space-y-2">
                          <h3 className="text-xl font-semibold">{exp.title}</h3>
                          <p className="text-primary">{exp.company}</p>
                          <p className="text-muted-foreground">
                            {exp.location} • {exp.period}
                          </p>
                          <ul className="list-disc list-inside space-y-1 pt-2">
                            {exp.responsibilities.map((resp, i) => (
                              <li key={i} className="text-muted-foreground">
                                {resp}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </section>

              {/* Projects Section */}
              <section id="projects" className="space-y-8">
                <div className="flex items-center gap-4">
                  <h2 className="text-3xl font-bold">Projects</h2>
                  <div className="h-px flex-1 bg-border" />
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  {projects.map((project, index) => (
                    <Card key={index} className="p-6">
                      <div className="space-y-2">
                        <h3 className="text-xl font-semibold">{project.title}</h3>
                        {project.advisor && <p className="text-primary">Advised by: {project.advisor}</p>}
                        <p className="text-muted-foreground">{project.description}</p>
                      </div>
                    </Card>
                  ))}
                </div>
              </section>

              {/* Contact Section */}
              <section id="contact" className="space-y-8">
                <div className="flex items-center gap-4">
                  <h2 className="text-3xl font-bold">Contact</h2>
                  <div className="h-px flex-1 bg-border" />
                </div>

                {/* Contact Form */}
                <ContactForm />

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                  <Card className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="mt-1">
                        <Mail className="h-6 w-6 text-primary" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-xl font-semibold">Email</h3>
                        <a
                          href="mailto:mfahadwaqar@gmail.com"
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          mfahadwaqar@gmail.com
                        </a>
                      </div>
                    </div>
                  </Card>
                  <Card className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="mt-1">
                        <Phone className="h-6 w-6 text-primary" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-xl font-semibold">Phone</h3>
                        <p className="text-muted-foreground">+92 343 570 9362</p>
                      </div>
                    </div>
                  </Card>
                  <Card className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="mt-1">
                        <Linkedin className="h-6 w-6 text-primary" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-xl font-semibold">LinkedIn</h3>
                        <a
                          href="https://www.linkedin.com/in/mfahadwaqar"
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          @mfahadwaqar
                        </a>
                      </div>
                    </div>
                  </Card>
                  <Card className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="mt-1">
                        <Github className="h-6 w-6 text-primary" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-xl font-semibold">GitHub</h3>
                        <a
                          href="https://github.com/mfahadwaqar"
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          @mfahadwaqar
                        </a>
                      </div>
                    </div>
                  </Card>
                </div>
              </section>
            </div>
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  )
}

