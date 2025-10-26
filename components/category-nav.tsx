"use client"

import { Button } from "@/components/ui/button"
import { Smartphone, Laptop, Tablet, Headphones, Watch, Camera } from "lucide-react"

const categories = [
  { name: "Smartphones", icon: Smartphone },
  { name: "Laptops", icon: Laptop },
  { name: "Tablets", icon: Tablet },
  { name: "Audio", icon: Headphones },
  { name: "Wearables", icon: Watch },
  { name: "Cameras", icon: Camera },
]

export function CategoryNav() {
  return (
    <nav className="border-b border-border bg-card">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-2 overflow-x-auto py-3 scrollbar-hide">
          {categories.map((category) => {
            const Icon = category.icon
            return (
              <Button
                key={category.name}
                variant="ghost"
                className="flex items-center gap-2 whitespace-nowrap hover:bg-secondary"
              >
                <Icon className="h-4 w-4" />
                <span className="hidden sm:inline">{category.name}</span>
              </Button>
            )
          })}
        </div>
      </div>
    </nav>
  )
}
