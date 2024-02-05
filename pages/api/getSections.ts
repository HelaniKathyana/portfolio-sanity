// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {
  NextApiRequest,
  NextApiResponse
} from "next"
import { groq } from "next-sanity"
import { sanityClient } from "../../sanity"

import { SectionWrapper } from "@/typings"

const query = groq`
  *[_type == "section"] | order(_createdAt desc)
`

type Data = {
  sections: SectionWrapper[]
}

export async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const sections: SectionWrapper[] = await sanityClient.fetch(query)

  res.status(200).json({
    sections
  })
}
