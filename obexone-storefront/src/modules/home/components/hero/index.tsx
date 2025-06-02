import { Github } from "@medusajs/icons"
import { Button, Heading } from "@medusajs/ui"

const Hero = () => {
  return (
    <div className="h-[75vh] w-full border-b border-ui-border-base relative bg-ui-bg-subtle overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="videos/hero.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Optional dark overlay for better text contrast */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* Text content */}
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center small:p-32 gap-6">
        <span>
          <Heading
            level="h2"
            className="text-3xl leading-10 text-white font-normal"
          >
            Varnost na dosegu
          </Heading>
          <p className="text-lg text-white mt-2">
            Kakovostna in zanesljiva zaščita vašega doma in poslovnih prostorov.
          </p>
        </span>
      </div>
    </div>
  )
}

export default Hero
