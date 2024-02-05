import React, { ReactNode } from "react"

import styles from "./Container.module.scss"

type ContainerProps = {
  children: ReactNode
  containerClassName?: string
}

export default function Container({
  children,
  containerClassName
}: ContainerProps) {
  return (
    <div
      className={`my-0 mx-auto py-0 px-4 ${styles.container} ${containerClassName || ""}`.trim()}
    >
      {children}
    </div>
  )
}
