"use client"

import Image from "next/image"
import { PortableText } from "@portabletext/react"
import {
  AnimatePresence,
  motion,
  useInView
} from "framer-motion"
import React, { useRef } from "react"

import useTotalExperience from "@/hooks/useTotalExperience"

import {
  BaseImage,
  Color,
  Sitewide
} from "@/typings"
import { urlFor } from "@/sanity"

import Badge from "@/components/App/Badge/Badge.component"
import Container from "@/components/App/Container/Container.component"
import HeadingDivider from "@/components/App/HeadingDivider/HeadingDivider.component"
import Section from "@/components/App/Section/Section.component"

import styles from "./About.module.scss"

type Props = {
  addSectionColor: boolean
  displayInNav: boolean
  dividerBackground: boolean
  dividerPattern: boolean
  heading: string
  menuUrl: string
  patternBottom: BaseImage
  patternTop: BaseImage
  sectionBackground: BaseImage
  sectionColor?: Color
  sectionIcon?: string
  sitewide: Sitewide
  title: string
}

export default function About({
  addSectionColor,
  displayInNav,
  dividerBackground,
  dividerPattern,
  heading,
  menuUrl,
  patternBottom,
  patternTop,
  sectionBackground,
  sectionColor,
  sectionIcon,
  sitewide,
  title
}: Props) {
  const dataPosition = displayInNav && menuUrl.length > 0 ? menuUrl : null

  const animatedBadge = useRef(null)
  const animatedImage = useRef(null)
  const animatedWrapper = useRef(null)

  const isInViewBadge = useInView(
    animatedBadge, {
      once: true
    }
  )
  const isInViewImage = useInView(
    animatedImage, {
      once: true
    }
  )
  const isInViewWrapper = useInView(
    animatedWrapper, {
      once: true
    }
  )

  const years = useTotalExperience().toString()

  const aboutContent = sitewide?.aboutContent ? sitewide.aboutContent.map((block) => {
    if (block._type === "block" && block.children) {
      block.children.forEach((child) => {
        if (child.text) {
          child.text = child.text.replace(/\[years_experience\]/g, years)
        }
      })
    }

    return block
  }) : []

  return (
    <AnimatePresence>
      <Section
        dataPosition={dataPosition}
        sectionClassName="relative overflow-hidden pt-12"
        sectionColor={addSectionColor ? sectionColor?.hex : undefined}
      >
        {!addSectionColor && sectionBackground && (
          <Image
            alt={`${title} region background image`}
            className="absolute top-0 left-0 w-full h-full object-cover"
            height={1080}
            loading="lazy"
            src={urlFor(sectionBackground.asset).url()}
            width={1920}
          />
        )}
        <motion.div
          animate={isInViewWrapper ? {
            opacity: 1,
            y: 0
          } : {}}
          initial={{
            opacity: 0,
            y: 100
          }}
          ref={animatedWrapper}
          transition={{
            duration: 0.8,
            ease: "easeInOut"
          }}
        >
          <HeadingDivider
            background={dividerBackground ? true : undefined}
            icon={sectionIcon}
            patternBottom={dividerPattern ? urlFor(patternBottom.asset).url() : undefined}
            patternTop={dividerPattern ? urlFor(patternTop.asset).url() : undefined}
            title={heading}
            sectionColor={addSectionColor && !dividerBackground ? sectionColor?.hex : "#74c197"}
          />
          <Container
            containerClassName={`relative ${styles.containerWrapper}`}
          >
            <motion.div
              animate={isInViewWrapper ? {
                opacity: 1,
                x: 0,
                y: 0
              } : {}}
              className={styles.left}
              initial={{
                x: -100,
                y: 100
              }}
              ref={animatedWrapper}
              transition={{
                delay: 0.5,
                duration: 0.8,
                ease: "easeInOut"
              }}
            >
              <PortableText
                value={aboutContent}
              />
            </motion.div>
            <div className={styles.right}>
              <motion.div
                animate={isInViewBadge ? {
                  opacity: 1
                } : {}}
                initial={{
                  opacity: 0
                }}
                ref={animatedBadge}
                transition={{
                  delay: 0.8,
                  duration: 0.8,
                  ease: "easeInOut"
                }}
              >
                <Badge />
              </motion.div>
              <motion.div
                animate={isInViewImage ? {
                  opacity: 1,
                  y: 0
                } : {}}
                initial={{
                  opacity: 0,
                  y: 50
                }}
                ref={animatedImage}
                transition={{
                  delay: 1,
                  duration: 0.8,
                  ease: "easeInOut"
                }}
              >
                <Image
                  alt="Rejaur Rahman"
                  height={458}
                  loading="lazy"
                  src={urlFor(sitewide?.aboutImage).url()}
                  width={592}
                />
              </motion.div>
            </div>
          </Container>
        </motion.div>
      </Section>
    </AnimatePresence>
  )
}
