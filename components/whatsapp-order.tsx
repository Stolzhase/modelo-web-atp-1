"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"

interface WhatsAppOrderProps {
  productName: string
}

export function WhatsAppOrder({ productName }: WhatsAppOrderProps) {
  const [quantity, setQuantity] = useState<number>(10)
  const phoneNumber = "525680774434"

  const handleOrder = () => {
    const message = encodeURIComponent(`Hola, quisiera pedir ${quantity} unidades de ${productName}.`)
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank")
  }

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <label className="text-sm font-medium">Cantidad:</label>
        <div className="flex gap-2">
          {[10, 25, 50].map((q) => (
            <Button
              key={q}
              variant={quantity === q ? "default" : "outline"}
              onClick={() => setQuantity(q)}
              className="flex-1"
            >
              {q}
            </Button>
          ))}
        </div>
      </div>
      <Button onClick={handleOrder} className="w-full gap-2" size="lg">
        <MessageCircle className="h-5 w-5" />
        Pedir por WhatsApp
      </Button>
    </div>
  )
}
