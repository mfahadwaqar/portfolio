"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { BookOpen, Briefcase, Code2, GraduationCap, User2, Mail } from 'lucide-react'
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar"
import { LucideIcon } from 'lucide-react'

interface NavLink {
  name: string
  href: string
  icon: LucideIcon
}

const links: NavLink[] = [
  { name: "About me", href: "#about", icon: User2 },
  { name: "Education", href: "#education", icon: GraduationCap },
  { name: "Skills", href: "#skills", icon: Code2 },
  { name: "Experience", href: "#experience", icon: Briefcase },
  { name: "Projects", href: "#projects", icon: BookOpen },
  { name: "Contact", href: "#contact", icon: Mail },
]

export function Navigation() {
  const [activeSection, setActiveSection] = useState<string>("")
  const [isCollapsed, setIsCollapsed] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.5 }
    )

    document.querySelectorAll("section[id]").forEach((section) => {
      observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <Sidebar className="transition-all duration-300">
      <SidebarHeader className="border-b p-4">
        <div className="flex items-center gap-3">
          <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center">
            <Code2 className="size-6 text-primary" />
          </div>
          {!isCollapsed && (
            <div>
              <div className="font-semibold">Muhammad Fahad Waqar</div>
              <div className="text-sm text-muted-foreground">Computer Engineer</div>
            </div>
          )}
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {links.map((link) => {
            const Icon = link.icon
            return (
              <SidebarMenuItem key={link.name}>
                <SidebarMenuButton
                  asChild
                  isActive={activeSection === link.href.slice(1)}
                  tooltip={link.name}
                >
                  <a 
                    href={link.href}
                    onClick={(e) => handleClick(e, link.href)}
                    className="flex items-center gap-3"
                  >
                    <Icon className="size-4" />
                    <span>{link.name}</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            )
          })}
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  )
}

