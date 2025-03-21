
import { Home, User, Briefcase, FileText, MessageSquare } from 'lucide-react'
import { NavBar } from "@/components/ui/tubelight-navbar"

export function NavBarDemo() {
  const navItems = [
    { name: 'Home', url: '#home', icon: Home },
    { name: 'Services', url: '#services', icon: Briefcase },
    { name: 'About', url: '#about', icon: User },
    { name: 'Blog', url: '#blog', icon: FileText },
    { name: 'Contact', url: '#contact', icon: MessageSquare }
  ]

  return <NavBar items={navItems} />
}
