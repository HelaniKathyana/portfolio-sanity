import Link from "next/link"
import Image from "next/image"
import React from "react"

import styles from "./SocialBox.module.scss"

type SocialBoxProps = {
  icon: string
  primaryColor: string
  secondaryColor: string
  title: string
  url: string
}

export default function SocialBox({
  icon,
  primaryColor,
  secondaryColor,
  title,
  url
}: SocialBoxProps) {
  return (
    <Link
      aria-label={`${title} profile page`}
      className={`flex items-center py-12 ${styles.box}`}
      href={url}
      rel="noopener"
      style={{ backgroundImage: `linear-gradient(55deg, ${secondaryColor} 20%, ${primaryColor} 50%)` }}
      target="_blank"
    >
      <span className={`uppercase ${styles.heading}`}>
        My {title}
      </span>

      <span
        className={`flex w-16 h-1.5 my-5 mx-auto ${styles.divider}`}
      />

      <div
        className={`flex items-center justify-center w-40 h-40 my-0 mx-auto rounded-full ${styles.circle}`}
      >
        <Image
          alt={title}
          height={100}
          loading="lazy"
          src={icon}
          width={100}
        />
      </div>
    </Link>
  )
}
