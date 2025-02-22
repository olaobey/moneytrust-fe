"use client"

import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

const categories = ["Board", "X-Traded", "OTC", "FI", "Derivatives"]
const products = ["All", "SMAZ", "SBBS", "SPRL", "SGNG", "SSGM", "FETC", "SGOC"]

export function MarketHeader() {
  return (
    <div className="space-y-4 p-4 border-b">
      <div className="flex items-center space-x-4">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search" className="pl-8" />
        </div>
      </div>

      <Tabs defaultValue="board" className="space-y-4">
        <TabsList>
          {categories.map((category) => (
            <TabsTrigger key={category} value={category.toLowerCase()}>
              {category}
            </TabsTrigger>
          ))}
        </TabsList>
        <TabsList>
          {products.map((product) => (
            <TabsTrigger key={product} value={product.toLowerCase()}>
              {product}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
    </div>
  )
}

