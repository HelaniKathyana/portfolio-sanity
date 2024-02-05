import Image from "next/image"
import Link from "next/link"
import React from "react"

import { Sitewide } from "@/typings"
import { urlFor } from "@/sanity"

import styles from "./HeaderLogo.module.scss"

type Props = {
  sitewide: Sitewide
}

export default function HeaderLogo({
  sitewide
}: Props) {
  return (
    <Link
      className={`flex items-center ${styles.wrapper}`}
      href={`#${sitewide.logoLink}`}
    >
      <Image
        alt="Rejaur Rahman"
        height={43}
        src={urlFor(sitewide?.logo).url()}
        width={43}
      />
    </Link>
  )
}
