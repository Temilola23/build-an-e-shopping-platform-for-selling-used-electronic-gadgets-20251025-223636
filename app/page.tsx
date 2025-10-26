import { Header } from "@/components/header"
import { CategoryNav } from "@/components/category-nav"
import { ProductGrid } from "@/components/product-grid"
import { Hero } from "@/components/hero"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <CategoryNav />
      <Hero />
      <main className="container mx-auto px-4 py-8">
        <ProductGrid />
      </main>
    </div>
  )
}
