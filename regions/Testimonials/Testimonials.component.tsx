"use client"

import Image from "next/image"
import {
  AnimatePresence,
  motion,
  useInView
} from "framer-motion"
import React, {
  useId,
  useRef
} from "react"
import {
  Autoplay,
  Pagination
} from "swiper/modules"
import {
  Swiper,
  SwiperSlide
} from "swiper/react"

import {
  BaseImage,
  Color,
  Testimonial
} from "@/typings"
import { urlFor } from "@/sanity"

import Container from "@/components/App/Container/Container.component"
import HeadingDivider from "@/components/App/HeadingDivider/HeadingDivider.component"
import InnerSection from "@/components/App/InnerSection/InnerSection.component"
import Section from "@/components/App/Section/Section.component"
import TestimonialsCard from "@/components/App/Card/TestimonialCard/TestimonialCard.component"

// eslint-disable-next-line import/no-unresolved, import/extensions
import "swiper/css"

import styles from "./Testimonials.module.scss"

import type SwiperCore from "swiper"

type Props = {
  addSectionColor: boolean
  displayInNav: boolean
  dividerBackground: boolean
  dividerPattern: boolean
  heading: string
  menuUrl: string
  patternBottom: BaseImage
  patternTop: BaseImage
  sectionBackground: BaseImage,
  sectionColor?: Color
  sectionIcon?: string
  subText: string
  testimonials: Testimonial[]
  title: string
}

export default function Testimonials({
  addSectionColor,
  displayInNav,
  dividerBackground,
  dividerPattern,
  heading,
  menuUrl,
  patternBottom,
  patternTop,
  sectionBackground,
  sectionColor,
  sectionIcon,
  subText,
  testimonials,
  title
}: Props) {
  const dataPosition = displayInNav && menuUrl.length > 0 ? menuUrl : null

  const id = useId()
  const swiperRef = useRef<SwiperCore>()

  const animatedWrapper = useRef(null)
  const isInViewWrapper = useInView(
    animatedWrapper, {
      once: true
    }
  )

  return (
    <AnimatePresence>
      <Section
        dataPosition={dataPosition}
        sectionClassName="relative"
      >
        <HeadingDivider
          background={dividerBackground ? true : undefined}
          icon={sectionIcon}
          patternBottom={dividerPattern ? urlFor(patternBottom.asset).url() : undefined}
          patternTop={dividerPattern ? urlFor(patternTop.asset).url() : undefined}
          sectionColor={addSectionColor && !dividerBackground ? sectionColor?.hex : "#74c197"}
          title={heading}
        />
        <InnerSection
          innerContentClass="relative overflow-hidden"
          sectionColor={addSectionColor ? sectionColor?.hex : undefined}
        >
          {!addSectionColor && sectionBackground && (
            <Image
              alt={`${title} region background image`}
              className="absolute top-0 left-0 w-full h-full object-cover"
              height={1080}
              loading="lazy"
              src={urlFor(sectionBackground.asset).url()}
              width={1920}
            />
          )}
          <motion.div
            animate={isInViewWrapper ? {
              opacity: 1,
              y: 0
            } : {}}
            initial={{
              opacity: 0,
              y: 100
            }}
            ref={animatedWrapper}
            transition={{
              delay: 0.2,
              duration: 0.3,
              ease: "easeInOut"
            }}
          >
            <Container>
              <p
                className={`relative mb-4 font-light ${styles.info}`}
              >
                {subText}
              </p>
              <Swiper
                autoplay={{
                  delay: 3500
                }}
                className={styles.slider}
                enabled
                loop
                modules={[Autoplay, Pagination]}
                onBeforeInit={(swiper) => {
                  swiperRef.current = swiper
                }}
                pagination={{
                  el: `[data-id="${id}"]`,
                  clickable: true
                }}
                slidesPerView="auto"
                speed={700}
              >
                {testimonials.map((testimonial: Testimonial) => (
                  <SwiperSlide
                    key={testimonial._id}
                  >
                    <TestimonialsCard
                      author={{
                        name: testimonial?.author,
                        role: testimonial?.role
                      }}
                      quote={testimonial.quote}
                    />
                  </SwiperSlide>
                ))}
                <div
                  className={`flex justify-center ${styles.pagination}`}
                  data-id={id}
                />
              </Swiper>
            </Container>
          </motion.div>
        </InnerSection>
      </Section>
    </AnimatePresence>
  )
}
