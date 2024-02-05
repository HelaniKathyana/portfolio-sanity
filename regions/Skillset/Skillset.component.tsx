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

import {
  BaseImage,
  Color,
  Skill,
  SkillCategory
} from "@/typings"
import { urlFor } from "@/sanity"

import Container from "@/components/App/Container/Container.component"
import FilterButton from "@/components/App/Language/FilterButton/FilterButton.component"
import HeadingDivider from "@/components/App/HeadingDivider/HeadingDivider.component"
import InnerSection from "@/components/App/InnerSection/InnerSection.component"
import Language from "@/components/App/Language/Language.component"
import Section from "@/components/App/Section/Section.component"

import styles from "./Skillset.module.scss"

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
  skills: Skill[]
  skillCategories: SkillCategory[]
  title: string
}

export default function Skillset({
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
  skills,
  skillCategories,
  title
}: Props) {
  const dataPosition = displayInNav && menuUrl.length > 0 ? menuUrl : null

  const [activeCategory, setActiveCategory] = useState<string>("all")

  const animatedWrapper = useRef(null)
  const isInViewWrapper = useInView(
    animatedWrapper, {
      once: true
    }
  )

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category)

    const languageElements = document.querySelectorAll("[data-category]")

    languageElements.forEach((element) => {
      const htmlElement = element as HTMLElement

      if (htmlElement.getAttribute("data-category") === category || category === "all") {
        htmlElement.style.display = ""
      } else {
        htmlElement.style.display = "none"
      }
    })
  }

  return (
    <AnimatePresence>
      <Section
        dataPosition={dataPosition}
        sectionClassName="relative"
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
              delay: 0.2,
              duration: 0.3,
              ease: "easeInOut"
            }}
          >
            <Container
              containerClassName="flex items-start flex-wrap justify-center"
            >
              <div
                className={`flex relative justify-center w-full mb-4 ${styles.filter}`}
              >
                <FilterButton
                  category="all"
                  isActive={activeCategory === "all"}
                  label="All"
                  setActiveFilter={handleCategoryChange}
                />
                {skillCategories.map((category: SkillCategory) => (
                  <FilterButton
                    category={category?.title.toLowerCase()}
                    isActive={activeCategory === category?.title.toLowerCase()}
                    key={category._id}
                    label={category?.title}
                    setActiveFilter={handleCategoryChange}
                  />
                ))}
              </div>
              {skills.filter((skill:Skill) => activeCategory === "all" || String(skill?.category).toLowerCase()=== activeCategory.toLowerCase()).map((skill: Skill) => (
                <Language
                  activeSkill={skill?.activeSkill}
                  brandColor={skill?.brandColor.hex}
                  category={skill?.category.title}
                  key={skill._id}
                  icon={urlFor(skill?.logo).url()}
                  title={skill?.title}
                />
              ))}
            </Container>
          </motion.div>
        </InnerSection>
      </Section>
    </AnimatePresence>
  )
}
