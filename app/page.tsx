"use client"
import { useEffect, useState } from "react"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { FeaturedProducts } from "@/components/featured-products"
import { BrandBenefits } from "@/components/brand-benefits"
import { CollectionStrip } from "@/components/collection-strip"
import { MaterialsSection } from "@/components/materials-section"
import { NewsletterSection } from "@/components/newsletter-section"
import { Footer } from "@/components/footer"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowUp } from "lucide-react"

export default function HomePage() {
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <FeaturedProducts />
      <BrandBenefits />
      <CollectionStrip />
      <MaterialsSection />
      <NewsletterSection />
      <Footer />

      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-8 right-8 z-50 w-12 h-12 bg-pink-400 text-white rounded-full shadow-lg flex items-center justify-center hover:bg-pink-500 transition-all duration-200 hover:scale-110 active:scale-95"
            onClick={scrollToTop}
            aria-label="Back to top"
          >
            <ArrowUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>
    </main>
  )
}