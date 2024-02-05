import { SkillCategory } from "@/typings"

export const fetchSkillCategories = async () => {
  const res = await fetch(
    `
      ${process.env.NEXT_PUBLIC_BASE_URL}/api/getSkillCategories
    `
  )

  const data = await res.json()
  const skillCategories: SkillCategory[] = data.skillCategories

  return skillCategories
}
