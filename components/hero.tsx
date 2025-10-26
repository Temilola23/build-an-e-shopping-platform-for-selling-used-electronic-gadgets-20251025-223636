import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="bg-gradient-to-r from-primary/20 to-accent/20 border-b border-border">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold text-balance mb-4 md:text-5xl">
            Premium Used Electronics at Unbeatable Prices
          </h2>
          <p className="text-lg text-muted-foreground mb-6 text-pretty">
            Shop certified refurbished gadgets with warranty. Save up to 60% on top brands.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Shop Now
            </Button>
            <Button size="lg" variant="outline">
              View Deals
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
