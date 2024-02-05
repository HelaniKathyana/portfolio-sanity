import Image from "next/image"
import {
  AnimatePresence,
  motion,
  useInView
} from "framer-motion"
import React, { useRef } from "react"

import styles from "@/regions/Contact/Contact.module.scss"

type ContactListProps = {
  animation?: {
    opacity: number
    scale: number
    x: number
    y: number
  }
  icon: string
  text: string
  type: string
}

export default function ContactList({
  animation = {
    opacity: 1,
    scale: 1,
    x: 0,
    y: 0
  },
  icon,
  text,
  type
}: ContactListProps) {
  const animatedList = useRef(null)
  const isInViewList = useInView(
    animatedList, {
      once: true
    }
  )
  const {
    opacity,
    scale,
    x,
    y
  } = animation

  return (
    <AnimatePresence>
      <motion.div
        animate={isInViewList ? {
          scale,
          opacity,
          x,
          y
        } : {}}
        className={styles.methodsBlock}
        initial={{
          opacity: 0,
          scale: 0
        }}
        ref={animatedList}
        transition={{
          delay: 0.5,
          duration: 0.5,
          ease: "easeInOut"
        }}
      >
        <div
          className={`flex relative items-center justify-center mx-auto rounded-full ${styles.methodsCircle}`}
        >
          <Image
            alt={type}
            className={styles.icon}
            height={44}
            loading="lazy"
            src={icon}
            width={44}
          />
        </div>
        <span
          className={`block h-1.5 my-5 mx-auto ${styles.methodsSeperator}`}
        />
        <p className={`font-light text-center ${styles.methodsText}`}>
          {text}
        </p>
      </motion.div>
    </AnimatePresence>
  )
}