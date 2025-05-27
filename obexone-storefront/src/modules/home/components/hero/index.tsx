import { Github } from "@medusajs/icons"
import { Button, Heading } from "@medusajs/ui"

const Hero = () => {
  return (
    <div className="h-[75vh] w-full border-b border-ui-border-base relative bg-ui-bg-subtle">
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center small:p-32 gap-6">
        <span>
          <Heading
            level="h2"
            className="text-3xl leading-10 text-ui-fg-subtle font-normal"
          >
            Varnost na dosegu
          </Heading>
          <p className="text-lg text-ui-fg-muted mt-2">
            Kakovostna in zanesljiva zaščita vašega doma in poslovnih prostorov.
          </p>
        </span>
      </div>
    </div>
  )
}

export default Hero