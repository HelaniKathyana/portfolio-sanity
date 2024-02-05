"use client"

import { SubmitPayload } from "@formspark/use-formspark"
import {
  SubmitHandler,
  useForm
} from "react-hook-form"
import React, {
  useEffect,
  useState
} from "react"

import { Sitewide } from "@/typings"

import styles from "@/regions/Contact/Contact.module.scss"

type Props = {
  sitewide: Sitewide
  subText: string
}

export default function Form({
  sitewide,
  subText
}: Props) {
  const [submitted, setSubmitted] = useState(false)
  const [clientRendered, setClientRendered] = useState(false)
  const [loading, setLoading] = useState(false)
  const { register, handleSubmit } = useForm()

  const FORMSPARK_ACTION_URL = "https://submit-form.com/JWRilWPLQ"

  const onSubmit: SubmitHandler<SubmitPayload> = async (data) => {
    setLoading(true)

    await fetch(FORMSPARK_ACTION_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        data
      })
    })
    setSubmitted(true)
    setLoading(false)
  }

  useEffect(() => {
    setClientRendered(true)
  }, [])

  if (submitted) {
    return (
      <div
        className={`flex w-full mt-7 mb-12 py-10 px-4 text-center ${styles.successBox}`}
      >
        <h3
          className="text-3xl font-bold pb-1.5"
        >
          {sitewide?.successFormHeading}
        </h3>
        <p>{sitewide?.successFormCopy}</p>
      </div>
    )
  }

  return (
    <>
      {clientRendered && (
        <>
          <p className={`text-center mb-7 font-light ${styles.copy}`}>
            {subText}
          </p>
          <form
            className={`flex w-full ${styles.form}`}
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className={`flex ${styles.group}`}>
              <input
                className={`mb-4 p-6 font-light rounded-lg ${styles.input}`}
                placeholder="Name"
                type="text"
                {...register("name")}
              />
              <input
                className={`mb-4 p-6 font-light rounded-lg ${styles.input}`}
                placeholder="Email"
                type="email"
                {...register("email")}
              />
            </div>
            <input
              className={`mb-4 p-6 font-light rounded-lg ${styles.input}`}
              placeholder="subject"
              type="text"
              {...register("subject")}
            />
            <textarea
              className={`mb-4 p-6 font-light rounded-lg ${styles.textarea}`}
              placeholder="Message"
              {...register("message")}
            />
            <button
              className={`p-4 font-light rounded-lg ${styles.button}`}
              disabled={loading}
              type="submit"
            >
              Submit
            </button>
          </form>
        </>
      )}
    </>
  )
}