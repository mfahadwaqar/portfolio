"use client"

import { motion } from "framer-motion"
import { Monitor } from 'lucide-react'
import { useEffect, useState } from "react"

export function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
    }, 2500)

    return () => clearTimeout(timer)
  }, [])

  if (!isVisible) return null

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#000000] text-white"
    >
      <div className="relative">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            delay: 0.3,
          }}
          className="relative z-10 flex items-center justify-center"
        >
          <Monitor className="h-24 w-24 text-white" />
          <motion.div
            animate={{
              x: [0, 10, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute -right-4 flex space-x-1"
          >
            <span className="h-2 w-2 rounded-full bg-[#00FF00]" />
            <span className="h-2 w-2 rounded-full bg-[#00FF00]" />
          </motion.div>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-8 flex flex-col items-center space-y-2"
      >
        <div className="flex items-center space-x-2">
          <span className="font-mono text-2xl">React</span>
          <span className="font-mono text-2xl text-[#00FF00]">Portfolio</span>
        </div>
        <span className="text-sm text-gray-400">by Muhammad Fahad Waqar</span>
      </motion.div>
    </motion.div>
  )
}

