"use client"

import {
  useEffect,
  useState
} from "react"

function calculateExperience() {
  const experiences = [
    { start: "2022-11-01", end: new Date() }, // Propeller
    { start: "2019-06-01", end: "2022-11-01" }, // ITech Media
    { start: "2017-01-01", end: "2019-05-31" }, // PMA
    { start: "2016-04-01", end: "2016-11-30" }, // Thoughtbubble
    { start: "2015-06-01", end: "2016-02-29" }, // Best & co
    { start: "2014-12-01", end: "2015-05-31" } // Optimax
  ]

  const totalDays = experiences.reduce((acc, { start, end }) => {
    const startDate = new Date(start).getTime()
    const endDate = new Date(end).getTime()

    return acc + (endDate - startDate) / (1000 * 60 * 60 * 24)
  }, 0)

  return Math.round(totalDays / 365)
}

export default function useTotalExperience() {
  const initialYears = calculateExperience()
  const [years, setYears] = useState(initialYears)

  useEffect(() => {
    const exactYears = calculateExperience()

    if (exactYears !== years) {
      setYears(exactYears)
    }
  }, [years])

  return years
}
