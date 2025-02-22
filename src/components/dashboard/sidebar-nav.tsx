"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { LayoutDashboard, LineChart, History, FolderOpen, XCircle, Users, FileText, Settings } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const sidebarItems = [
  {
    title: "Overview",
    icon: LayoutDashboard,
    href: "/dashboard",
  },
  {
    title: "Market",
    icon: LineChart,
    href: "/dashboard/market",
  },
  {
    title: "Portfolio",
    icon: FolderOpen,
    href: "/dashboard/portfolio",
  },
  {
    title: "Order Book",
    icon: FileText,
    href: "/dashboard/market/order-book",
  },
  {
    title: "Price History",
    icon: History,
    href: "/dashboard/price-history",
  },
  {
    title: "Open Orders",
    icon: FolderOpen,
    href: "/dashboard/open-orders",
  },
  {
    title: "Closed Trades",
    icon: XCircle,
    href: "/dashboard/closed-trades",
  },
  {
    title: "Cancelled Trades",
    icon: XCircle,
    href: "/dashboard/cancelled-trades",
  },
  {
    title: "Community",
    icon: Users,
    href: "/dashboard/community",
  },
  {
    title: "Reports",
    icon: FileText,
    href: "/dashboard/reports",
  },
  {
    title: "Settings",
    icon: Settings,
    href: "/dashboard/settings",
  },
]

export function SidebarNav() {
  const pathname = usePathname()

  return (
    <nav className="flex flex-col gap-2 p-4">
      {sidebarItems.map((item) => {
        const Icon = item.icon
        return (
          <Button
            key={item.href}
            variant={pathname === item.href ? "secondary" : "ghost"}
            className={cn("justify-start gap-2", pathname === item.href && "bg-muted")}
            asChild
          >
            <Link href={item.href}>
              <Icon className="h-4 w-4" />
              {item.title}
            </Link>
          </Button>
        )
      })}
    </nav>
  )
}

