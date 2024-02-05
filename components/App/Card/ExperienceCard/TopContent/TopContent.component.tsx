import Image from "next/image"
import React from "react"

import styles from "@/components/App/Card/ExperienceCard/ExperienceCard.module.scss"

type TopContentProps = {
  companyLogo: string
  companyName: string
  role: string
}

export default function TopContent({
  companyLogo,
  companyName,
  role
}: TopContentProps) {
  return (
    <>
      <Image
        alt={companyName}
        height={43}
        loading="lazy"
        src={companyLogo}
        width={143}
      />
      <h4
        className={`uppercase font-medium mt-2.5 ${styles.heading}`}
      >
        {role}
      </h4>
    </>
  )
}
