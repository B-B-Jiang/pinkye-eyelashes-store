"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import { Menu, X } from "lucide-react"

const navLinks = [
  { name: "Shop", href: "#featured-products" },
  { name: "Collections", href: "#collections" },
  { name: "Features", href: "#features" },
  { name: "Contact", href: "#contact" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isMobileMenuOpen])

  return (
    <>
      <motion.header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          "backdrop-blur-md border-b",
          isScrolled ? "bg-white/80 border-pink-100" : "bg-transparent border-white/10",
        )}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-12 lg:h-16">
            <motion.div className="flex-shrink-0" whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
              <a
                href="#"
                className={cn(
                  "text-xl lg:text-2xl font-bold tracking-tight transition-colors flex items-center gap-2",
                  isScrolled ? "text-neutral-800 hover:text-pink-500" : "text-white hover:text-pink-200",
                )}
                aria-label="PINKYE Home"
              >
                <span className="font-light">PINK</span>
                <span className="font-bold">YE</span>
              </a>
            </motion.div>

            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-pink-500",
                    isScrolled ? "text-neutral-600" : "text-white/90"
                  )}
                >
                  {link.name}
                </a>
              ))}
            </nav>

            <button
              className={cn(
                "lg:hidden p-2 rounded-lg transition-colors",
                isScrolled ? "text-neutral-800 hover:bg-pink-50" : "text-white hover:bg-white/10"
              )}
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-[60] lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)} />
            <motion.div
              className="absolute right-0 top-0 bottom-0 w-72 bg-white shadow-xl"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
            >
              <div className="p-6">
                <div className="flex justify-between items-center mb-8">
                  <span className="text-xl font-bold text-neutral-800">
                    <span className="font-light">PINK</span>
                    <span className="font-bold">YE</span>
                  </span>
                  <button
                    className="p-2 hover:bg-pink-50 rounded-lg transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                    aria-label="Close menu"
                  >
                    <X size={24} className="text-neutral-600" />
                  </button>
                </div>
                <nav className="flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      className="text-lg font-medium text-neutral-700 hover:text-pink-500 transition-colors py-2"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.name}
                    </a>
                  ))}
                </nav>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
