"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface ProductCardProps {
  product: {
    id: string
    slug?: string
    name: string
    price: string
    image: string
    badge?: "New" | "Best Seller" | "Limited"
    materials: string[]
    swatches: { name: string; color: string }[]
    quickLookImages: string[]
    dimensions: string
    description?: string
    paymentLink?: string
  }
  onQuickLook: (product: any) => void
}

export function ProductCard({ product, onQuickLook }: ProductCardProps) {
  const productSlug = product.slug || product.id

  const handleBuyNow = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (product.paymentLink) {
      window.open(product.paymentLink, "_blank")
    } else {
      onQuickLook(product)
    }
  }

  return (
    <Link href={`/product/${productSlug}`}>
      <motion.div
        className="group relative bg-white overflow-hidden cursor-pointer"
        style={{
          borderRadius: "24px",
          boxShadow: "rgba(252, 228, 236, 0.5) 0px 10px 50px",
        }}
        layout
        whileHover={{ y: -8 }}
        transition={{ duration: 0.3 }}
      >
        {product.badge && (
          <div className="absolute top-4 left-4 z-20">
            <span
              className={cn(
                "px-3 py-1 text-xs font-medium rounded-full backdrop-blur-sm",
                product.badge === "New" && "bg-[#E8F5E9] text-green-700",
                product.badge === "Best Seller" && "bg-[#FCE4EC] text-pink-700",
                product.badge === "Limited" && "bg-amber-100 text-amber-700",
              )}
            >
              {product.badge}
            </span>
          </div>
        )}

        <div className="relative overflow-hidden bg-gradient-to-b from-[#FAFAFA] to-[#FCE4EC]/20" style={{ aspectRatio: "1/1" }}>
          <div className="relative w-full h-full p-8">
            <motion.div
              className="w-full h-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </motion.div>
          </div>
        </div>

        <div className="p-6 bg-white">
          <div className="flex items-start justify-between mb-2">
            <h3 className="text-lg font-semibold text-neutral-800">{product.name}</h3>
            <span className="text-lg font-bold text-pink-500">{product.price}</span>
          </div>
          <p className="text-sm text-neutral-500 mb-4">{product.materials.join(" · ")}</p>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              {product.swatches.slice(0, 3).map((swatch, index) => (
                <div
                  key={index}
                  className="w-5 h-5 rounded-full border-2 border-white shadow-sm"
                  style={{ backgroundColor: swatch.color }}
                  title={swatch.name}
                />
              ))}
            </div>
            <motion.button
              className="bg-[#F8BBD9] text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-[#F48FB1] transition-all duration-200 active:scale-95"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleBuyNow}
            >
              Buy Now
            </motion.button>
          </div>
        </div>
      </motion.div>
    </Link>
  )
}