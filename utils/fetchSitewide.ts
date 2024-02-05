import { Sitewide} from "@/typings"

export const fetchSitewide = async () => {
  const res = await fetch(
    `
      ${process.env.NEXT_PUBLIC_BASE_URL}/api/getSitewide
    `
  )

  const data = await res.json()
  const sitewide: Sitewide = data.sitewide

  return sitewide
}
