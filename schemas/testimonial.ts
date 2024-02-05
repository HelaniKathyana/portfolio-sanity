import {
  defineField,
  defineType
} from "sanity"

import { TextIcon } from "@sanity/icons"

export default defineType({
  name: "testimonial",
  title: "Testimonial",
  type: "document",
  icon: TextIcon,
  fields: [
    defineField({
      name: "author",
      title: "Author",
      type: "string"
    }),
    defineField({
      name: "role",
      title: "Role",
      type: "string"
    }),
    defineField({
      name: "quote",
      title: "Quote",
      type: "text"
    })
  ]
})
