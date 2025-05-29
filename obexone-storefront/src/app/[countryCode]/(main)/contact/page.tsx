import { Metadata } from "next"
import { Input, Button, Textarea } from "@medusajs/ui"

export const metadata: Metadata = {
  title: "Kontakt | Obexone",
  description: "Kontaktirajte nas za več informacij o naših storitvah in rešitvah",
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-gray-200 p-8 rounded-2xl w-full max-w-6xl flex flex-col lg:flex-row gap-12">
        
        {/* Left Text Section */}
        <div className="flex-1 flex items-center justify-center">
          <h2 className="text-6xl font-semibold text-gray-600 leading-tight">
          Začnimo ustvarjati vaš dom varnejši in pametnejši.
          </h2>
        </div>

        {/* Right Form Section */}
        <div className="flex-1 bg-gray-100 rounded-xl p-6 lg:p-8 shadow-md">
          <h3 className="text-xl font-bold mb-4">Kontaktirajte nas</h3>
          <div className="flex flex-wrap gap-4 mb-6">
            <span className="bg-white rounded-full px-4 py-2 text-sm font-medium">
              Telefon: 040 400 400
            </span>
            <span className="bg-white rounded-full px-4 py-2 text-sm font-medium">
              E-mail: info@obexone.com
            </span>
          </div>

          <h4 className="text-lg font-semibold mb-4">Pišite nam</h4>
          <form className="space-y-4">
            <input
              type="text"
              required
              placeholder="Ime in priimek"
              className="w-full p-3 rounded-full border border-gray-300"
            />
            <input
              type="email"
              required
              placeholder="Vaš e-pošta"
              className="w-full p-3 rounded-full border border-gray-300"
            />
            <input
              type="tel"
              placeholder="Vaša telefonska številka"
              className="w-full p-3 rounded-full border border-gray-300"
            />
            <textarea
              placeholder="Vaše sporočilo"
              rows={4}
              className="w-full p-3 rounded-xl border border-gray-300 resize-none"
            />
            <p className="text-xs text-gray-500">
              Polja označena z * so obvezna.
            </p>
            <label className="flex items-start gap-2 text-sm text-gray-600">
              <input type="checkbox" required className="mt-1" />
              Strinjam se, da Obexone hrani osebne podatke na obrazcu za notranjo uporabo
              in komunikacijo z mano za namene predložene zahteve. Uporabnik lahko zahteva
              izbris osebnih podatkov po elektronski pošti na info@obexone.com.
            </label>
            <button
              type="submit"
              className="w-full py-3 rounded-full bg-blue-500 text-white font-semibold hover:bg-blue-600 transition"
            >
              POŠLJI
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
