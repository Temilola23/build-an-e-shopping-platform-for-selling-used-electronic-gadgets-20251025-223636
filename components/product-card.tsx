"use client"

import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, ShoppingCart, Heart } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

interface Product {
  id: number
  name: string
  condition: string
  originalPrice: number
  price: number
  discount: number
  image: string
  rating: number
  reviews: number
}

export function ProductCard({ product }: { product: Product }) {
  const [isWishlisted, setIsWishlisted] = useState(false)

  return (
    <Card className="group overflow-hidden transition-all hover:shadow-lg hover:border-primary/50">
      <CardContent className="p-0">
        <div className="relative aspect-square overflow-hidden bg-secondary">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            fill
            className="object-cover transition-transform group-hover:scale-105"
          />
          <Badge className="absolute top-3 left-3 bg-destructive text-destructive-foreground">
            {product.discount}% OFF
          </Badge>
          <Button
            size="icon"
            variant="secondary"
            className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity"
            onClick={() => setIsWishlisted(!isWishlisted)}
          >
            <Heart className={`h-4 w-4 ${isWishlisted ? "fill-current text-destructive" : ""}`} />
          </Button>
        </div>
        <div className="p-4">
          <Badge variant="outline" className="mb-2 text-xs">
            {product.condition}
          </Badge>
          <h3 className="font-semibold text-lg mb-2 line-clamp-1">{product.name}</h3>
          <div className="flex items-center gap-1 mb-3">
            <Star className="h-4 w-4 fill-primary text-primary" />
            <span className="text-sm font-medium">{product.rating}</span>
            <span className="text-sm text-muted-foreground">({product.reviews})</span>
          </div>
          <div className="flex items-baseline gap-2 mb-4">
            <span className="text-2xl font-bold text-foreground">${product.price}</span>
            <span className="text-sm text-muted-foreground line-through">${product.originalPrice}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button className="w-full bg-primary hover:bg-primary/90" size="lg">
          <ShoppingCart className="h-4 w-4 mr-2" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  )
}
