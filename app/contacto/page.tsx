import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageCircle, Phone, Mail } from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
  // Placeholder phone number from the prompt
  const phoneNumber = "5680774434"
  const whatsappLink = `https://wa.me/52${phoneNumber}?text=Hola,%20me%20interesa%20hacer%20un%20pedido`

  return (
    <div className="container mx-auto py-12 px-4 flex flex-col md:flex-row gap-8 min-h-[80vh] items-start justify-center">
      {/* Information Side */}
      <div className="w-full max-w-md space-y-6 mt-4">
        <div>
          <h1 className="text-4xl font-bold mb-4">Contáctanos</h1>
          <p className="text-muted-foreground text-lg">
            Estamos aquí para atender tus pedidos y resolver cualquier duda sobre nuestros productos.
          </p>
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-4 p-4 bg-muted/50 rounded-lg">
            <div className="bg-primary/10 p-3 rounded-full">
              <Phone className="w-6 h-6 text-primary" />
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">Teléfono / WhatsApp</p>
              <p className="text-lg font-bold">{phoneNumber}</p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 bg-muted/50 rounded-lg">
            <div className="bg-primary/10 p-3 rounded-full">
              <Mail className="w-6 h-6 text-primary" />
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">E-mail</p>
              <p className="text-lg font-bold">maralvaflo@gmail.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* Form Card */}
      <Card className="w-full max-w-lg border-2 shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl text-center">Envíanos un mensaje</CardTitle>
          <CardDescription className="text-center">
            Elige el medio que prefieras para comunicarte con nosotros.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <Link href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <Button
              className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white h-12 text-lg shadow-md transition-all hover:-translate-y-1"
              variant="default"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Contactar por WhatsApp
            </Button>
          </Link>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">O usa nuestro formulario</span>
            </div>
          </div>

          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Nombre
                </label>
                <Input id="name" placeholder="Tu nombre" required />
              </div>
              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium">
                  Teléfono
                </label>
                <Input id="phone" placeholder="10 dígitos" type="tel" />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>
              <Input id="email" type="email" placeholder="tu@email.com" required />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">
                Mensaje
              </label>
              <Textarea
                id="message"
                placeholder="Detalles de tu pedido o consulta..."
                className="min-h-[120px]"
                required
              />
            </div>

            <Button type="submit" className="w-full h-11 bg-transparent" variant="outline">
              Enviar Correo
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
