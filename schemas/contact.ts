import {
  defineField,
  defineType
} from "sanity"

import { CommentIcon } from "@sanity/icons"

export default defineType({
  name: "contact",
  title: "Contact",
  type: "document",
  icon: CommentIcon,
  fields: [
    defineField({
      name: "type",
      title: "Type",
      type: "string"
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "string"
    }),
    defineField({
      name: "icon",
      title: "Icon",
      type: "image",
      options: {
        hotspot: true
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative Text"
        }
      ]
    })
  ]
})
