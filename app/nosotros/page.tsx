import Image from "next/image"
import { ScrollReveal } from "@/components/scroll-reveal"

export default function AboutPage() {
  const timeline = [
    {
      year: "El Origen",
      title: "Pasión por la Tierra",
      description:
        "Todo comenzó con un pequeño huerto y un sueño: cultivar ingredientes que no solo alimentaran, sino que inspiraran. Nuestra conexión con la tierra es el fundamento de todo lo que hacemos.",
      image: "/placeholder.svg?height=600&width=800&text=El+Origen",
    },
    {
      year: "Crecimiento",
      title: "Innovación Sostenible",
      description:
        "A medida que crecimos, adoptamos técnicas de cultivo sostenible. Aprendimos a escuchar a la naturaleza, eliminando químicos y abrazando procesos orgánicos que respetan el ciclo de vida.",
      image: "/placeholder.svg?height=600&width=800&text=Crecimiento",
    },
    {
      year: "Actualidad",
      title: "Excelencia Culinaria",
      description:
        "Hoy, somos proveedores orgullosos de los mejores chefs y restaurantes. Cada flor, brote y hoja es seleccionada a mano para asegurar que llegue a tu plato con la máxima frescura y belleza.",
      image: "/placeholder.svg?height=600&width=800&text=Actualidad",
    },
  ]

  return (
    <div className="min-h-screen pb-20">
      {/* Header */}
      <div className="bg-muted/30 py-20 md:py-32">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 text-primary">Nuestra Historia</h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto font-light">
            Cultivando belleza y sabor desde el corazón de la tierra hasta tu mesa.
          </p>
        </div>
      </div>

      {/* Timeline */}
      <div className="container mx-auto px-4 py-20">
        <div className="space-y-32">
          {timeline.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-center gap-12 md:gap-24 ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="flex-1 w-full">
                <ScrollReveal>
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </ScrollReveal>
              </div>

              <div className="flex-1 space-y-6 text-center md:text-left">
                <ScrollReveal className={index % 2 === 1 ? "md:text-right" : ""}>
                  <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary font-medium mb-4">
                    {item.year}
                  </span>
                  <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-foreground">{item.title}</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">{item.description}</p>
                </ScrollReveal>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Final Quote */}
      <ScrollReveal>
        <div className="container mx-auto px-4 py-20 text-center">
          <blockquote className="text-3xl md:text-4xl font-serif italic text-primary/80 max-w-4xl mx-auto">
            "La cocina es un arte, y nosotros proporcionamos los colores más vivos para tu lienzo."
          </blockquote>
        </div>
      </ScrollReveal>
    </div>
  )
}
