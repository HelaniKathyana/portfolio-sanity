import { colorInput } from "@sanity/color-input"
import { defineConfig } from "sanity"
import { deskTool } from "sanity/desk"
import { portfolioTheme } from "./theme"
import { schemaTypes } from "./schemas"
import { visionTool } from "@sanity/vision"

import Logo from "@/components/Studio/Logo/Logo.component"
import StudioNavbar from "@/components/Studio/StudioNavbar/StudioNavbar.component"

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!

export default defineConfig({
  basePath: "/studio",
  dataset,
  name: "PORTFOLIO_Content_Studio",
  plugins: [
    colorInput(),
    deskTool(),
    visionTool()
  ],
  projectId,
  schema: {
    types: schemaTypes
  },
  studio: {
    components: {
      logo: Logo,
      navbar: StudioNavbar
    }
  },
  theme: portfolioTheme,
  title: "PORTFOLIO Content Studio"
})
