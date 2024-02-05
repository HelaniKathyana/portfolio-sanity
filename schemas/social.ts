import {
  defineField,
  defineType
} from "sanity"

import { MobileDeviceIcon } from "@sanity/icons"

export default defineType({
  name: "social",
  title: "Social",
  type: "document",
  icon: MobileDeviceIcon,
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string"
    }),
    defineField({
      name: "url",
      title: "Url",
      type: "url"
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
    }),
    defineField({
      name: "primaryColor",
      title: "Primary Colour",
      type: "color"
    }),
    defineField({
      name: "secondaryColor",
      title: "Secondary Colour",
      type: "color"
    }),
  ]
})
