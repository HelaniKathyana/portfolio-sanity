import React, { ReactNode } from "react"

type InnerSectionProps = {
  children: ReactNode
  innerContentClass?: string
  sectionColor?: string
}

export default function InnerSection({
  children,
  innerContentClass,
  sectionColor
}: InnerSectionProps) {
  return (
    <div
      className={`py-12 ${innerContentClass || undefined}`.trim()}
      style={{
        backgroundColor: sectionColor || undefined
      }}
    >
      {children}
    </div>
  )
}
