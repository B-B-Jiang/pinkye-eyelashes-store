"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Minus, Plus, Check, Truck, RefreshCw, Shield, ExternalLink } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Reveal } from "@/components/reveal"

const productData = {
  "xiao-gou-zong-zong": {
    name: "Puppy Brown - Glue Type",
    nameEn: "Puppy Brown - Glue Type",
    price: "$179 MXN",
    priceNum: 179,
    specs: "48 clusters/box, C9-12mm mixed length",
    description: "Deep brown fibers, not fake black, creates a natural gentle innocent eye effect. Self-adhesive, instant application, easy for beginners. Reusable 10-15 times.",
    images: [
      "/pinkye-product-3.png",
      "/pinkye-wearing-effect-1.jpg",
      "/pinkye-wearing-effect-2.jpg",
    ],
    colors: [
      { name: "Deep Brown", color: "#5D4037", selected: true },
      { name: "Natural Brown", color: "#795548", selected: false },
    ],
    features: [
      "Korean imported fibers, soft and comfortable",
      "Deep brown color, naturally beautiful",
      "Self-adhesive, instant application",
      "Sectional design, mix and match freely",
      "Reusable 10-15 times",
    ],
    tutorial: [
      { step: 1, title: "Clean eyes", desc: "Ensure eyelids are clean and oil-free" },
      { step: 2, title: "Remove cluster", desc: "Gently grip the root of the lash cluster with tweezers" },
      { step: 3, title: "Apply adhesive", desc: "Lightly dip the root in a small amount of glue" },
      { step: 4, title: "Attach to lash line", desc: "Start from the outer corner, place below the lash line" },
      { step: 5, title: "Adjust and set", desc: "Wait 3-5 seconds for glue to dry" },
    ],
    paymentLink: "",
  },
}

export default function ProductPage({
  params,
}: {
  params: { slug: string };
}) {
  const product = productData["xiao-gou-zong-zong"]
  const [currentImage, setCurrentImage] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [selectedColor, setSelectedColor] = useState(0)

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % product.images.length)
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + product.images.length) % product.images.length)
  }

  const handleBuyNow = () => {
    if (product.paymentLink) {
      window.open(product.paymentLink, "_blank")
    } else {
      alert("Payment link not configured. Please replace PAYMENT_LINK with your Stripe/PayPal link in the code.")
    }
  }

  return (
    <main className="min-h-screen bg-[#FAFAFA]">
      <Header />

      <div className="pt-24 pb-4 px-6 max-w-7xl mx-auto">
        <nav className="flex items-center gap-2 text-sm text-neutral-500">
          <Link href="/" className="hover:text-pink-500 transition-colors">Home</Link>
          <span>/</span>
          <Link href="/#featured-products" className="hover:text-pink-500 transition-colors">Products</Link>
          <span>/</span>
          <span className="text-neutral-800">{product.name}</span>
        </nav>
      </div>

      <section className="px-6 pb-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <Reveal>
            <div className="relative">
              <div className="relative aspect-square bg-white rounded-3xl overflow-hidden shadow-lg">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentImage}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={product.images[currentImage]}
                      alt={product.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </motion.div>
                </AnimatePresence>

                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-md hover:bg-white transition-all active:scale-95"
                >
                  <ChevronLeft className="w-5 h-5 text-neutral-700" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-md hover:bg-white transition-all active:scale-95"
                >
                  <ChevronRight className="w-5 h-5 text-neutral-700" />
                </button>
              </div>

              <div className="flex gap-3 mt-4 justify-center">
                {product.images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImage(index)}
                    className={`relative w-20 h-20 rounded-xl overflow-hidden border-2 transition-all ${
                      currentImage === index ? "border-pink-400 shadow-md" : "border-transparent opacity-60 hover:opacity-100"
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`${product.name} - ${index + 1}`}
                      fill
                      className="object-cover"
                      sizes="80px"
                    />
                  </button>
                ))}
              </div>
            </div>
          </Reveal>

          <div className="flex flex-col">
            <Reveal delay={0.1}>
              <span className="inline-block bg-pink-100 text-pink-600 text-xs font-medium px-3 py-1 rounded-full mb-4">
                Best Seller
              </span>
              <h1 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-2">
                {product.name}
              </h1>
              <p className="text-neutral-500 mb-4">{product.nameEn}</p>
              <p className="text-3xl font-bold text-pink-500 mb-6">{product.price}</p>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="bg-[#E8F5E9]/50 rounded-2xl p-4 mb-6">
                <p className="text-sm text-neutral-600">
                  <span className="font-medium text-neutral-800">Specifications:</span> {product.specs}
                </p>
              </div>

              <p className="text-neutral-600 leading-relaxed mb-8">
                {product.description}
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="mb-6">
                <p className="text-sm font-medium text-neutral-800 mb-3">Color</p>
                <div className="flex gap-3">
                  {product.colors.map((color, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedColor(index)}
                      className={`flex items-center gap-2 px-4 py-2 rounded-full border-2 transition-all ${
                        selectedColor === index
                          ? "border-pink-400 bg-pink-50"
                          : "border-neutral-200 hover:border-pink-200"
                      }`}
                    >
                      <div
                        className="w-5 h-5 rounded-full border border-neutral-200"
                        style={{ backgroundColor: color.color }}
                      />
                      <span className="text-sm text-neutral-700">{color.name}</span>
                      {selectedColor === index && (
                        <Check className="w-4 h-4 text-pink-500" />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.4}>
              <div className="mb-8">
                <p className="text-sm font-medium text-neutral-800 mb-3">Quantity</p>
                <div className="flex items-center gap-4">
                  <div className="flex items-center border border-neutral-200 rounded-full">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="w-10 h-10 flex items-center justify-center text-neutral-600 hover:text-pink-500 transition-colors active:scale-95"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="w-12 text-center font-medium">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="w-10 h-10 flex items-center justify-center text-neutral-600 hover:text-pink-500 transition-colors active:scale-95"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                  <span className="text-sm text-neutral-500">
                    Total: <span className="font-bold text-neutral-800">${product.priceNum * quantity} MXN</span>
                  </span>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.5}>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <motion.button
                  className="flex-1 bg-[#F8BBD9] text-white py-4 rounded-full font-medium text-lg hover:bg-[#F48FB1] transition-all shadow-lg hover:shadow-xl active:scale-[0.98]"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Add to Cart
                </motion.button>
                <motion.button
                  className="flex-1 bg-neutral-900 text-white py-4 rounded-full font-medium text-lg hover:bg-neutral-800 transition-all flex items-center justify-center gap-2 active:scale-[0.98]"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleBuyNow}
                >
                  <ExternalLink size={18} />
                  Buy Now
                </motion.button>
              </div>
            </Reveal>

            <Reveal delay={0.6}>
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-neutral-100">
                <div className="flex flex-col items-center text-center">
                  <div className="w-10 h-10 bg-[#E8F5E9] rounded-full flex items-center justify-center mb-2">
                    <Truck className="w-5 h-5 text-[#66BB6A]" />
                  </div>
                  <span className="text-xs text-neutral-600">6-10 Days Shipping</span>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="w-10 h-10 bg-[#FCE4EC] rounded-full flex items-center justify-center mb-2">
                    <RefreshCw className="w-5 h-5 text-pink-500" />
                  </div>
                  <span className="text-xs text-neutral-600">30-Day Returns</span>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="w-10 h-10 bg-[#E8F5E9] rounded-full flex items-center justify-center mb-2">
                    <Shield className="w-5 h-5 text-[#66BB6A]" />
                  </div>
                  <span className="text-xs text-neutral-600">Secure Payment</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <Reveal>
              <div>
                <h2 className="text-2xl font-bold text-neutral-800 mb-8">Product Features</h2>
                <ul className="space-y-4">
                  {product.features.map((feature, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-3"
                    >
                      <div className="w-6 h-6 bg-gradient-to-br from-[#E8F5E9] to-[#FCE4EC] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5 text-pink-500" />
                      </div>
                      <span className="text-neutral-700">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div>
                <h2 className="text-2xl font-bold text-neutral-800 mb-8">How to Apply</h2>
                <div className="space-y-6">
                  {product.tutorial.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex gap-4"
                    >
                      <div className="w-10 h-10 bg-gradient-to-br from-[#E8F5E9] to-[#FCE4EC] rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-sm font-bold text-pink-500">{item.step}</span>
                      </div>
                      <div>
                        <h3 className="font-medium text-neutral-800 mb-1">{item.title}</h3>
                        <p className="text-sm text-neutral-500">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-white to-[#FAFAFA]">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-neutral-800 mb-4">Natural Effect</h2>
              <p className="text-neutral-500 max-w-2xl mx-auto">
                Our cluster lashes create a natural effect that enhances your beauty without looking artificial
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Reveal delay={0.1}>
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-lg">
                <Image
                  src="/pinkye-wearing-effect-1.jpg"
                  alt="Wearing effect"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-lg">
                <Image
                  src="/pinkye-wearing-effect-2.jpg"
                  alt="Wearing effect"
                  fill
                  className="object-cover"
                />
              </div>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-lg">
                <Image
                  src="/pinkye-tutorial-1.jpg"
                  alt="Application tutorial"
                  fill
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}