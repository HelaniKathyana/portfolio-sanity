"use client"

import Image from "next/image"
import {
  AnimatePresence,
  motion,
  useInView
} from "framer-motion"
import React, {
  useRef,
  useState
} from "react"

import { ChevronDownIcon } from "@heroicons/react/24/solid"

import useMediaQuery from "@/hooks/useMediaQuery"

import TopContent from "./TopContent/TopContent.component"

import styles from "./ExperienceCard.module.scss"
import BottomContent from "./BottomContent/BottomContent.component"

type ExperienceCardProps = {
  animation?: {
    opacity: number
    scale: number
    x: number
    y: number
  }
  companyIcon: string
  companyLogo: string
  companyName: string
  contractType: boolean
  date: {
    current: boolean
    endDate?: string
    startDate: string
  }
  description: string[]
  role: string
  skills: string[]
}

export default function ExperienceCard({
  animation = {
    opacity: 1,
    scale: 1,
    x: 0,
    y: 0
  },
  companyIcon,
  companyLogo,
  companyName,
  contractType,
  date,
  description = [],
  role,
  skills = []
}: ExperienceCardProps) {
  const [setActive, setActiveState] = useState("")
  const [setHeight, setHeightState] = useState("0px")

  const accordionContent = useRef<HTMLDivElement | null>(null)

  const isDesktop = useMediaQuery(`(min-width: 1025px)`)

  const animatedCard = useRef(null)
  const isInViewCard = useInView(
    animatedCard, {
      once: true
    }
  )
  const {
    opacity,
    scale,
    x,
    y
  } = animation

  const formatDate = (dateString: string): string => {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "short"
    }

    const date = new Date(dateString)
    const formattedDate = date.toLocaleDateString(undefined, options)

    return `${formattedDate.toUpperCase()}`
  }

  const toggleAccordion = () => {
    setActiveState(setActive === "" ? "active" : "")
    setHeightState(
      setActive === "active" ? "0px" : `${(accordionContent.current as HTMLElement).scrollHeight}px`
    )
  }

  return (
    <AnimatePresence>
      <motion.div
        animate={isInViewCard ? {
          opacity,
          scale,
          x,
          y
        } : {}}
        className={`flex mb-5 ${styles.wrapper}`}
        initial={{
          opacity: 0,
          scale: 0
        }}
        ref={animatedCard}
        transition={{
          delay: 0.5,
          duration: 0.5,
          ease: "easeInOut"
        }}
      >
        <div
          className={`relative p-4 rounded-lg ${styles.content}`}
        >
          {isDesktop ? (
            <>
              <TopContent
                companyLogo={companyLogo}
                companyName={companyName}
                role={role}
              />
              <BottomContent
                companyName={companyName}
                contractType={contractType}
                date={date}
                description={description}
                skills={skills}
              />
            </>
          ) : (
            <div className={styles.accordion}>
              <div
                className={`${styles.accordionHeader} ${setActive ? styles.activeAccordion : ""}`.trim()}
                onClick={toggleAccordion}
              >
                <TopContent
                  companyLogo={companyLogo}
                  companyName={companyName}
                  role={role}
                />
                <ChevronDownIcon
                  className={`absolute w-8 h-8 top-4 right-4 ${styles.button}`}
                />
              </div>
              <div
                className={styles.accordionContent}
                ref={accordionContent}
                style={{ maxHeight: `${setHeight}` }}
              >
                <BottomContent
                  companyName={companyName}
                  contractType={contractType}
                  date={date}
                  description={description}
                  skills={skills}
                />
              </div>
            </div>
          )}
        </div>
        <div
          className={`flex items-start w-min ${styles.iconDate}`}
        >
          <div
            className={`flex relative justify-center items-center rounded-full ${styles.iconWrapper}`}
          >
            <Image
              alt={companyName}
              className={styles.icon}
              height={32}
              loading="lazy"
              src={companyIcon}
              width={32}
            />
          </div>
          {isDesktop && (
            <div
              className={`flex relative items-center uppercase min-w-max ${styles.date}`}
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
            </div>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
