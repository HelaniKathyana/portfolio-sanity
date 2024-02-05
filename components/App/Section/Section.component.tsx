import React, { ReactNode } from "react"

type SectionProps = {
  children: ReactNode
  dataPosition: string | null
  sectionClassName?: string
  sectionColor?: string
}

export default function Section({
  children,
  dataPosition,
  sectionClassName,
  sectionColor
}: SectionProps) {
  return (
    <section
      className={sectionClassName || undefined}
      data-position={dataPosition}
      style={{
        backgroundColor: sectionColor || undefined
      }}
    >
      {children}
    </section>
  )
}
