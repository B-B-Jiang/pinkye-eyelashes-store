"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { Reveal } from "./reveal"
import { cn } from "@/lib/utils"

const features = [
  {
    id: "glue-free",
    name: "Glue-Free Design",
    description: "Innovative self-adhesive technology, no eyelash glue needed, instant application",
    image: "/pinkye-product-2.png",
    backgroundImage: "/pinkye-lifestyle-1.jpg",
    tint: "bg-pink-50",
  },
  {
    id: "natural-brown",
    name: "Deep Brown Color",
    description: "Premium deep brown fibers that naturally blend with Asian skin tones for a natural look",
    image: "/pinkye-product-3.png",
    backgroundImage: "/pinkye-lifestyle-2.jpg",
    tint: "bg-green-50",
  },
  {
    id: "reusable",
    name: "Reusable",
    description: "Made with quality materials, can be reused multiple times with proper care, economical and eco-friendly",
    image: "/pinkye-product-1.png",
    backgroundImage: "/pinkye-lifestyle-3.jpg",
    tint: "bg-cream-50",
  },
]

export function MaterialsSection() {
  const [activeFeature, setActiveFeature] = useState("glue-free")

  const activeFeatureData = features.find((f) => f.id === activeFeature) || features[0]

  const AnimatedText = ({ text, delay = 0 }: { text: string; delay?: number }) => {
    return (
      <span>
        {text.split("").map((char, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: delay + index * 0.03,
              ease: [0.21, 0.47, 0.32, 0.98],
            }}
            style={{ display: char === " " ? "inline" : "inline-block" }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </span>
    )
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" id="features">
      <div className="absolute inset-0 z-0">
        {features.map((feature) => (
          <motion.div
            key={feature.id}
            className="absolute inset-0"
            initial={{ opacity: feature.id === activeFeature ? 1 : 0 }}
            animate={{ opacity: feature.id === activeFeature ? 1 : 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <Image
              src={feature.backgroundImage || "/placeholder.svg"}
              alt={`${feature.name}`}
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-pink-900/40" />
      </div>

      <div className="absolute top-[120px] left-0 right-0 z-10">
        <div className="container-custom text-white">
          <Reveal>
            <div>
              <AnimatePresence mode="wait">
                <motion.h2
                  key={activeFeature}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="font-bold mb-6 text-5xl lg:text-7xl"
                >
                  <AnimatedText text={activeFeatureData.name} delay={0.2} />
                </motion.h2>
              </AnimatePresence>
              <AnimatePresence mode="wait">
                <motion.p
                  key={activeFeature}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3, delay: 0.1, ease: "easeInOut" }}
                  className="text-lg text-white/90 leading-relaxed max-w-2xl"
                >
                  {activeFeatureData.description}
                </motion.p>
              </AnimatePresence>
            </div>
          </Reveal>
        </div>
      </div>

      <div className="absolute bottom-8 left-0 right-0 z-10">
        <div className="container-custom">
          <Reveal delay={0.1}>
            <div className="flex flex-wrap justify-center gap-3">
              {features.map((feature) => (
                <motion.button
                  key={feature.id}
                  className={cn(
                    "px-6 py-3 rounded-full font-medium transition-all duration-300 backdrop-blur-md",
                    activeFeature === feature.id
                      ? "bg-white text-neutral-800"
                      : "bg-white/20 text-white hover:bg-white/30",
                  )}
                  onClick={() => setActiveFeature(feature.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {feature.name}
                </motion.button>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}