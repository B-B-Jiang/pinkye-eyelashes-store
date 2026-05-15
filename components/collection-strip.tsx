"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import { Reveal } from "./reveal"

const collections = [
  {
    id: "natural-look",
    name: "Natural Look",
    image: "/pinkye-product-3.png",
    count: "Everyday Style",
  },
  {
    id: "party-look",
    name: "Party Volume",
    image: "/pinkye-product-1.png",
    count: "Volume Style",
  },
  {
    id: "classic-look",
    name: "Classic Style",
    image: "/pinkye-product-2.png",
    count: "Beginner Friendly",
  },
  {
    id: "lifestyle-1",
    name: "Tutorial",
    image: "/pinkye-lifestyle-1.jpg",
    count: "For Beginners",
  },
  {
    id: "lifestyle-2",
    name: "Results",
    image: "/pinkye-lifestyle-2.jpg",
    count: "Real Reviews",
  },
  {
    id: "lifestyle-3",
    name: "Packaging",
    image: "/pinkye-lifestyle-3.jpg",
    count: "Gift Box",
  },
]

export function CollectionStrip() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const x = useTransform(scrollYProgress, [0, 1], [0, -100])

  const itemWidth = 280
  const totalWidth = collections.length * (itemWidth + 24) - 24
  const containerWidth = typeof window !== "undefined" ? window.innerWidth : 1200
  const maxDrag = Math.max(0, totalWidth - containerWidth + 48)

  return (
    <section ref={containerRef} className="py-20 lg:py-32 overflow-hidden bg-gradient-to-b from-[#FAFAFA] to-[#E8F5E9]/30" id="collections">
      <div className="mb-12">
        <Reveal>
          <div className="container-custom text-center">
            <h2 className="text-neutral-800 mb-4 text-5xl lg:text-6xl font-normal">
              Product <span className="italic font-light text-pink-400">Collections</span>
            </h2>
            <p className="text-lg text-neutral-500 max-w-2xl mx-auto">
              Explore different styles of cluster lashes to find the perfect one for you
            </p>
          </div>
        </Reveal>
      </div>

      <div className="relative">
        <motion.div
          className="flex gap-6 px-6"
          style={{ x }}
          drag="x"
          dragConstraints={{ left: -maxDrag, right: 0 }}
          dragElastic={0.1}
        >
          {collections.map((collection) => (
            <motion.div
              key={collection.id}
              className="flex-shrink-0 w-70 group cursor-pointer"
              style={{ width: '280px' }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
            >
              <div className="relative aspect-square rounded-3xl overflow-hidden mb-4 bg-white shadow-lg">
                <motion.div
                  className="relative w-full h-full"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src={collection.image || "/placeholder.svg"}
                    alt={collection.name}
                    fill
                    className="object-cover"
                    sizes="280px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
                </motion.div>

                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <motion.div
                    className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ y: 10 }}
                    whileHover={{ y: 0 }}
                  >
                    <h3 className="text-xl font-bold tracking-wide mb-1">{collection.name}</h3>
                    <p className="text-sm opacity-90">{collection.count}</p>
                  </motion.div>
                </div>
              </div>

              <div className="text-center px-2">
                <h3 className="text-lg font-medium text-neutral-800 mb-1">{collection.name}</h3>
                <p className="text-sm text-neutral-500">{collection.count}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="text-center mt-8">
        <p className="text-sm text-neutral-400">← Drag to explore more →</p>
      </div>
    </section>
  )
}