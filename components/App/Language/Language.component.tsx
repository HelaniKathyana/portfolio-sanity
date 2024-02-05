import Image from "next/image"
import {
  AnimatePresence,
  motion,
  useInView
} from "framer-motion"
import React, { useRef } from "react"

import styles from "./Language.module.scss"

type LanguageProps = {
  activeSkill?: boolean
  animation?: {
    opacity: number
    scale: number
    x: number
    y: number
  }
  brandColor: string
  category: string
  icon: string
  title: string
}

export default function Language({
  activeSkill,
  animation = {
    opacity: 1,
    scale: 1,
    x: 0,
    y: 0
  },
  brandColor,
  category,
  icon,
  title
}: LanguageProps) {
  const animatedSkill = useRef(null)
  const isInViewSkill = useInView(
    animatedSkill, {
      once: true
    }
  )
  const {
    opacity,
    scale,
    x,
    y
  } = animation

  return activeSkill ? (
    <AnimatePresence>
      <motion.div
        animate={isInViewSkill ? {
          opacity,
          scale,
          x,
          y
        } : {}}
        aria-label={title}
        className={`relative w-full ${styles.language}`}
        data-category={category}
        initial={{
          opacity: 0,
          scale: 0
        }}
        ref={animatedSkill}
        transition={{
          delay: 0.5,
          duration: 0.5,
          ease: "easeInOut"
        }}
      >
        <div className="my-4">
          <div
            className={`flex relative items-center justify-center rounded-full mx-auto overflow-hidden ${styles.circle}`}
          >
            <span
              className={`absolute top-0 left-0 rounded-full ${styles.background}`}
              style={{
                backgroundColor: `${brandColor}`
              }}
            />
            <Image
              alt={title}
              className="relative"
              height={100}
              loading="lazy"
              src={icon}
              width={100}
            />
          </div>
          <div
            className={`flex justify-center text-center ${styles.label}`}
          >
            <span
              className={`block relative w-fit py-1.5 px-4 font-light z-10 ${styles.text}`}
              style={{
                backgroundColor: `${brandColor}`
              }}
            >
              {title}
            </span>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  ) : null
}
