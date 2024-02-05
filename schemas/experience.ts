import {
  defineField,
  defineType
} from "sanity"

import { HomeIcon } from "@sanity/icons"

export default defineType({
  name: "experience",
  title: "Experience",
  type: "document",
  icon: HomeIcon,
  fields: [
    defineField({
      name: "role",
      title: "Role",
      type: "string"
    }),
    defineField({
      description: "Select true if Contract role",
      name: "contractRole",
      title: "Contract Role?",
      type: "boolean"
    }),
    defineField({
      name: "company",
      title: "Company",
      type: "string"
    }),
    defineField({
      name: "companyIcon",
      title: "Company Icon",
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
      name: "companyLogo",
      title: "Company Logo",
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
      name: "currentlyWorkplace",
      title: "Current Workplace?",
      type: "boolean"
    }),
    defineField({
      name: "dateStarted",
      title: "Date Started",
      type: "date",
      options: {
        dateFormat: "MM/YYYY"
      }
    }),
    defineField({
      hidden: ({ document }) => document?.currentlyWorkplace === true,
      name: "dateEnded",
      title: "Date Ended",
      type: "date",
      options: {
        dateFormat: "MM/YYYY"
      }
    }),
    defineField({
      name: "technologies",
      title: "Technologies",
      type: "array",
      of: [
        {
          type: "reference",
          to: {
            type: "skill"
          }
        }
      ]
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "array",
      of: [
        {
          type: "string"
        }
      ]
    })
  ]
})
