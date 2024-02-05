"use client"

import Image from "next/image"
import {
  AnimatePresence,
  motion,
  useInView
} from "framer-motion"
import React, { useRef } from "react"

import {
  BaseImage,
  Color,
  Project
} from "@/typings"
import { urlFor } from "@/sanity"

import Container from "@/components/App/Container/Container.component"
import HeadingDivider from "@/components/App/HeadingDivider/HeadingDivider.component"
import InnerSection from "@/components/App/InnerSection/InnerSection.component"
import ProjectCard from "@/components/App/Card/ProjectCard/ProjectCard.component"
import Section from "@/components/App/Section/Section.component"

import styles from "./Projects.module.scss"

type Props = {
  addSectionColor: boolean
  displayInNav: boolean
  dividerBackground: boolean
  dividerPattern: boolean
  heading: string
  menuUrl: string
  patternBottom: BaseImage
  patternTop: BaseImage
  projects: Project[]
  sectionBackground: BaseImage
  sectionColor?: Color
  sectionIcon?: string
  subText: string
  title: string
}

export default function Projects({
  addSectionColor,
  displayInNav,
  dividerBackground,
  dividerPattern,
  heading,
  menuUrl,
  patternBottom,
  patternTop,
  projects,
  sectionBackground,
  sectionColor,
  sectionIcon,
  subText,
  title
}: Props) {
  const dataPosition = displayInNav && menuUrl.length > 0 ? menuUrl : null

  const animatedWrapper = useRef(null)
  const isInViewWrapper = useInView(
    animatedWrapper, {
      once: true
    }
  )

  return (
    <AnimatePresence>
      <Section
        dataPosition={dataPosition}
        sectionClassName="relative"
        sectionColor={addSectionColor ? sectionColor?.hex : undefined}
      >
        <HeadingDivider
          background={dividerBackground ? true : undefined}
          icon={sectionIcon}
          patternBottom={dividerPattern ? urlFor(patternBottom.asset).url() : undefined}
          patternTop={dividerPattern ? urlFor(patternTop.asset).url() : undefined}
          sectionColor={addSectionColor && !dividerBackground ? sectionColor?.hex : "#74c197"}
          title={heading}
        />
        <InnerSection
          innerContentClass="relative overflow-hidden"
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
              delay: 0.2,
              duration: 0.3,
              ease: "easeInOut"
            }}
          >
            <Container>
              <p
                className={`relative text-center ${styles.subheading}`}
              >
                {subText}
              </p>
              <div
                className="flex justify-center items-start flex-wrap"
              >
                {projects.map((project: Project) => (
                  <ProjectCard
                    backgroundText={project?.projectBackground}
                    brandColor={project?.brandColor.hex}
                    coverImage={urlFor(project?.coverImage).url()}
                    futureUseText={project?.futureUse || undefined}
                    github={{
                      url: project?.codeURL
                    }}
                    key={project._id}
                    skills={project?.technologies.map(skill => skill.title) || []}
                    text={project?.summary}
                    title={project?.title}
                    website={{
                      url: project?.previewURL
                    }}
                  />
                ))}
              </div>
            </Container>
          </motion.div>
        </InnerSection>
      </Section>
    </AnimatePresence>
  )
}
