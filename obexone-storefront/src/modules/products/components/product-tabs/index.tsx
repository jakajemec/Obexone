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

  // Option 1: Simply return the key as is, or with basic capitalization
  const formatMetadataKey = (key: string): string => {
    // Basic capitalization and replace underscores/hyphens with spaces for better readability
    return key.charAt(0).toUpperCase() + key.slice(1).replace(/[_-]/g, ' ');
  };

  return (
    <div className="text-small-regular py-8">
      <div className="grid grid-cols-2 gap-x-8">

        {/* --- COLUMN 1: DYNAMIC METADATA PROPERTIES --- */}
        <div className="flex flex-col gap-y-4">
          <h3 className="text-large font-semibold mb-2">Specifikacije</h3>

          {product.metadata && typeof product.metadata === 'object' && Object.keys(product.metadata).length > 0 ? (
            <>
          {Object.entries(product.metadata).map(([key, value]) => {
            if (value === null || value === undefined || value === '') {
              return null;
            }
            return (
              <div key={key} className="flex flex-col mb-4"> {/* vertical stack with margin below */}
                <span className="font-semibold">{formatMetadataKey(key)}</span> {/* Key on top */}
                <p>{typeof value === "object" ? JSON.stringify(value) : String(value)}</p> {/* Value below */}
              </div>
            );
          })}
            </>
          ) : (
            <p className="text-gray-500">No additional specifications available.</p>
          )}
        </div>

        {/* --- COLUMN 2: HARDCODED DIRECT PRODUCT PROPERTIES --- */}
        {/* ... (This column remains the same as previously provided) ... */}
        <div className="flex flex-col gap-y-4">
          <h3 className="text-large font-semibold mb-2">General Information</h3>

          {product.ir_vision && (
            <div className="flex items-center justify-between">
              <span className="font-semibold">IR nočni vid</span>
              <p>{product.ir_vision}</p>
            </div>
          )}
          {product.face_recognition && (
            <div className="flex items-center justify-between">
              <span className="font-semibold">Razpoznava obrazov</span>
              <p>{product.face_recognition}</p>
            </div>
          )}
          {product.license_plate_recognition && (
            <div className="flex items-center justify-between">
              <span className="font-semibold">Razpoznava registrskih tablic</span>
              <p>{product.license_plate_recognition}</p>
            </div>
          )}
          {product.weight && (
            <div className="flex items-center justify-between">
              <span className="font-semibold">Weight</span>
              <p>{product.weight} g</p>
            </div>
          )}
          {product.length && product.width && product.height && (
            <div className="flex items-center justify-between">
              <span className="font-semibold">Physical Dimensions</span>
              <p>
                {`${product.length}L x ${product.width}W x ${product.height}H`}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};


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
