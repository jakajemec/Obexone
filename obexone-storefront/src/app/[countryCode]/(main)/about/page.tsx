import { Metadata } from "next"

export const metadata: Metadata = {
  title: "O nas",
}

export default function AboutPage() {
  return (
    <div className="py-12">
    <div className="content-container">
      <div className="mb-12 text-center">
        <h1 className="text-5xl font-bold mb-12">Začnimo ustvarjati vaš dom varnejši in pametnejši.</h1>
        <div className="bg-ui-bg-subtle rounded-lg p-6 max-w-8xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">O nas</h2>
          <p className="text-xl text-ui-fg-subtle">
          ObexOne je zanesljivo podjetje, specializirano za vgradnjo varnostnih kamer, pametnih domofonov, omrežnih sistemov in celovite infrastrukture za pametni dom ali poslovni objekt. S kombinacijo izkušenj, prilagodljivosti in tehničnega znanja ustvarjamo rešitve, ki zagotavljajo zanesljiv nadzor, povezljivost in brezskrbnost.
          </p>
        </div>
      </div>
      <div className="mt-24 mb-24 relative h-[400px]">
        <img 
          src="/images/about.png" 
          alt="About ObexOne"
          className="w-full max-w-8xl mx-auto rounded-lg shadow-lg object-cover h-full"
        />
      </div>
      <div className="bg-ui-bg-subtle rounded-lg p-6 max-w-8xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Naš pristop</h2>
          <p className="text-xl text-ui-fg-subtle">
          Vsak projekt začnemo s posvetom in oceno prostora, nadaljujemo z natančnim načrtovanjem sistema, nato pa izvedemo profesionalno vgradnjo in konfiguracijo. Po zaključku stranki predstavimo delovanje in omogočimo oddaljeni dostop do sistema – vse za popolno uporabniško izkušnjo.
          </p>
          <p className="text-xl text-ui-fg-subtle">
          Pri svojem delu prisegamo predvsem na opremo Unifi, ki omogoča centralizirano upravljanje varnostnih sistemov, visoko zanesljivost in napredno povezljivost. Uporabljamo pa tudi druge priznane sisteme, kot so:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li className="text-xl text-ui-fg-subtle">Hikvision</li>
            <li className="text-xl text-ui-fg-subtle">Dahua</li>
            <li className="text-xl text-ui-fg-subtle">Ajax Systems</li>
            <li className="text-xl text-ui-fg-subtle">Reolink</li>
            <li className="text-xl text-ui-fg-subtle">Milesight</li>
            <li className="text-xl text-ui-fg-subtle">Axis</li>
            <li className="text-xl text-ui-fg-subtle">TP-Link Omada</li>
            <li className="text-xl text-ui-fg-subtle">EZVIZ</li>
            <li className="text-xl text-ui-fg-subtle">in drugi</li>
          </ul>

          <p className="text-xl text-ui-fg-subtle">
          Naša izbira opreme je vedno prilagojena potrebam in pričakovanjem stranke – glede na kakovost, funkcionalnost in proračun.          
          </p>
          <p className="text-xl text-ui-fg-subtle">
          Smo tehnični partner, ki skrbi za vašo dolgoročno varnost in stabilno digitalno okolje. Vsako rešitev gradimo z mislijo na uporabnost, varnost in estetsko vgradnjo. Naš cilj je, da se stranke počutijo varno, povezano in brezskrbno – kjerkoli že so.
          </p>
        </div>
    </div>
  </div>
  )
}