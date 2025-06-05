import React from 'react'
import { Metadata } from "next"
import { notFound } from "next/navigation"
import { getRegion } from "@lib/data/regions"

export const metadata: Metadata = {
  title: "Nadzorni Sistemi | Obexone",
  description: "Naši napredni nadzorni sistemi za zaščito vašega doma in poslovanja",
}

export default async function SurveillanceSystemsPage({ params }: { params: { countryCode: string } }) {
  const region = await getRegion(params.countryCode)

  if (!region) {
    notFound()
  }

  return (
    <div className="py-12">
      <div className="content-container">
        <div className="mb-12 text-center">
          <h1 className="text-5xl font-bold mb-12">Napredni Nadzorni Sistemi</h1>
          <div className="bg-ui-bg-subtle rounded-lg p-6 max-w-8xl mx-auto">
            <p className="text-xl text-ui-fg-subtle">
              Varnost je naša prioriteta. Naša rešitev nadzornih sistemov vključuje napreden video nadzor, senzorje gibanja, 
              alarmne sisteme ter druge tehnologije, ki zagotavljajo maksimalno zaščito vašega objekta.
              Naša strokovna montaža zagotavlja brezskrbno delovanje sistema, ki je popolnoma prilagodljiv vašim potrebam.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-28">
          {/* Surveillance System Features */}
          <div className="bg-white rounded-2xl overflow-hidden">
            <div className="relative aspect-square">
              <img 
                src="/images/video_nadzor.png" 
                alt="Napreden video nadzor"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-5 pl-1">
              <h3 className="text-xl font-semibold mb-3">Napreden Video Nadzor</h3>
              <p className="text-ui-fg-subtle">
                Naše kamere zagotavljajo visoko ločljivost, nočni vid, in napreden prepoznavanje obrazov ter zaznavanje gibanja.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl overflow-hidden">
            <div className="relative aspect-square">
              <img 
                src="/images/senzorji.png" 
                alt="Senzorji gibanja"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-5 pl-1">
              <h3 className="text-xl font-semibold mb-3">Senzorji Gibanja</h3>
              <p className="text-ui-fg-subtle">
                Senzorji, ki takoj zaznajo gibanje in sprožijo alarm ali obvestilo, ko pride do sumljive aktivnosti.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl overflow-hidden">
            <div className="relative aspect-square">
              <img 
                src="/images/integracija.png" 
                alt="Integracija z alarmi"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-5 pl-1">
              <h3 className="text-xl font-semibold mb-3">Integracija z Alarmnim Sistemom</h3>
              <p className="text-ui-fg-subtle">
                Vse komponente sistema se lahko povežejo z alarmnim sistemom za takojšnje obveščanje in zaščito.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <div className="bg-ui-bg-subtle rounded-lg p-6 max-w-8xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Naša Strokovna Montaža</h2>
            <p className="text-xl text-ui-fg-subtle mb-6">
              Naša ekipa za montažo nadzornih sistemov se osredotoča na profesionalnost in natančnost. Pomembno je, da so kamere postavljene na strateška mesta, kjer zagotavljajo popolno pokritost in varnost. Po montaži izvedemo temeljito testiranje sistema, da zagotovimo, da deluje brez napak.
            </p>
            
            {/* Replace this <p> with a <div> */}
            <div className="text-xl text-ui-fg-subtle mb-6">
              Naša montaža vključuje:
              <ul className="list-disc list-inside space-y-2 mt-2">
                <li>Strategično postavitev kamer in senzorjev za maksimalno pokritost</li>
                <li>Povezava sistema z lokalnim strežnikom ali oblakom</li>
                <li>Usmerjanje in optimizacija omrežnih povezav</li>
                <li>Izobraževanje uporabnikov o upravljanju sistema</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Showcase of Projects */}
        <div className="mt-28">
          <h2 className="text-3xl font-bold mb-8 text-center">Primeri Nadzornih Sistemov</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl overflow-hidden">
              <div className="relative aspect-square">
                <img 
                  src="/images/domace_vgradnje.png" 
                  alt="Domače vgradnje"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5 pl-1">
                <h3 className="text-xl font-semibold mb-3">Domače Vgradnje</h3>
                <p className="text-ui-fg-subtle">
                  Postavitev nadzornih sistemov v zasebnih hišah, ki zagotavljajo popolno varnost in zasebnost.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden">
              <div className="relative aspect-square">
                <img 
                  src="/images/poslovni_nadzor.png" 
                  alt="Poslovni nadzor"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5 pl-1">
                <h3 className="text-xl font-semibold mb-3">Poslovni Nadzor</h3>
                <p className="text-ui-fg-subtle">
                  Zaščita poslovnih objektov z naprednimi sistemi za spremljanje in prepoznavanje, obveščanje in shranjevanje.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden">
              <div className="relative aspect-square">
                <img 
                  src="/images/it_nastavitev.png" 
                  alt="IT nastavitev"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5 pl-1">
                <h3 className="text-xl font-semibold mb-3">IT Nastavitev in Integracija</h3>
                <p className="text-ui-fg-subtle">
                  Povezovanje nadzornega sistema z IT infrastrukturo za enostavno upravljanje in dostop do podatkov.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
