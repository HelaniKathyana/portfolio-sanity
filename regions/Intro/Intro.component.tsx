"use client"

import Image from "next/image"
import React from "react"
import {
  Cursor,
  useTypewriter
} from "react-simple-typewriter"

import {
  BaseImage,
  Color,
  SectionWrapper,
  Sitewide
} from "@/typings"
import { urlFor } from "@/sanity"

import Container from "@/components/App/Container/Container.component"
import Header from "@/components/App/Layout/Header/Header.component"
import IntroShapeBottom from "./IntroShapeBottom/IntroShapeBottom.component"
import Section from "@/components/App/Section/Section.component"

import styles from "./Intro.module.scss"

type Props = {
  addSectionColor: boolean
  displayInNav: boolean
  heading: string
  menuUrl: string
  sitewide: Sitewide
  sectionBackground: BaseImage
  sectionColor?: Color
  sections?: SectionWrapper[]
  subText: string
  title: string
}

export default function Intro({
  addSectionColor,
  displayInNav,
  heading,
  menuUrl,
  sectionBackground,
  sectionColor,
  sections,
  sitewide,
  subText,
  title
}: Props) {
  const dataPosition = displayInNav && menuUrl.length > 0 ? menuUrl : null

  const [text] = useTypewriter({
    delaySpeed: 2000,
    loop: true,
    words: sitewide.typingText
  })

  return (
    <Section
      dataPosition={dataPosition}
      sectionClassName={`flex ${styles.wrapper}`}
    >
      <div
        className={`relative w-full overflow-hidden ${styles.introBg}`}
        style={{
          backgroundColor: `${addSectionColor ? sectionColor?.hex : undefined}`
        }}
      >
        {!addSectionColor && sectionBackground && (
          <Image
            alt={`${title} region background image`}
            className="absolute top-0 left-0 w-full h-full object-cover"
            height={1080}
            src={urlFor(sectionBackground.asset).url()}
            width={1920}
          />
        )}
        <div className={styles.contentWrapper}>
          <Container
            containerClassName={styles.containerWrapper}
          >
            <div className={`relative z-10 text-center ${styles.text}`}>
              <h1 className={styles.heading}>
                {heading}
              </h1>
              <h2 className={styles.subheading}>
                {subText}
                <span className={styles.textWrapper}>
                  <span
                    className={styles.subheadingText}
                  >
                    {text}
                  </span>
                  <Cursor
                    cursorColor={sitewide?.typingColor?.hex}
                  />
                </span>
              </h2>
            </div>
          </Container>
        </div>
        <Image
          alt="Rejaur Rahman"
          className={`relative block top-0 left-0 my-0 mx-auto ${styles.introImage}`}
          height={950}
          priority
          src={urlFor(sitewide?.heroImage).url()}
          width={916}
        />
        <div
          className="absolute w-full h-full top-0 left-0 ${styles.overlay"
          style={{
            backgroundColor: `${addSectionColor ? sectionColor?.hex : undefined}`,
            opacity: 0.2
          }}
        />
        <div className={`absolute rotate-180 ${styles.shape}`}>
          <IntroShapeBottom />
        </div>
      </div>
      <Header
        sections={sections}
        sitewide={sitewide}
      />
    </Section>
  )
}
