"use client"

import Back from "@modules/common/icons/back"
import FastDelivery from "@modules/common/icons/fast-delivery"
import Refresh from "@modules/common/icons/refresh"

import Accordion from "./accordion"
import { HttpTypes } from "@medusajs/types"

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
  return (
    <div className="text-small-regular py-8">
      <div className="grid grid-cols-2 gap-x-8">
        <div className="flex flex-col gap-y-4">
          <div>
            <span className="font-semibold">Dimenzije</span>
            <p>{product.material ? product.material : "-"}</p>
          </div>
          <div>
            <span className="font-semibold">IR nočni vid</span>
            <p>{product.ir_vision ? product.ir_vision : "-"}</p>
          </div>
          <div>
            <span className="font-semibold">Razpoznava obrazov</span>
            <p>{product.face_recognition ? product.face_recognition : "-"}</p>
          </div>
          <div>
            <span className="font-semibold">Razpoznava registrskih tablic</span>
            <p>{product.license_plate_recognition ? product.license_plate_recognition : "-"}</p>
          </div>
        </div>
        <div className="flex flex-col gap-y-4">
          <div>
            <span className="font-semibold">Weight</span>
            <p>{product.weight ? `${product.weight} g` : "-"}</p>
          </div>
          <div>
            <span className="font-semibold">Dimensions</span>
            <p>
              {product.length && product.width && product.height
                ? `${product.length}L x ${product.width}W x ${product.height}H`
                : "-"}
            </p>
          </div>
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
          <Refresh />
          <div>
            <span className="font-semibold">Svetovanje</span>
            <p className="max-w-sm">
              Če ste v dilemi glede določenega produkta nas kontaktirajte in naša ekipa vam bo svetovala.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-x-2">
          <Back />
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
