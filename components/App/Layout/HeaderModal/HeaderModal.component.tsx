"use client"

import * as Dialog from "@radix-ui/react-dialog"
import { motion } from "framer-motion"
import React, { useState } from "react"

import { SectionWrapper } from "@/typings"

import HeaderMenu from "@/components/App/Layout/HeaderMenu/HeaderMenu.component"

import styles from "./HeaderModal.module.scss"

type Props = {
  sections?: SectionWrapper[]
}

export default function HeaderModal({
  sections
}: Props) {
  const [open, setOpen] = useState(false)

  const openChange = () => {
    setOpen(!open)
  }

  return (
    <Dialog.Root
      open={open}
      onOpenChange={openChange}
    >
      <Dialog.Trigger asChild>
        <button
          className={`flex items-center ${styles.burgerMenu}`}
        >
          <span
            className={`flex relative mx-auto h-5 ${styles.menuIcon}`}
          >
            <span className="absolute top-1/2 h-0.5" />
          </span>
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay
          className={`fixed top-0 h-screen w-full ${styles.overlay}`}
        />
        <Dialog.Content
          className={`fixed flex top-0 right-0 h-screen z-50 ${styles.content}`}
        >
          <HeaderMenu
            sections={sections}
            setOpen={setOpen}
          />
          <Dialog.Close asChild>
            <button
              aria-label="Close"
              className={`absolute top-1 right-4 ${styles.closeMenu}`}
            >
              <motion.span
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className={`flex relative mx-auto h-9 w-10 ${styles.menuIcon}`}
                initial={{ opacity: 0 }}
                transition={{ delay: 0.4, duration: 0.3, ease: "easeInOut" }}
              />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
