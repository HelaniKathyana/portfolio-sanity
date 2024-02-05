import Image from "next/image"
import React from "react"

import * as HeroIcon from "@heroicons/react/24/solid"

import Container from "@/components/App/Container/Container.component"

import styles from "./HeadingDivider.module.scss"

type HeadingDividerProps = {
  background?: boolean
  icon?: string
  patternBottom?: string
  patternTop?: string
  sectionColor?: string
  title: string
}

const DynamicHeroIcon = ({ icon }: { icon: string }) => {
  const TheIcon = HeroIcon[icon as keyof typeof HeroIcon];

  return (
    <TheIcon
      aria-hidden="true"
      className={`absolute w-7 h-8 left-1/2 z-20 ${styles.dividerIcon}`}
    />
  )
}

export default function HeadingDivider({
  background,
  icon,
  patternBottom,
  patternTop,
  sectionColor,
  title
}: HeadingDividerProps) {
  return (
    <>
      {patternTop && (
        <Image
          alt="Top pattern divider"
          className={`absolute w-full top-0 left-0 ${styles.dividerImage}`}
          height={32}
          loading="lazy"
          src={patternTop}
          width={1400}
        />
      )}
      <div
        className={`relative ${background ? `pt-12 pb-8 ${styles.dividerBgWrapper}` : ""}`.trim()}
      >
        <Container>
          <h2 className={`font-medium ${styles.dividerHeading}`}>
            {title}
            <span className="block w-64">
              <span
                className={`relative inline-block text-center w-full h-1 ${styles.dividerLine}`}
              >
                {icon ? (
                  <DynamicHeroIcon
                    icon={icon}
                  />
                ) : (
                  <span
                    className={`absolute w-6 h-6 left-1/2 rounded-full z-20 ${styles.placeholderIcon}`}
                  />
                )}
                <span
                  className={`absolute w-11 h-7 left-1/2 z-10 ${styles.dividerBg}`}
                  style={{
                    backgroundColor: sectionColor
                  }}
                />
              </span>
            </span>
          </h2>
        </Container>
        {background && (
          <span className={`absolute w-0 h-0 left-1/2 z-10 ${styles.triangle}`} />
        )}
      </div>
      {patternBottom && (
        <Image
          alt="Bottom pattern divider"
          className={`absolute w-full bottom-0 left-0 ${styles.dividerImage}`}
          height={32}
          loading="lazy"
          src={patternBottom}
          width={1400}
        />
      )}
    </>
  )
}
