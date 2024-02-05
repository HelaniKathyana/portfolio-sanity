"use client"

import Link from "next/link"
import React, {
  useEffect,
  useState
} from "react"

import { SectionWrapper } from "@/typings"

import modalStyles from "@/components/App/Layout/HeaderModal/HeaderModal.module.scss"
import styles from "./HeaderMenu.module.scss"

interface Props {
  sections?: SectionWrapper[]
  setOpen?: (open: boolean) => void
}

export default function HeaderMenu({
  sections,
  setOpen
} : Props) {
  const [activeSection, setActiveSection] = useState("home")

  const scrollToSection = (section: string) => (
    e: React.MouseEvent<HTMLAnchorElement>
  ) => {
    e.preventDefault()

    setActiveSection(section)

    if (setOpen) {
      setOpen(false)
    }

    const targetSection = document.querySelector(`[data-position="${section}"]`) as HTMLElement | null

    if (targetSection) {
      const navbarHeight = window.innerWidth > 1025 ? 90 : 54

      const positionToScroll = targetSection.offsetTop - navbarHeight

      window.scrollTo({
        top: positionToScroll,
        behavior: "smooth"
      })
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      const currentSection = sections?.find(section => {
        if (section.displayInNav) {
          const element = document.querySelector(`[data-position="${section.menuUrl}"]`)

          if (element) {
            const rect = element.getBoundingClientRect()

            return rect.top >= 0 && rect.top <= window.innerHeight / 2
          }
        }

        return false
      })

      if (currentSection) {
        setActiveSection(currentSection.menuUrl)
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [sections])

  return (
    <nav className={`${styles.navbar} ${modalStyles.navbar}`}>
      <ul className={`flex ${styles.list}`}>
        {
          sections?.filter(section => section.displayInNav).map((section) => (
            <li
              className={styles.listItem}
              key={section._id}
            >
            <Link
              aria-label={`View ${section.title} section of page`}
              className={`flex capitalize box-content ${styles.link} ${activeSection === section.menuUrl ? styles.linkActive : ""}`.trim()}
              href={`#${section.menuUrl}`}
              onClick={scrollToSection(`${section.menuUrl}`)}
            >
              {section.title}
            </Link>
            </li>
          ))
        }
      </ul>
    </nav>
  )
}
