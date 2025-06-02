import { Suspense } from "react"

import { listRegions } from "@lib/data/regions"
import { StoreRegion } from "@medusajs/types"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CartButton from "@modules/layout/components/cart-button"
import SideMenu from "@modules/layout/components/side-menu"

export default async function Nav() {
  const regions = await listRegions().then((regions: StoreRegion[]) => regions)

  return (
    <div className="sticky top-0 inset-x-0 z-50 group">
      <header className="relative h-16 mx-auto border-b duration-200 bg-white border-ui-border-base">
        <nav className="content-container txt-xsmall-plus text-ui-fg-subtle flex items-center justify-between w-full h-full text-small-regular">

          <div className="flex items-center h-full">
            <LocalizedClientLink
              href="/"
              className="txt-compact-xlarge-plus hover:text-ui-fg-base uppercase"
              data-testid="nav-store-link"
            >
              Obexone
            </LocalizedClientLink>
          </div>

          <div className="flex items-center gap-x-6 h-full flex-1 basis-0 justify-end">
            <div className="hidden small:flex items-center gap-x-6 h-full">
              <LocalizedClientLink
                className="hover:text-ui-fg-base"
                href="/security_systems"
                data-testid="nav-nadzorni-sistemi-link"
              >
                Nadzorni sistemi
              </LocalizedClientLink>
              <LocalizedClientLink
                className="hover:text-ui-fg-base"
                href="/projects"
                data-testid="nav-projekti-link"
              >
                Projekti
              </LocalizedClientLink>
              <LocalizedClientLink
                className="hover:text-ui-fg-base"
                href="/contact"
                data-testid="nav-kontakt-link"
              >
                Kontakt
              </LocalizedClientLink>
              <LocalizedClientLink
                className="hover:text-ui-fg-base"
                href="/about"
                data-testid="nav-o-nas-link"
              >
                O nas
              </LocalizedClientLink>
              <LocalizedClientLink
                className="hover:text-ui-fg-base"
                href="/store"
                data-testid="nav-izdelki-link"
              >
                Izdelki
              </LocalizedClientLink>
              <LocalizedClientLink
                className="hover:text-ui-fg-base"
                href="/account"
                data-testid="nav-account-link"
              >
                Račun
              </LocalizedClientLink>
            </div>
            <Suspense
              fallback={
                <LocalizedClientLink
                  className="hover:text-ui-fg-base flex gap-2"
                  href="/cart"
                  data-testid="nav-cart-link"
                >
                  Košarica (0)
                </LocalizedClientLink>
              }
            >
              <CartButton />
            </Suspense>
            <SideMenu regions={regions} />
          </div>
        </nav>
      </header>
    </div>
  )
}
