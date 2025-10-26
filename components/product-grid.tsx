import { ProductCard } from "@/components/product-card"

const products = [
  {
    id: 1,
    name: "iPhone 13 Pro",
    condition: "Excellent",
    originalPrice: 999,
    price: 649,
    discount: 35,
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.8,
    reviews: 234,
  },
  {
    id: 2,
    name: "MacBook Air M1",
    condition: "Like New",
    originalPrice: 1299,
    price: 849,
    discount: 35,
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.9,
    reviews: 456,
  },
  {
    id: 3,
    name: 'iPad Pro 11"',
    condition: "Very Good",
    originalPrice: 899,
    price: 599,
    discount: 33,
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.7,
    reviews: 189,
  },
  {
    id: 4,
    name: "Sony WH-1000XM4",
    condition: "Excellent",
    originalPrice: 349,
    price: 229,
    discount: 34,
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.9,
    reviews: 567,
  },
  {
    id: 5,
    name: "Apple Watch Series 7",
    condition: "Like New",
    originalPrice: 429,
    price: 299,
    discount: 30,
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.6,
    reviews: 312,
  },
  {
    id: 6,
    name: "Canon EOS R6",
    condition: "Very Good",
    originalPrice: 2499,
    price: 1799,
    discount: 28,
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.8,
    reviews: 145,
  },
  {
    id: 7,
    name: "Samsung Galaxy S22",
    condition: "Excellent",
    originalPrice: 799,
    price: 499,
    discount: 38,
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.7,
    reviews: 289,
  },
  {
    id: 8,
    name: "Dell XPS 15",
    condition: "Like New",
    originalPrice: 1899,
    price: 1299,
    discount: 32,
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.8,
    reviews: 201,
  },
]

export function ProductGrid() {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Featured Products</h2>
        <p className="text-muted-foreground">{products.length} items</p>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}
