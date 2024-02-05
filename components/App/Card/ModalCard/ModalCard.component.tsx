"use client"

import Link from "next/link"
import * as Dialog from "@radix-ui/react-dialog"
import React from "react"

import { XMarkIcon } from "@heroicons/react/24/solid"

import styles from "./ModalCard.module.scss"

type ModalCardProps = {
  backgroundText: string
  futureUseText?: string
  modalLink: string
  modalTitle: string,
  skills?: string[]
}

export default function ModalCard({
  backgroundText,
  futureUseText,
  modalLink,
  modalTitle,
  skills = []
}: ModalCardProps) {
  const formattedSkills = skills.sort().join(", ").replace(/, ([^,]*)$/, " and $1")

  return (
    <Dialog.Portal>
      <Dialog.Overlay
        className={`absolute w-full h-full top-0 left-0 z-40 ${styles.overlay}`}
      />
      <Dialog.Content
        className={`fixed w-full overflow-y-scroll z-50 ${styles.popup}`}
      >
        <div
          className={`flex relative items-center justify-between p-4 ${styles.header}`}
        >
          <Dialog.Title
            className={`capitalize ${styles.title}`}
          >
            {modalTitle}
          </Dialog.Title>
          <Dialog.Close asChild>
            <button aria-label="Close">
              <XMarkIcon
                className={`w-8 h-8 ${styles.close}`}
              />
            </button>
          </Dialog.Close>
        </div>
        <div className="p-4">
          {backgroundText && (
            <>
              <h4 className={`font-medium ${styles.heading}`}>
                Background:
              </h4>
              <p className={`font-light ${styles.copy}`}>
                {backgroundText}
              </p>
            </>
          )}

          {futureUseText && (
            <>
              <h4 className={`font-medium ${styles.heading}`}>
                Future Use:
              </h4>
              <p className={`font-light ${styles.copy}`}>
                Live-as-you-type previewing of draft CMS content.
              </p>
            </>
          )}

          {skills.length > 0 && (
            <>
              <h4 className={`font-medium ${styles.heading}`}>
                Technologies Used:
              </h4>
              <p className={`font-light ${styles.copy}`}>
                {formattedSkills}
              </p>
            </>
          )}
          <Link
            className={`block w-fit uppercase py-2.5 px-7 font-bold rounded-lg ${styles.link}`}
            href={modalLink}
            rel="noopener"
            target="_blank"
          >
            View Website
          </Link>
        </div>
      </Dialog.Content>
    </Dialog.Portal>
  )
}
