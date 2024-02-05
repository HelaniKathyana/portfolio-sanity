import {
  defineField,
  defineType
} from "sanity"

import { CubeIcon } from "@sanity/icons"

export default defineType({
  name: "skill",
  title: "Skill",
  type: "document",
  icon: CubeIcon,
  fields: [
    defineField({
      description: "Display skill on skillset region",
      name: "activeSkill",
      title: "Active Skill",
      type: "boolean"
    }),
    defineField({
      name: "brandColor",
      title: "Brand Colour",
      type: "color"
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "string"
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "array",
      of: [
        {
          type: "reference",
          to: {
            type: "skillCategory"
          }
        }
      ],
      validation: (Rule) => Rule.max(1).error(
        "You can select a maximum of 1 category."
      )
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
    })
  ]
})
