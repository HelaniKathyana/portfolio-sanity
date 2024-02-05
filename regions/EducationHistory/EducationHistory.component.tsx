"use client"

import Image from "next/image"
import {
  AnimatePresence,
  motion,
  useInView
} from "framer-motion"
import React, {
  useEffect,
  useId,
  useRef,
  useState
} from "react"
import {
  Navigation,
  Pagination
} from "swiper/modules"
import {
  Swiper,
  SwiperSlide
} from "swiper/react"

import {
  BaseImage,
  Color,
  Education
} from "@/typings"
import { urlFor } from "@/sanity"

import { ChevronLeftIcon } from "@heroicons/react/24/solid"
import { ChevronRightIcon } from "@heroicons/react/24/solid"

import Container from "@/components/App/Container/Container.component"
import EducationCard from "@/components/App/Card/EducationCard/EducationCard.component"
import HeadingDivider from "@/components/App/HeadingDivider/HeadingDivider.component"
import InnerSection from "@/components/App/InnerSection/InnerSection.component"
import Section from "@/components/App/Section/Section.component"

// eslint-disable-next-line import/no-unresolved, import/extensions
import "swiper/css"

import styles from "./EducationHistory.module.scss"

import type SwiperCore from "swiper"

type Props = {
  addSectionColor: boolean
  displayInNav: boolean
  dividerBackground: boolean
  dividerPattern: boolean
  educations: Education[]
  heading: string
  menuUrl: string
  patternBottom: BaseImage
  patternTop: BaseImage
  sectionBackground: BaseImage
  sectionColor?: Color
  sectionIcon?: string
  title: string
}

export default function EducationHistory({
  addSectionColor,
  displayInNav,
  dividerBackground,
  dividerPattern,
  educations,
  heading,
  menuUrl,
  patternBottom,
  patternTop,
  sectionBackground,
  sectionColor,
  sectionIcon,
  title
}: Props) {
  const dataPosition = displayInNav && menuUrl.length > 0 ? menuUrl : null

  const id = useId()
  const swiperRef = useRef<SwiperCore>()

  const [activeSlideIndex, setActiveSlideIndex] = useState(0)

  const animatedWrapper = useRef(null)
  const isInViewWrapper = useInView(
    animatedWrapper, {
      once: true
    }
  )

  const renderNextButton = () => {
    return (
      <button
        aria-label="Right Slider Arrow Icon"
        onClick={() => swiperRef.current?.slideNext()}
      >
        <ChevronRightIcon
          className={`w-16 h-16 ${styles.button}`}
        />
      </button>
    )
  }

  const renderPrevButton = () => {
    return (
      <button
        aria-label="Left Slider Arrow Icon"
        onClick={() => swiperRef.current?.slidePrev()}
      >
        <ChevronLeftIcon
          className={`w-16 h-16 ${styles.button}`}
        />
      </button>
    )
  }

  useEffect(() => {
    const onSlideChange = () => {
      setActiveSlideIndex(swiperRef.current?.realIndex || 0)
    }

    swiperRef.current?.on("slideChange", onSlideChange)

    return () => {
      swiperRef.current?.off("slideChange", onSlideChange)
    }
  }, [])

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
              x: 0
            } : {}}
            initial={{
              opacity: 0,
              x: -100
            }}
            ref={animatedWrapper}
            transition={{
              duration: 0.8,
              ease: "easeInOut"
            }}
          >
            <Container>
              <Swiper
                autoHeight
                className={styles.slider}
                enabled
                loop
                modules={[
                  Navigation,
                  Pagination
                ]}
                onBeforeInit={(swiper) => {
                  swiperRef.current = swiper
                }}
                pagination={false}
                slidesPerView="auto"
                speed={700}
              >
                <div
                  className="flex justify-between items-center"
                >
                  {renderPrevButton()}
                  <div
                    className={`flex ${styles.pagination}`}
                    data-id={id}
                  >
                    {educations.map((education: Education, index: number) => (
                      <span
                        key={education._id}
                        className={styles.paginationWrapper}
                      >
                        <span
                          className={`flex rounded-full ${styles.paginationDot} ${
                            index === activeSlideIndex ? `relative z-10 ${styles.paginationActive}` : ""
                          }`.trim()}
                          style={{
                            backgroundColor: `${education.brandColor.hex}`
                          }}
                          onClick={() => {
                            swiperRef.current?.slideTo(index)
                          }}
                        />
                      </span>
                    ))}
                  </div>
                  {renderNextButton()}
                </div>
                {educations.map((education: Education) => (
                  <SwiperSlide
                    className={styles.slide}
                    key={education._id}
                  >
                    <EducationCard
                      boxImage={urlFor(education?.companyIcon).url()}
                      brandColor={education?.brandColor.hex}
                      buttonPDF={education?.certificateUrl}
                      companyName={education?.companyName}
                      courseTitle={education?.title}
                      date={{
                        current: education?.currentlyStudying,
                        endDate: !education.currentlyStudying && education?.dateEnded,
                        startDate: education?.dateStarted
                      }}
                      languages={education?.languages || undefined}
                      location={education?.location}
                      mainImage={urlFor(education?.buildingImage).url()}
                      modules={education?.modules}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </Container>
          </motion.div>
        </InnerSection>
      </Section>
    </AnimatePresence>
  )
}
