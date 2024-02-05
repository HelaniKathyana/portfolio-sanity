// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {
  NextApiRequest,
  NextApiResponse
} from "next"
import { groq } from "next-sanity"
import { sanityClient } from "../../sanity"

import { Sitewide } from "@/typings"

const query = groq`
  *[_type == "sitewide"][0]
`

type Data = {
  sitewide: Sitewide
}

export async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const sitewide: Sitewide = await sanityClient.fetch(query)

  res.status(200).json({
    sitewide
  })
}
