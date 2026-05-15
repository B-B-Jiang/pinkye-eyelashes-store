"use client"

import { motion } from "framer-motion"
import { Reveal } from "./reveal"

const benefits = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M6.5 6.5c1.5-1.5 3.5-2 5.5-2s4 .5 5.5 2" />
        <path d="M4.5 10c2-2.5 5-4 7.5-4s5.5 1.5 7.5 4" />
        <path d="M3 14c2.5-3 6-5 9-5s6.5 2 9 5" />
        <path d="M2 18.5c3-3.5 7-6 10-6s7 2.5 10 6" />
      </svg>
    ),
    title: "Premium Quality",
    description: "Korean imported fibers, soft and comfortable",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
        <path d="M15 18H9" />
        <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14" />
        <circle cx="17" cy="18" r="2" />
        <circle cx="7" cy="18" r="2" />
      </svg>
    ),
    title: "Fast Shipping",
    description: "Mexico warehouse, 6-10 days delivery",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
      </svg>
    ),
    title: "Easy Returns",
    description: "30-day hassle-free return policy",
  },
]

export function BrandBenefits() {
  return (
    <section className="py-20 md:py-28 bg-[#FAFAFA]">
      <div className="container mx-auto px-4">
        <Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center text-center p-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
              >
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#E8F5E9] to-[#FCE4EC] flex items-center justify-center mb-6 text-neutral-700">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-neutral-800 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-neutral-500 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}