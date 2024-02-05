import React from "react"

import styles from "./FilterButton.module.scss"

type FilterButtonProps = {
  category: string
  isActive: boolean
  label: string
  setActiveFilter: (category: string) => void
}

export default function FilterButton({
  category,
  isActive,
  label,
  setActiveFilter
}: FilterButtonProps) {
  return (
    <button
      aria-label={`${label} Skillset Filter`}
      className={`uppercase rounded-3xl font-light ${styles.button} ${isActive ? styles.active : ""}`.trim()}
      data-filter={category}
      onClick={() => setActiveFilter(category)}
      type="button"
    >
      {label}
    </button>
  )
}
