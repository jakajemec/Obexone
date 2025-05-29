import React from 'react'
import { Metadata } from "next"
import { notFound } from "next/navigation"
import { getRegion } from "@lib/data/regions"

export const metadata: Metadata = {
  title: "Projekti | Obexone",
  description: "Naši projekti in rešitve za varnost",
}

export default async function ProjectsPage({ params }: { params: { countryCode: string } }) {
  const region = await getRegion(params.countryCode)

  if (!region) {
    notFound()
  }

  return (
    <div className="py-12">
      <div className="content-container">
        <div className="mb-12 text-center">
          <h1 className="text-5xl font-bold mb-12">Izvedeni projekti</h1>
          <div className="bg-ui-bg-subtle rounded-lg p-6 max-w-4xl mx-auto">
            <p className="text-xl text-ui-fg-subtle">
              V nadaljevanju predstavljamo nekaj izbranih primerov sistemov, ki smo 
              jih uspešno izvedli pri naših strankah – tako v zasebnih hišah kot v poslovnih prostorih.
              Vsak projekt temelji na potrebah naročnika, premišljenem načrtovanju in strokovni izvedbi, z 
              uporabo preverjene tehnologije. Predstavljeni primeri prikazujejo celoten 
              proces – od svetovanja in postavitve sistema do zagona in oddaljenega dostopa, 
              vedno s poudarkom na zasebnosti, varnosti in prilagodljivosti.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-28">
          <div className="bg-white rounded-2xl overflow-hidden">
            <div className="relative aspect-square">
              <img 
                src="/images/priprava_napeljave.png" 
                alt="hisa - priprava napeljave"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-5 pl-1">
              <h3 className="text-xl font-semibold mb-3">Priprava napeljave</h3>
              <p className="text-ui-fg-subtle">
              Vgradnja podatkovne in napajalne infrastrukture ter natančna postavitev kamer za popolno vizualno pokritost ključnih točk objekta.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl overflow-hidden">
            <div className="relative aspect-square">
              <img 
                src="/images/montaza.png" 
                alt="hisa - montaza"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-5 pl-1">
              <h3 className="text-xl font-semibold mb-3">Montaža</h3>
              <p className="text-ui-fg-subtle">
              Namestitev varnostnih kamer, pametnega zvonca, domofonskega sistema in brezžičnega omrežja z integracijo na centralni strežnik za celovito upravljanje.              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl overflow-hidden">
            <div className="relative aspect-square">
              <img 
                src="/images/it_nastavitev.png" 
                alt="hisa - IT nastavitev"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-5 pl-1">
              <h3 className="text-xl font-semibold mb-3">IT-nastavitev</h3>
              <p className="text-ui-fg-subtle">
              Konfiguracija sistema ter vzpostavitev varnega video nadzora z direktno povezavo na lokalni strežnik in domače omrežje.              </p>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <div className="bg-ui-bg-subtle rounded-lg p-6 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Varnostni sistemi v enodružni hiši</h2>
            <p className="text-xl text-ui-fg-subtle mb-6 mt-6">
              Nudimo celovite rešitve tako za domačo uporabo kot za poslovne objekte. Pri enem izmed projektov smo za stranko izvedli postavitev nadzornega sistema za zunanji nadzor hiše. Kamere so bile strateško nameščene okrog objekta in so se samodejno aktivirale, ko je uporabnik zapustil dom.
            </p>
            <p className="text-xl text-ui-fg-subtle mb-6">
              Glavna prednost sistema je bila namestitev lokalnega strežnika, kjer se vsi posnetki hranijo lokalno, brez shranjevanja v oblaku. Dostop do posnetkov je bil omogočen izključno preko zasebne, šifrirane VPN povezave, ki zagotavlja popoln nadzor nad tem, kdo in kdaj dostopa do podatkov.
            </p>
            <p className="text-xl text-ui-fg-subtle mb-6">
              Pametne kamere so omogočale zaznavo gibanja, prepoznavo registrskih tablic vozil ter ločevanje med človekom, psom, mačko ali drugimi domačimi živalmi. Poleg video nadzora smo vzpostavili še zasebno brezžično omrežje, ki pokriva celoten dom in okolico, kar omogoča nemoteno povezljivost z vsemi pametnimi napravami v objektu.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-28">
          <div className="bg-white rounded-2xl overflow-hidden">
            <div className="relative aspect-square">
              <img 
                src="/images/wifi_enote_v_poslovni_stavbi.png" 
                alt="trgovina - wifi_enote_v_poslovni_stavbi"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-5 pl-1">
              <h3 className="text-xl font-semibold mb-3">WI-FI enote v poslovni stavbi</h3>
              <p className="text-ui-fg-subtle">
              Inštalacije podatkovnih in napjalnih kablov na objektu. Optimalna postavitev kamer, za pokritje celotnega želenega območja nadzora.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl overflow-hidden">
            <div className="relative aspect-square">
              <img 
                src="/images/nadzor_trgovine.png" 
                alt="trgovina - nadzor trgovine"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-5 pl-1">
              <h3 className="text-xl font-semibold mb-3">Nadzor trgovine</h3>
              <p className="text-ui-fg-subtle">
              Postavitev in montaža nadzornih kamer, pametnega zvonca, domofona in brez-žičnega omrežja. Centralna povezava s serverjem.
              </p>  
            </div>
          </div>

          <div className="bg-white rounded-2xl overflow-hidden">
            <div className="relative aspect-square">
              <img 
                src="/images/it_nastavitev.png" 
                alt="trgovina - IT nastavitev"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-5 pl-1">
              <h3 className="text-xl font-semibold mb-3">Slike trgovine in kamer</h3>
              <p className="text-ui-fg-subtle">
              Priprava sistema, vzpostavitev nadzornega sistema in varne povezave z lokalnim strežnikom, ozorma domačim omrežjem.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <div className="bg-ui-bg-subtle rounded-lg p-6 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Varnostni sistemi v kolesarski trgovini</h2>
            <div className="space-y-4">
              <p className="text-xl text-ui-fg-subtle mb-6">
              V poslovnem okolju smo izvedli napreden varnostni sistem v kolesarski trgovini, kjer smo namestili kombinacijo različnih vrst kamer:              </p>
              <ul className="list-disc list-inside space-y-2">
                <li className="text-xl text-ui-fg-subtle">360-stopinjske panoramske kamere za celostni pregled</li>
                <li className="text-xl text-ui-fg-subtle">Klasične IP kamere za natančen nadzor posameznih točk</li>
                <li className="text-xl text-ui-fg-subtle">Kamere z možnostjo nočnega snemanja v popolni temi</li>
                <li className="text-xl text-ui-fg-subtle">Sistemi z zaznavo gibanja in prepoznavanjem registrskih oznak</li>
              </ul>
              <p className="text-xl text-ui-fg-subtle mb-6"> 
                Tudi tukaj se vsi podatki hranijo lokalno, na namenskem strežniku znotraj objekta, brez prenosa v oblak. Tako smo stranki zagotovili maksimalno zasebnost, varnost in nadzor.
              </p>
              <p className="text-xl text-ui-fg-subtle mb-6"> 
              Pri projektih najpogosteje uporabljamo opremo proizvajalca Unifi (Ubiquiti), ki omogoča enotno upravljanje video nadzora, omrežne opreme in dostopov. Njihovi sistemi se odlično obnesejo tako v domovih kot v večjih poslovnih objektih.
              </p>
              <p className="text-xl text-ui-fg-subtle mb-6"> 
              Poleg tega delamo tudi z drugimi priznanimi sistemi kot so Hikvision, Dahua, Ajax, Reolink, Milesight, Axis in drugi, kar nam omogoča popolno prilagodljivost glede na potrebe in proračun stranke.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}