import {
  defineField,
  defineType
} from "sanity"

import { EarthGlobeIcon } from "@sanity/icons"

export default defineType({
  name: "sitewide",
  title: "Sitewide",
  type: "document",
  icon: EarthGlobeIcon,
  fields: [
    defineField({
      name: "heroImage",
      title: "Hero image",
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
      name: "logo",
      title: "Logo",
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
      name: "logoLink",
      title: "Logo Link",
      type: "string",
      validation: (Rule) => Rule.lowercase()
    }),
    defineField({
      name: "typingColor",
      title: "Typing Text Color",
      type: "color"
    }),
    defineField({
      name: "typingText",
      title: "Typing Text",
      type: "array",
      of: [
        {
          type: "string"
        }
      ]
    }),
    defineField({
      name: "aboutImage",
      title: "About Image",
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
      name: "aboutContent",
      title: "About Content",
      type: "array",
      of: [
        {
          type: "block"
        }
      ]
    }),
    defineField({
      name: "contactListText",
      title: "Contact Text List",
      type: "string"
    }),
    defineField({
      name: "locationArea",
      title: "Location Area",
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
      name: "successFormHeading",
      title: "Success Form Heading",
      type: "string"
    }),
    defineField({
      name: "successFormCopy",
      title: "Success Form Copy",
      type: "text"
    })
  ],
  preview: {
    prepare() {
      return {
        media: EarthGlobeIcon,
        title: "Sitewide Data"
      }
    }
  }
})
