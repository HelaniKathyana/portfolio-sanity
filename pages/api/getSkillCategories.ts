// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {
  NextApiRequest,
  NextApiResponse
} from "next"
import { groq } from "next-sanity"
import { sanityClient } from "../../sanity"

import { SkillCategory } from "@/typings"

const query = groq`
  *[_type == "skillCategory"] | order(_createdAt desc)
`

type Data = {
  skillCategories: SkillCategory[]
}

export async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const skillCategories: SkillCategory[] = await sanityClient.fetch(query)

  res.status(200).json({
    skillCategories
  })
}
