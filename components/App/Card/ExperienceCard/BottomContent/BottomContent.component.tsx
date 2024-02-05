"use client"

import React, { useState } from "react"

import useMediaQuery from "@/hooks/useMediaQuery"

import styles from "@/components/App/Card/ExperienceCard/ExperienceCard.module.scss"

type BottomContentProps = {
  companyName: string
  contractType: boolean
  date: {
    current: boolean
    endDate?: string
    startDate: string
  }
  description: string[]
  skills: string[]
}

export default function BottomContent({
  companyName,
  contractType,
  date,
  description = [],
  skills = []
}: BottomContentProps) {
  const [showContent, setShowContent] = useState(false)
  const isDesktop = useMediaQuery(`(min-width: 1025px)`)
  const sortedSkills = skills.sort()

  const renderParagraphs = () => {
    return description.map((text, index) => {
      if (index >= 2) {
        return (
          <div
            className={`h-0 opacity-0 ${styles.hiddenContent} ${showContent ? styles.activeContent : ""}`.trim()}
            key={index}
          >
            <p
              className={`mb-4 font-light ${styles.description}`}
            >
              {text}
            </p>
          </div>
        )
      }

      return (
        <p
          className={`mb-4 font-light ${styles.description}`}
          key={index}
        >
          {text}
        </p>
      )
    })
  }

  const toggleContent = () => {
    setShowContent(!showContent)
  }

  const formatDate = (dateString: string): string => {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "short"
    }

    const date = new Date(dateString)
    const formattedDate = date.toLocaleDateString(undefined, options)

    return `${formattedDate.toUpperCase()}`
  }

  return (
    <>
      <h5
        className={`uppercase font-medium mt-5 mb-2.5 ${styles.roleType}`}
      >
        {contractType ? "Contract Role" : "Full-Time Role"}
      </h5>
      {!isDesktop && (
        <div
          className={`relative uppercase min-w-max ${styles.date}`}
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
      {skills.length > 0 && (
        <ul className="flex flex-wrap mb-4">
          {sortedSkills.map((skill, index) => (
            <li
              className={`min-w-fit h-fit p-1 mt-1.5 mr-1.5 ${styles.listItem}`}
              key={index}
            >
              {skill}
            </li>
          ))}
        </ul>
      )}
      <div className={styles.copy}>
        {renderParagraphs()}
      </div>
      <button
        aria-label={`Read more about role at ${companyName}`}
        className={`flex relative items-center justify-center w-44 h-10 rounded-lg uppercase ${styles.button}`}
        onClick={toggleContent}
      >
        {!showContent ? (
          "Read more"
        ) : (
          "Read less"
        )}
        {" "}...
      </button>
    </>
  )
}
