"use client"
import { motion } from "framer-motion"
import { Instagram, Facebook, ArrowUpRight } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    Products: [
      { name: "All Products", href: "#featured-products" },
      { name: "Best Sellers", href: "#featured-products" },
      { name: "New Arrivals", href: "#featured-products" },
      { name: "Gift Sets", href: "#featured-products" },
      { name: "Accessories", href: "#featured-products" },
    ],
    Help: [
      { name: "Tutorial", href: "#" },
      { name: "FAQ", href: "#" },
      { name: "Shipping Info", href: "#" },
      { name: "Return Policy", href: "#" },
      { name: "Contact Us", href: "#contact" },
    ],
    About: [
      { name: "Our Story", href: "#" },
      { name: "Mexico Warehouse", href: "#" },
      { name: "Business Inquiry", href: "#contact" },
      { name: "Join Us", href: "#contact" },
    ],
  }

  const socialLinks = [
    { name: "Instagram", icon: Instagram, href: "#" },
    { name: "Facebook", icon: Facebook, href: "#" },
  ]

  return (
    <footer className="bg-white border-t border-pink-100" id="contact">
      <div className="container-custom py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-12">
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-neutral-800 mb-4">
                <span className="font-light">PINK</span>
                <span className="font-bold">YE</span>
              </h3>
              <p className="text-neutral-500 mb-6 leading-relaxed">
                Premium cluster lashes that look naturally like yours. Deep brown, not fake black. Shipped from Mexico, delivered in 6-10 days.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 bg-[#FCE4EC] rounded-full flex items-center justify-center text-pink-500 hover:text-white hover:bg-pink-400 transition-all duration-200"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon size={18} />
                    <span className="sr-only">{social.name}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-12">
              {Object.entries(footerLinks).map(([category, links], index) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h4 className="font-semibold text-neutral-800 mb-4">{category}</h4>
                  <ul className="space-y-3">
                    {links.map((link) => (
                      <li key={link.name}>
                        <a
                          href={link.href}
                          className="text-neutral-500 hover:text-pink-500 transition-colors duration-200 group flex items-center"
                        >
                          {link.name}
                          <ArrowUpRight
                            size={14}
                            className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                          />
                        </a>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <motion.div
          className="py-6 px-8 bg-gradient-to-r from-[#E8F5E9]/50 to-[#FCE4EC]/50 rounded-2xl mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-wrap justify-center gap-6 md:gap-12 text-sm text-neutral-600">
            <span>Ships from Mexico</span>
            <span>6-10 Days Delivery</span>
            <span>30-Day Returns</span>
            <span>Secure Payment</span>
          </div>
        </motion.div>

        <motion.div
          className="pt-8 pb-4 border-t border-pink-100 flex justify-center items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-neutral-400 text-center">
            <p>&copy; {currentYear} PINKYE. All rights reserved.</p>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-pink-500 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-pink-500 transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
