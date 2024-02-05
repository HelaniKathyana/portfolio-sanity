"use client"

import * as NavigationMenu from "@radix-ui/react-navigation-menu"
import React from "react"

import {
  SectionWrapper,
  Sitewide
} from "@/typings"

import useSticky from "@/hooks/useSticky"

import Container from "@/components/App/Container/Container.component"
import HeaderLogo from "@/components/App/Layout/HeaderLogo/HeaderLogo.component"
import HeaderMenu from "@/components/App/Layout/HeaderMenu/HeaderMenu.component"
import HeaderModal from "@/components/App/Layout/HeaderModal/HeaderModal.component"

import styles from "./Header.module.scss"

type Props = {
  sections?: SectionWrapper[]
  sitewide: Sitewide
}

export default function Header({
  sections,
  sitewide
}: Props) {
  const { sticky, stickyRef } = useSticky()

  return (
    <header
      className={`w-full top-0 z-50 ${styles.header} ${sticky ? styles.sticky : ""}`.trim()}
      ref={stickyRef}
    >
      <NavigationMenu.Root>
        <Container
          containerClassName="flex items-center justify-between"
        >
          <HeaderLogo
            sitewide={sitewide}
          />
          <HeaderMenu
            sections={sections}
          />
          <HeaderModal
            sections={sections}
          />
        </Container>
      </NavigationMenu.Root>
    </header>
  )
}
