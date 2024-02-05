// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {
  NextApiRequest,
  NextApiResponse
} from "next"
import { groq } from "next-sanity"
import { sanityClient } from "../../sanity"

import { ContactMethod } from "@/typings"

const query = groq`
*[_type == "contact"] {
  ...,
  icon {
    ...,
    asset->{
      ...
    }
  }
} | order(_createdAt desc)
`

type Data = {
  contact: ContactMethod[]
}

export async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const contact: ContactMethod[] = await sanityClient.fetch(query)
  console.log(contact)

  res.status(200).json({
    contact
  })
}

