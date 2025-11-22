import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { products } from "@/lib/products-data"
import { ProductCard } from "@/components/product-card"
import { ArrowRight, Sun } from "lucide-react"

export default function ColeccionesPage() {
  // Select some products for "Seasonal" display
  const seasonalProducts = products.slice(0, 4)
  const chefsChoice = products.slice(5, 9)

  return (
    <div className="container mx-auto py-12 px-4 space-y-20">
      {/* Hero Section */}
      <section className="relative rounded-3xl overflow-hidden bg-primary/5 text-primary-foreground min-h-[400px] flex items-center">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1200')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
        <div className="relative z-10 container mx-auto px-6 md:px-12 py-12">
          <div className="max-w-2xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary text-primary-foreground text-sm font-medium">
              <Sun className="w-4 h-4" />
              <span>Colección de Verano 2025</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-white">Sabores de Temporada</h1>
            <p className="text-lg md:text-xl text-white/90 max-w-[600px]">
              Una selección curada de nuestras flores y brotes más frescos, perfectos para los menús vibrantes de esta
              estación.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 border-none">
                Ver Colección
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white/20">
                Descargar Catálogo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Seasonal Grid */}
      <section className="space-y-8">
        <div className="flex flex-col md:flex-row justify-between items-end gap-4">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">Favoritos de la Estación</h2>
            <p className="text-muted-foreground text-lg">Lo que nuestros clientes están amando en este momento.</p>
          </div>
          <Link href="/productos" className="text-primary hover:underline inline-flex items-center gap-1">
            Ver todo <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {seasonalProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Featured Collections */}
      <section className="grid md:grid-cols-2 gap-8">
        <div className="group relative overflow-hidden rounded-2xl bg-muted aspect-[16/9] md:aspect-auto">
          <Image
            src="/placeholder.svg?height=600&width=800"
            alt="Mixología"
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/40 transition-opacity group-hover:bg-black/50" />
          <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
            <h3 className="text-2xl font-bold mb-2">Mixología Botánica</h3>
            <p className="text-white/90 mb-4">Eleva tus cócteles con nuestras flores y hierbas aromáticas.</p>
            <Button variant="secondary" className="w-fit">
              Explorar
            </Button>
          </div>
        </div>
        <div className="group relative overflow-hidden rounded-2xl bg-muted aspect-[16/9] md:aspect-auto">
          <Image
            src="/placeholder.svg?height=600&width=800"
            alt="Platos Gourmet"
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/40 transition-opacity group-hover:bg-black/50" />
          <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
            <h3 className="text-2xl font-bold mb-2">Alta Cocina</h3>
            <p className="text-white/90 mb-4">Detalles finos para platos que merecen una presentación excepcional.</p>
            <Button variant="secondary" className="w-fit">
              Explorar
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
