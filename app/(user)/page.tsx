import React from "react"

import {
  ContactMethod,
  Education,
  Experience,
  Project,
  SectionWrapper,
  Sitewide,
  Skill,
  SkillCategory,
  Social,
  Testimonial
} from "@/typings"

import { fetchContact } from "@/utils/fetchContacts"
import { fetchEducations } from "@/utils/fetchEducations"
import { fetchExperiences } from "@/utils/fetchExperiences"
import { fetchProjects } from "@/utils/fetchProjects"
import { fetchSections } from "@/utils/fetchSection"
import { fetchSitewide } from "@/utils/fetchSitewide"
import { fetchSkillCategories } from "@/utils/fetchSkillCategories"
import { fetchSkills } from "@/utils/fetchSkills"
import { fetchSocials } from "@/utils/fetchSocials"
import { fetchTestimonials } from "@/utils/fetchTestimonials"

import About from "@/regions/About/About.component"
import BackToTop from "@/components/App/BackToTop/BackToTop.component"
import Contact from "@/regions/Contact/Contact.component"
import EducationHistory from "@/regions/EducationHistory/EducationHistory.component"
import FollowMe from "@/regions/FollowMe/FollowMe.component"
import Intro from "@/regions/Intro/Intro.component"
import Projects from "@/regions/Projects/Projects.component"
import Skillset from "@/regions/Skillset/Skillset.component"
import Testimonials from "@/regions/Testimonials/Testimonials.component"
import WorkExperience from "@/regions/WorkExperience/WorkExperience.component"

export default async function Home() {
  const contacts: ContactMethod[] = await fetchContact()
  const educations: Education[] = await fetchEducations()
  const experiences: Experience[] = await fetchExperiences()
  const projects: Project[] = await fetchProjects()
  const sections: SectionWrapper[] = await fetchSections()
  const sitewide: Sitewide = await fetchSitewide()
  const skillCategories: SkillCategory[] = await fetchSkillCategories()
  const skills: Skill[] = await fetchSkills()
  const socials: Social[] = await fetchSocials()
  const testimonials: Testimonial[] = await fetchTestimonials()

  const extractPropsFromSection = (title: string) => {
    const section = sections.find((section) => section.title === title)

    return {
      addSectionColor: section?.addSectionColor || false,
      displayInNav: section?.displayInNav || false,
      dividerBackground: section?.dividerBackground || false,
      dividerPattern: section?.dividerPattern || false,
      heading: section?.heading || "",
      menuUrl: section?.menuUrl || "",
      patternBottom: section?.patternBottom || "",
      patternTop: section?.patternTop || "",
      sectionBackground: section?.sectionBackground,
      sectionColor: section?.sectionColor,
      sectionIcon: section?.sectionIcon || "",
      subText: section?.subText || "",
      title: section?.title || ""
    }
  }

  const homeProps = extractPropsFromSection("Home")
  const aboutProps = extractPropsFromSection("About")
  const educationProps = extractPropsFromSection("Education")
  const experienceProps = extractPropsFromSection("Experience")
  const skillsetProps = extractPropsFromSection("Skillset")
  const projectsProps = extractPropsFromSection("Projects")
  const testimonialsProps = extractPropsFromSection("Testimonials")
  const contactProps = extractPropsFromSection("Contact")
  const followMeProps = extractPropsFromSection("Follow Me")

  return (
    <>
      <Intro
        {...homeProps}
        sections={sections}
        sitewide={sitewide}
      />
      <About
        {...aboutProps}
        sitewide={sitewide}
      />
      <EducationHistory
        {...educationProps}
        educations={educations}
      />
      <WorkExperience
        {...experienceProps}
        experiences={experiences}
      />
      <Skillset
        {...skillsetProps}
        skillCategories={skillCategories}
        skills={skills}
      />
      <Projects
        {...projectsProps}
        projects={projects}
      />
      <Testimonials
        {...testimonialsProps}
        testimonials={testimonials}
      />
      <Contact
        {...contactProps}
        contacts={contacts}
        sitewide={sitewide}
      />
      <FollowMe
        {...followMeProps}
        socials={socials}
      />
      <BackToTop />
    </>
  )
}
