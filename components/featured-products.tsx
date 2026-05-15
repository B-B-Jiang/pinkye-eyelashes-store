"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ProductCard } from "./product-card"
import { QuickLookModal } from "./quick-look-modal"
import { Reveal } from "./reveal"

const featuredProducts = [
  {
    id: "1",
    slug: "xiao-an-ji-angle",
    name: "Xiao An Ji Angle",
    price: "$149 MXN",
    image: "/pinkye-product-2.png",
    badge: "New" as const,
    materials: ["Natural Everyday", "Beginner Friendly"],
    swatches: [
      { name: "Natural Brown", color: "#795548" },
      { name: "Light Brown", color: "#A1887F" },
    ],
    quickLookImages: [
      "/pinkye-product-2.png",
      "/pinkye-lifestyle-1.jpg",
      "/pinkye-lifestyle-2.jpg",
    ],
    dimensions: "C9-12mm Mixed Length",
    description: "Natural everyday style, perfect for beginners, easily create a fresh makeup look",
  },
  {
    id: "2",
    slug: "xiao-gou-zong-zong",
    name: "Puppy Brown",
    price: "$179 MXN",
    image: "/pinkye-product-3.png",
    badge: "Best Seller" as const,
    materials: ["Deep Brown", "Gentle Innocent Eyes"],
    swatches: [
      { name: "Deep Brown", color: "#5D4037" },
      { name: "Natural Brown", color: "#795548" },
    ],
    quickLookImages: [
      "/pinkye-product-3.png",
      "/pinkye-lifestyle-1.jpg",
      "/pinkye-lifestyle-3.jpg",
    ],
    dimensions: "C9-12mm Mixed Length",
    description: "Deep brown fiber, not fake black, creates gentle innocent eyes",
  },
  {
    id: "3",
    slug: "bai-li-tian",
    name: "Bailey Sweet",
    price: "$189 MXN",
    image: "/pinkye-product-1.png",
    badge: "Limited" as const,
    materials: ["Tipsy Volume", "Party Vibe"],
    swatches: [
      { name: "Classic Black", color: "#1A1A1A" },
      { name: "Deep Brown", color: "#5D4037" },
    ],
    quickLookImages: [
      "/pinkye-product-1.png",
      "/pinkye-lifestyle-2.jpg",
      "/pinkye-lifestyle-3.jpg",
    ],
    dimensions: "Mixed Length",
    description: "Tipsy volume style, full party vibe, perfect for special occasions",
  },
]

export function FeaturedProducts() {
  const [selectedProduct, setSelectedProduct] = useState<any>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleQuickLook = (product: any) => {
    setSelectedProduct(product)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedProduct(null)
  }

  return (
    <section className="py-20 lg:py-32 bg-[#FAFAFA]" id="featured-products">
      <div className="container-custom">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl text-neutral-800 mb-4 lg:text-6xl">
              Best <span className="italic font-light text-pink-400">Sellers</span>
            </h2>
            <p className="text-lg text-neutral-500 max-w-2xl mx-auto">
              Hand-picked popular cluster lashes. Deep brown, not fake black, naturally beautiful
            </p>
          </div>
        </Reveal>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.3,
              },
            },
          }}
        >
          {featuredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.8,
                    ease: [0.21, 0.47, 0.32, 0.98],
                  },
                },
              }}
            >
              <Reveal delay={index * 0.1}>
                <ProductCard product={product} onQuickLook={handleQuickLook} />
              </Reveal>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <QuickLookModal product={selectedProduct} isOpen={isModalOpen} onClose={closeModal} />
    </section>
  )
}
