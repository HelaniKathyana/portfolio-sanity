import React from "react"

import styles from "@/regions/Intro/Intro.module.scss"

export default function IntroShapeBottom() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 2600 131.1"
      preserveAspectRatio="none"
    >
      <path
        className={`origin-center rotate-0 ${styles.shapeBottom}`}
        d="M0 0L2600 0 2600 69.1 0 0z"
      />
      <path
        className={`origin-center rotate-0 opacity-50 ${styles.shapeBottom}`}
        d="M0 0L2600 0 2600 69.1 0 69.1z"
      />
      <path
        className={`origin-center rotate-0 opacity-25 ${styles.shapeBottom}`}
        d="M2600 0L0 0 0 130.1 2600 69.1z"
      />
    </svg>
  )
}
