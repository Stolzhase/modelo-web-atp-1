import { ProductCard } from "@/components/product-card"
import { products } from "@/lib/products-data"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ProductosPage() {
  // Group products by category
  const categories = ["Flores Comestibles", "Brotes", "Hortalizas y Hojas Verdes"] as const

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Nuestro Catálogo 2025</h1>
        <p className="text-lg text-muted-foreground">
          Descubre nuestra selección de productos frescos cultivados con pasión. Desde flores comestibles que aportan
          elegancia hasta brotes llenos de vida.
        </p>
      </div>

      <Tabs defaultValue="todos" className="space-y-8">
        <div className="flex justify-center overflow-x-auto pb-4">
          <TabsList className="h-auto p-1">
            <TabsTrigger value="todos" className="px-6 py-2 text-base">
              Todos
            </TabsTrigger>
            {categories.map((cat) => (
              <TabsTrigger key={cat} value={cat} className="px-6 py-2 text-base">
                {cat}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>

        <TabsContent value="todos" className="space-y-12">
          {categories.map((category) => (
            <section key={category} className="space-y-6">
              <div className="flex items-center gap-4">
                <h2 className="text-2xl font-bold text-primary">{category}</h2>
                <div className="h-px bg-border flex-1" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {products
                  .filter((p) => p.category === category)
                  .map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
              </div>
            </section>
          ))}
        </TabsContent>

        {categories.map((category) => (
          <TabsContent key={category} value={category}>
            <div className="mb-8 bg-muted/50 p-6 rounded-lg border">
              <h3 className="text-xl font-semibold mb-2">Sobre {category}</h3>
              <p className="text-muted-foreground">
                {category === "Flores Comestibles" &&
                  "Un toque de color, aroma y sabor. Nuestras flores comestibles transforman cualquier platillo en una obra de arte."}
                {category === "Brotes" &&
                  "Pequeños, pero llenos de vida. Los brotes concentran todo el poder de la naturaleza en cada hoja."}
                {category === "Hortalizas y Hojas Verdes" &&
                  "La esencia del huerto. Hojas frescas y tiernas, listas para realzar tus platillos con su textura y sabor inconfundibles."}
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {products
                .filter((p) => p.category === category)
                .map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}
