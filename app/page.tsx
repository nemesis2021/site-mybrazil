"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import Image from "next/image"

export default function Home() {
  const [showLegalMentions, setShowLegalMentions] = useState(false)

  const handleContactClick = () => {
    window.location.href = "mailto:tudobem@mybrazilfactory.com"
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section with Green Background */}
      <section className="bg-[#1c5f37] text-white py-20 px-4 min-h-[60vh] flex items-center">
        <div className="max-w-6xl mx-auto text-center w-full">
          {/* Main Logo */}
          <div className="mb-8">
            <Image
              src="/images/fruitycorp-logo-blanc.png"
              alt="FruityCorp Logo"
              width={600}
              height={200}
              className="mx-auto"
              priority
            />
          </div>

          {/* Tagline with decorative lines */}
          <div className="flex items-center justify-center mb-16">
            <div className="flex-1 h-px bg-white max-w-xs"></div>
            <h2 className="mx-8 text-xl font-light whitespace-nowrap">The Fresh Fruit Corporation</h2>
            <div className="flex-1 h-px bg-white max-w-xs"></div>
          </div>

          {/* Brand Logos */}
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            <Image
              src="/images/logo-mbf-blanc.png"
              alt="My Brazil Factory"
              width={120}
              height={80}
              className="h-16 w-auto"
            />
            <Image
              src="/images/logo-mbf-pro-blanc.png"
              alt="My Brazil Factory Pro"
              width={120}
              height={80}
              className="h-16 w-auto"
            />
            <Image
              src="/images/logo-samba-pro-blanc.png"
              alt="Samba Pro"
              width={120}
              height={80}
              className="h-16 w-auto"
            />
            <Image
              src="/images/logo-juste-presse-pro-blanc.png"
              alt="Juste Presse Pro"
              width={120}
              height={80}
              className="h-16 w-auto"
            />
            <Image
              src="/images/la-jucerie-pro-blanc.png"
              alt="La Jucerie Pro"
              width={120}
              height={80}
              className="h-16 w-auto"
            />
          </div>
        </div>
      </section>

      {/* Bottom Section with Light Background */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-[#1c5f37] text-lg md:text-xl font-semibold mb-8 leading-relaxed">
            DÉCOUVREZ PROCHAINEMENT NOS
            <br />
            JUS / SMOOTHIES – SALADES DE FRUITS – TARTINABLES
          </h3>

          <Button
            onClick={handleContactClick}
            className="bg-[#f89e34] hover:bg-[#e88a20] text-white px-8 py-3 text-lg font-medium mb-8"
          >
            NOUS CONTACTER
          </Button>

          <div>
            <button
              onClick={() => setShowLegalMentions(true)}
              className="text-gray-600 hover:text-[#1c5f37] underline text-sm"
            >
              Mentions légales
            </button>
          </div>
        </div>
      </section>

      {/* Legal Mentions Dialog */}
      <Dialog open={showLegalMentions} onOpenChange={setShowLegalMentions}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Mentions légales</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 text-sm">
            <div>
              <h4 className="font-semibold mb-2">Éditeur du site</h4>
              <p>FruityCorp - The Fresh Fruit Corporation</p>
              <p>Contact : tudobem@mybrazilfactory.com</p>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Hébergement</h4>
              <p>Ce site est hébergé par Vercel Inc.</p>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Propriété intellectuelle</h4>
              <p>
                Tous les éléments du site (textes, images, logos, marques) sont protégés par le droit d'auteur et
                appartiennent à FruityCorp ou à ses partenaires.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Données personnelles</h4>
              <p>
                Conformément au RGPD, vous disposez d'un droit d'accès, de rectification et de suppression de vos
                données personnelles. Pour exercer ces droits, contactez-nous à l'adresse : tudobem@mybrazilfactory.com
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
