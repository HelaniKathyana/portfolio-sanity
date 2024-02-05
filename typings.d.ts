interface SanityBody {
  _createdAt: string
  _id: string
  _rev: string
  _updatedAt: string
}

interface Block {
  _key: string
  _type: "block"
  children: Span[]
  markDefs: []
  style: "normal" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "blockquote"
}

interface Color {
  _type: "color"
  alpha: number
  hex: string
}

interface BaseImage {
  _type: "image"
  asset: {
    _ref: string
    _type: "reference"
  }
}

interface FileReference {
  _ref: string
  _type: "reference"
}

interface PDF {
  _type: "file"
  asset: FileReference
}

interface Span {
  _key: string
  _type: "span"
  marks: string[]
  text: string
}

export interface ContactMethod extends SanityBody {
  _type: "contact"
  icon: BaseImage | Image
  title: string
  type: string
}

export interface Education extends SanityBody {
  _type: "education"
  brandColor: Color
  buildingImage: BaseImage | Image
  certificateFile: PDF
  certificateUrl: string
  companyName: string
  companyIcon: BaseImage | Image
  currentlyStudying: boolean
  dateEnded: date
  dateStarted: date
  modules: string
  languages: string
  location: string
  title: string
}

export interface Experience extends SanityBody {
  _type: "experience"
  company: string
  companyIcon: BaseImage | Image
  companyLogo: BaseImage | Image
  contractRole: boolean
  currentlyWorkplace: boolean
  dateEnded: date
  dateStarted: date
  description: string[]
  technologies: Skill[]
  role: string
}

export interface Project extends SanityBody {
  _type: "project"
  brandColor: Color
  codeURL: string
  coverImage: BaseImage | Image
  futureUse: string
  previewURL: string
  projectBackground: string
  summary: string
  technologies: Skill[]
  title: string
}

export interface SectionWrapper extends SanityBody {
  _type: "section"
  addSectionColor?: boolean
  displayInNav: boolean
  dividerBackground?: boolean
  dividerPattern?: boolean
  heading?: string
  menuTitle: string
  menuUrl: string
  patternBottom?: BaseImage | Image
  patternTop?: BaseImage | Image
  sectionBackground?: BaseImage | Image
  sectionColor?: Color
  sectionIcon?: string
  subText?: string
  title?: string
}

export interface Sitewide extends SanityBody {
  _type: "sitewide"
  aboutContent: Block[]
  aboutImage: BaseImage | Image
  contactListText: string
  heroImage: BaseImage | Image
  locationArea: BaseImage | Image
  logo: BaseImage | Image
  logoLink: string
  successFormCopy: string
  successFormHeading: string
  typingColor: Color
  typingText: string[]
}

export interface Skill extends SanityBody {
  _type: "skill"
  activeSkill?: boolean
  brandColor: Color
  category: SkillCategory
  logo: BaseImage | Image
  title: string
}

export interface SkillCategory extends SanityBody {
  _type: "skillCategory"
  title: string
}

export interface Social extends SanityBody {
  _type: "social"
  icon: BaseImage | Image
  primaryColor: Color
  secondaryColor: Color
  title: string
  url: string
}

export interface Testimonial extends SanityBody {
  _type: "testimonial"
  author: string
  quote: string
  role: string
}
