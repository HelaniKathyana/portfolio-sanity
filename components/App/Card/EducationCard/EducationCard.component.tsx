"use client"

import Image from "next/image"
import Link from "next/link"
import {
  AnimatePresence,
  motion,
  useInView
} from "framer-motion"
import React, { useRef } from "react"

import styles from "./EducationCard.module.scss"

type EducationCardProps = {
  animation?: {
    opacity: number
    scale: number
    x: number
  }
  boxImage: string
  brandColor: string
  buttonPDF?: string
  companyName: string
  courseTitle: string
  date: {
    current: boolean
    endDate?: string
    startDate: string
  }
  languages?: string
  location: string
  mainImage: string
  modules: string
}

export default function EducationCard({
  animation = {
    opacity: 1,
    scale: 1,
    x: 0
  },
  boxImage,
  brandColor,
  buttonPDF,
  companyName,
  courseTitle,
  date,
  languages,
  location,
  mainImage,
  modules
}: EducationCardProps) {
  const animatedCard = useRef(null)
  const isInViewCard = useInView(
    animatedCard, {
      once: true
    }
  )

  const {
    opacity,
    scale,
    x
  } = animation

  const formatDate = (dateString: string): string => {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "2-digit"
    }

    return new Date(dateString).toLocaleDateString(undefined, options)
  }

  return (
    <AnimatePresence>
      <motion.div
        animate={isInViewCard ? {
          opacity,
          scale,
          x
        } : {}}
        className={`flex flex-wrap justify-between items-start ${styles.wrapper}`}
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
        <div
          className={`relative ${styles.left}`}
        >
          <h3
            className={`uppercase ${styles.company}`}
            style={{
              color: `${brandColor}`
            }}
          >
            {companyName}
          </h3>
          <span
            className={`flex capitalize font-bold mt-1.5 mb-4 ${styles.location}`}
          >
            {location}
          </span>
          <h4 className={styles.title}>
            {courseTitle}
          </h4>
          <span
            className="inline-block font-bold py-2.5 px-4 my-5 rounded-lg border border-solid"
            style={{
              color: `${brandColor}`,
              borderColor: `${brandColor}`
            }}
          >
            {formatDate(date.startDate)}
            {" "}-{" "}
            {date.current ? (
                "current"
              ) : (
                <>
                  {formatDate(date.endDate || "")}
                </>
            )}
          </span>
          {modules && (
            <>
              <h5 className={`capitalize mb-1.5 ${styles.subheading}`}>
                Core Modules:
              </h5>
              <p className={`font-light mb-4 ${styles.module}`}>
                {modules}
              </p>
            </>
          )}
          {languages && (
            <>
              <h5 className={`capitalize mb-1.5 ${styles.subheading}`}>
                Languages:
              </h5>
              <p className={`font-light mb-4 ${styles.module}`}>
                {languages}
              </p>
            </>
          )}
          {buttonPDF && (
            <Link
              aria-label="View Excel With Business App Course Certificate"
              className={`flex items-center justify-center uppercase w-52 rounded-lg py-2.5 px-4 ${styles.button}`}
              href={buttonPDF}
              target="_blank"
            >
              View Certificate
            </Link>
          )}
        </div>
        <div
          className={`flex justify-center relative pt-10 ${styles.right}`}
        >
          <div
            className={`flex items-center justify-center absolute right-0 w-14 h-14 ${styles.box}`}
            style={{
              borderColor: `${brandColor}`
            }}
          >
            <Image
              alt={companyName}
              height={32}
              loading="lazy"
              src={boxImage}
              width={32}
            />
          </div>
          <Image
            alt={companyName}
            height={298}
            loading="lazy"
            src={mainImage}
            width={530}
          />
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
