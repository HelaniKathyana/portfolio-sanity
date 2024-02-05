import { Testimonial } from "@/typings"

export const fetchTestimonials = async () => {
  const res = await fetch(
    `
      ${process.env.NEXT_PUBLIC_BASE_URL}/api/getTestimonial
    `
  )

  const data = await res.json()
  const testimonials: Testimonial[] = data.testimonials

  return testimonials
}
