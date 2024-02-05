import { SectionWrapper } from "@/typings"

export const fetchSections = async () => {
  const res = await fetch(
    `
      ${process.env.NEXT_PUBLIC_BASE_URL}/api/getSections
    `
  )

  const data = await res.json()
  const sections: SectionWrapper[] = data.sections

  return sections
}
