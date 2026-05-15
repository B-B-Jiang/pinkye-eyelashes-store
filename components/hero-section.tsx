"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { Sparkles, Truck, RefreshCw, Clock } from "lucide-react"
import { Reveal } from "./reveal"
import { BlurPanel } from "./blur-panel"

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const contentY = useTransform(scrollYProgress, [0, 1], [0, 100])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

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
    <section ref={containerRef} className="relative h-screen overflow-hidden">
      {/* Gradient Background with Grid Texture */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(180deg, #FFF5F8 0%, #FFE6ED 100%)",
          backgroundSize: "100% 100%",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
          animation: "gridFlow 8s ease-in-out infinite alternate",
        }}
      />
      <style jsx>{`
        @keyframes gridFlow {
          0% { background-position: 0 0; }
          100% { background-position: 40px 0; }
        }
      `}</style>

      {/* Content */}
      <motion.div
        className="relative z-10 h-full flex items-center justify-center"
        style={{ y: contentY, opacity: contentOpacity }}
      >
        <div className="container-custom text-center text-white">
          <Reveal>
            <h1
              className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-none tracking-tight mb-6"
              style={{ textShadow: "0 4px 20px rgba(0,0,0,0.1)" }}
            >
              <AnimatedText text="Natural lashes" delay={0.5} />
              <br />
              <span className="italic font-light text-pink-200">
                <AnimatedText text="that look like yours" delay={1.1} />
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <motion.p
              className="text-lg md:text-xl text-white/90 mb-12 leading-relaxed max-w-2xl mx-auto"
              style={{ textShadow: "0 2px 10px rgba(0,0,0,0.1)" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
            >
              Glue-free, easy to apply, and reusable up to 15 times
            </motion.p>
          </Reveal>

          <Reveal delay={0.4}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.button
                className="bg-[#F8BBD9] text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-[#F48FB1] transition-all duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Shop Now
              </motion.button>
              <motion.button
                className="bg-transparent text-white border-2 border-white/60 px-8 py-4 rounded-full font-medium text-lg hover:bg-white/10 hover:border-white transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Watch Tutorial
              </motion.button>
            </div>
          </Reveal>
        </div>
      </motion.div>

      {/* Info Strip */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 z-20 flex justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2, ease: [0.21, 0.47, 0.32, 0.98] }}
      >
        <BlurPanel className="mx-6 mb-6 px-6 py-4 bg-white/20 backdrop-blur-md border-white/30">
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 text-white/90">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-pink-300" />
              <span className="text-sm">Glue-Free Design</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-mint-300" style={{ color: '#A5D6A7' }} />
              <span className="text-sm">Instant Application</span>
            </div>
            <div className="flex items-center gap-2">
              <RefreshCw className="w-4 h-4 text-pink-300" />
              <span className="text-sm">Reusable 15x</span>
            </div>
            <div className="flex items-center gap-2">
              <Truck className="w-4 h-4" style={{ color: '#A5D6A7' }} />
              <span className="text-sm">Ships from Mexico</span>
            </div>
          </div>
        </BlurPanel>
      </motion.div>
    </section>
  )
}