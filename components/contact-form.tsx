"use client"

import * as React from "react"

import { Button } from "@/components/ui/button"

type FormState = {
  name: string
  email: string
  message: string
}

const initialState: FormState = { name: "", email: "", message: "" }

export function ContactForm() {
  const [values, setValues] = React.useState<FormState>(initialState)
  const [error, setError] = React.useState("")
  const [success, setSuccess] = React.useState("")

  function onChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = event.target
    setValues((prev) => ({ ...prev, [name]: value }))
  }

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setError("")
    setSuccess("")
    if (!values.name.trim() || !values.email.trim() || !values.message.trim()) {
      setError("Please fill out all fields.")
      return
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      setError("Please enter a valid email address.")
      return
    }
    setSuccess("Thanks! Your message has been sent successfully.")
    setValues(initialState)
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4 rounded-2xl border bg-card p-6 shadow-sm">
      <div className="space-y-1">
        <label htmlFor="name" className="text-sm font-medium">
          Name
        </label>
        <input
          id="name"
          name="name"
          value={values.name}
          onChange={onChange}
          className="h-10 w-full rounded-lg border bg-background px-3 text-sm outline-none focus:ring-2 focus:ring-primary/30"
        />
      </div>
      <div className="space-y-1">
        <label htmlFor="email" className="text-sm font-medium">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={values.email}
          onChange={onChange}
          className="h-10 w-full rounded-lg border bg-background px-3 text-sm outline-none focus:ring-2 focus:ring-primary/30"
        />
      </div>
      <div className="space-y-1">
        <label htmlFor="message" className="text-sm font-medium">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={values.message}
          onChange={onChange}
          rows={4}
          className="w-full rounded-lg border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary/30"
        />
      </div>
      {error ? <p className="text-sm text-destructive">{error}</p> : null}
      {success ? (
        <p className="rounded-lg border border-green-500/20 bg-green-500/10 px-3 py-2 text-sm text-green-700 dark:text-green-400">
          {success}
        </p>
      ) : null}
      <Button type="submit" size="lg" className="w-full">
        Send Message
      </Button>
    </form>
  )
}
