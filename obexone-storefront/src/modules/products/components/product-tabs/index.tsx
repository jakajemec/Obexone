"use client"

import Back from "@modules/common/icons/back"
import FastDelivery from "@modules/common/icons/fast-delivery"
import Refresh from "@modules/common/icons/refresh"

import Accordion from "./accordion"
import { HttpTypes } from "@medusajs/types"
import Support from "@modules/common/icons/support"
import Maintenance from "@modules/common/icons/maintenance"

type ProductTabsProps = {
  product: HttpTypes.StoreProduct
}

const ProductTabs = ({ product }: ProductTabsProps) => {
  const tabs = [
    {
      label: "Tehnične informacije",
      component: <ProductInfoTab product={product} />,
    },
    {
      label: "Dostava in montaža",
      component: <ShippingInfoTab />,
    },
  ]

  return (
    <div className="w-full">
      <Accordion type="multiple">
        {tabs.map((tab, i) => (
          <Accordion.Item
            key={i}
            title={tab.label}
            headingSize="medium"
            value={tab.label}
          >
            {tab.component}
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  )
}

const ProductInfoTab = ({ product }: ProductTabsProps) => {
  const formatMetadataKey = (key: string): string => {
    const withoutPrefix = key.replace(/^\d+\.\s*/, "").replace(/;+\s*$/, "")
    return (
      withoutPrefix.charAt(0).toUpperCase() +
      withoutPrefix.slice(1).replace(/[_-]/g, " ")
    )
  }

  let metadata: Record<string, unknown> = {}
  if (typeof product.metadata === "string") {
    try {
      metadata = JSON.parse(product.metadata)
    } catch {
      metadata = {}
    }
  } else if (typeof product.metadata === "object" && product.metadata !== null) {
    metadata = product.metadata
  }

  // Extract entries and sort by numeric prefix
  const entries = Object.entries(metadata)
    .filter(([key]) => key !== "_order") // skip _order key if present
    .filter(([, value]) => value !== null && value !== undefined && value !== "")

  // Sorting function: extract leading number prefix from key or default to large number
  const sortByPrefix = (a: [string, unknown], b: [string, unknown]) => {
    const getPrefixNumber = (key: string): number => {
      const match = key.match(/^(\d+)\./)
      return match ? parseInt(match[1], 10) : Number.MAX_SAFE_INTEGER
    }
    return getPrefixNumber(a[0]) - getPrefixNumber(b[0])
  }

  entries.sort(sortByPrefix)

  return (
    <div className="text-small-regular py-8">
      <div className="grid grid-cols-1 gap-x-8">
        <div className="flex flex-col gap-y-4">
          <h3 className="text-large font-semibold mb-2">Specifikacije</h3>

          {entries.length > 0 ? (
            <>
              {entries.map(([key, value]) => (
                <div key={key} className="flex flex-col mb-4">
                  <span className="font-semibold">{formatMetadataKey(key)}</span>
                  <p>{typeof value === "object" ? JSON.stringify(value) : String(value)}</p>
                </div>
              ))}
            </>
          ) : (
            <p className="text-gray-500">No additional specifications available.</p>
          )}
        </div>
      </div>
    </div>
  )
}

const ShippingInfoTab = () => {
  return (
    <div className="text-small-regular py-8">
      <div className="grid grid-cols-1 gap-y-8">
        <div className="flex items-start gap-x-2">
          <FastDelivery />
          <div>
            <span className="font-semibold">Hitra dostava</span>
            <p className="max-w-sm">
              Vaše naročilo bo obdelano in odposlano v najkrajšem možnem času.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-x-2">
          <Support />
          <div>
            <span className="font-semibold">Svetovanje</span>
            <p className="max-w-sm">
              Če ste v dilemi glede določenega produkta nas kontaktirajte in naša ekipa vam bo svetovala.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-x-2">
          <Maintenance />
          <div>
            <span className="font-semibold">Nudimo montažo in vzdrževanje</span>
            <p className="max-w-sm">
              Ekipa Obexone vam nudi tudi strokovno montažo in nadaljno vzdrževanje vašega sistema.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductTabs
