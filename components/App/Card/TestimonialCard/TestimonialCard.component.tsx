"use client"

import Link from "next/link"
import {
  AnimatePresence,
  motion,
  useInView
} from "framer-motion"
import React, { useRef } from "react"

import styles from "./TestimonialCard.module.scss"

type TestimonialCardProps = {
  animation?: {
    opacity: number
    scale: number
    x: number
  }
  author: {
    name: string
    role: string
  }
  quote: string
}

export default function TestimonialCard({
  animation = {
    opacity: 1,
    scale: 1,
    x: 0
  },
  author,
  quote,
}: TestimonialCardProps) {
  const truncateQuote = (character: string, maxLength: number) => {
    return character.length > maxLength ? character.substring(0, maxLength) + "..." : character
  }

  const maxChars = 186
  const displayQuote = truncateQuote(quote, maxChars)

  const animatedCard = useRef(null)
  const isInViewCard = useInView(
    animatedCard
  )

  const {
    opacity,
    scale,
    x
  } = animation

  return (
    <AnimatePresence>
      <motion.div
        animate={isInViewCard ? {
          opacity,
          scale,
          x
        } : {}}
        className={styles.block}
        initial={{
          opacity: 0,
          scale: 0,
          x: 0
        }}
        ref={animatedCard}
        transition={{
          duration: 0.8,
          ease: "easeInOut"
        }}
      >
        <div className={styles.quote}>
          <p className={styles.copy}>
            {displayQuote}
            {quote.length > maxChars && (
              <Link
                aria-label="view quote on LinkedIn profile"
                className={`capitalize font-medium ${styles.link}`}
                href="https://www.linkedin.com/in/rejaur-rahman-a938a657" rel="noopener"
                target="_blank"
              >
                View Quote In Full
              </Link>
            )}
          </p>
        </div>
        <div className={styles.author}>
          <p className={`font-light ${styles.authorName}`}>
            {author.name}
          </p>
          <p className={styles.authorRole}>
            {author.role}
          </p>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
