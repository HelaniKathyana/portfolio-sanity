import {
  defineField,
  defineType
} from "sanity"

import { EarthGlobeIcon } from "@sanity/icons"

export default defineType({
  name: "section",
  title: "Section",
  type: "document",
  icon: EarthGlobeIcon,
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string"
    }),
    defineField({
      name: "heading",
      title: "Heading",
      type: "string"
    }),
    defineField({
      name: "subText",
      title: "Sub Text",
      type: "string"
    }),
    defineField({
      description: "Get icon name from https://heroicons.com/",
      name: "sectionIcon",
      title: "Section Icon",
      type: "string"
    }),
    defineField({
      name: "addSectionColor",
      title: "Add Section Color?",
      type: "boolean"
    }),
    defineField({
      hidden: ({ document }) => document?.addSectionColor === false,
      name: "sectionColor",
      title: "Section Color",
      type: "color"
    }),
    defineField({
      hidden: ({ document }) => document?.addSectionColor === true,
      name: "sectionBackground",
      title: "Section Background",
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
      name: "displayInNav",
      title: "Display in Navigation?",
      type: "boolean"
    }),
    defineField({
      hidden: ({ document }) => document?.displayInNav === false,
      name: "menuTitle",
      title: "Menu Title",
      type: "string"
    }),
    defineField({
      hidden: ({ document }) => document?.displayInNav === false,
      name: "menuUrl",
      title: "Menu Url",
      type: "string",
      validation: (Rule) => Rule.lowercase()
    }),
    defineField({
      name: "dividerBackground",
      title: "Divider Background?",
      type: "boolean"
    }),
    defineField({
      name: "dividerPattern",
      title: "Divider Pattern?",
      type: "boolean"
    }),
    defineField({
      hidden: ({ document }) => document?.dividerPattern != true,
      name: "patternTop",
      title: "Pattern Top",
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
      hidden: ({ document }) => document?.dividerPattern != true,
      name: "patternBottom",
      title: "Pattern Bottom",
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
