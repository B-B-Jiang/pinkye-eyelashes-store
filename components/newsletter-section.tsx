"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { Check, Mail, Send, User, MessageSquare } from "lucide-react"
import { Reveal } from "./reveal"
import { BlurPanel } from "./blur-panel"

export function NewsletterSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isValid, setIsValid] = useState({
    name: true,
    email: true,
    message: true,
  })

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(email)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const newIsValid = {
      name: formData.name.trim().length > 0,
      email: validateEmail(formData.email),
      message: formData.message.trim().length > 0,
    }
    setIsValid(newIsValid)

    if (newIsValid.name && newIsValid.email && newIsValid.message) {
      setIsSubmitted(true)
    }
  }

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (field === "email") {
      setIsValid((prev) => ({ ...prev, email: true }))
    }
  }

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-[#E8F5E9]/30 to-[#FCE4EC]/30" id="contact">
      <div className="container-custom">
        <Reveal>
          <div className="max-w-2xl mx-auto">
            <BlurPanel className="p-8 lg:p-12 bg-white/60 backdrop-blur-md border border-pink-100">
              <div className="text-center mb-8">
                <h2 className="text-3xl lg:text-4xl font-bold text-neutral-800 mb-4">
                  Contact <span className="italic font-light text-pink-400">Us</span>
                </h2>
                <p className="text-lg text-neutral-500">
                  Have questions? We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as possible.
                </p>
              </div>

              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <User size={20} className="text-pink-300" />
                    </div>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      placeholder="Your Name"
                      className={`w-full pl-12 pr-4 py-4 bg-white/80 backdrop-blur-sm border rounded-full text-neutral-800 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-transparent transition-all duration-200 ${
                        !isValid.name ? "border-red-300 focus:ring-red-500" : "border-pink-200"
                      }`}
                    />
                  </div>

                  {!isValid.name && (
                    <motion.p
                      className="text-sm text-red-600 text-center"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      Please enter your name
                    </motion.p>
                  )}

                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Mail size={20} className="text-pink-300" />
                    </div>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      placeholder="Your Email"
                      className={`w-full pl-12 pr-4 py-4 bg-white/80 backdrop-blur-sm border rounded-full text-neutral-800 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-transparent transition-all duration-200 ${
                        !isValid.email ? "border-red-300 focus:ring-red-500" : "border-pink-200"
                      }`}
                    />
                  </div>

                  {!isValid.email && (
                    <motion.p
                      className="text-sm text-red-600 text-center"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      Please enter a valid email address
                    </motion.p>
                  )}

                  <div className="relative">
                    <div className="absolute top-4 left-4 flex items-start pointer-events-none">
                      <MessageSquare size={20} className="text-pink-300 mt-1" />
                    </div>
                    <textarea
                      value={formData.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      placeholder="Your Message"
                      rows={4}
                      className={`w-full pl-12 pr-4 py-4 bg-white/80 backdrop-blur-sm border rounded-2xl text-neutral-800 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-transparent transition-all duration-200 resize-none ${
                        !isValid.message ? "border-red-300 focus:ring-red-500" : "border-pink-200"
                      }`}
                    />
                  </div>

                  {!isValid.message && (
                    <motion.p
                      className="text-sm text-red-600 text-center"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      Please enter your message
                    </motion.p>
                  )}

                  <motion.button
                    type="submit"
                    className="w-full bg-gradient-to-r from-pink-400 to-pink-500 text-white py-4 rounded-full font-medium hover:from-pink-500 hover:to-pink-600 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Send size={18} />
                    Send Message
                  </motion.button>
                </form>
              ) : (
                <motion.div
                  className="text-center py-8"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-16 h-16 bg-[#E8F5E9] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Check size={24} className="text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-neutral-800 mb-2">Message Sent!</h3>
                  <p className="text-neutral-500">
                    Thank you for reaching out. We&apos;ll get back to you within 24-48 hours.
                  </p>
                </motion.div>
              )}

              <p className="text-xs text-neutral-400 text-center mt-6">
                We respect your privacy. By submitting this form, you agree to our{" "}
                <a href="#" className="underline hover:text-pink-500 transition-colors">
                  Privacy Policy
                </a>
              </p>
            </BlurPanel>
          </div>
        </Reveal>
      </div>
    </section>
  )
}