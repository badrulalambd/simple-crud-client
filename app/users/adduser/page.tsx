"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, UserPlus } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { redirect } from "next/navigation"

const AddNewUser = () => {
  const handleAddNewUser = async (e) => {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)
    const newUser = Object.fromEntries(formData.entries())
    console.log("New User Data: ", newUser)

    const res = await fetch(`http://localhost:5000/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
    console.log("Response from server", res)

    const afterSubmit = await res.json()
    console.log("After submit: ", afterSubmit)
    if (afterSubmit.insertedId) {
      console.log("User added successfully!!!")
      redirect("/users")
    }
  }

  return (
    <div className="relative container mx-auto max-w-6xl px-4 py-10 md:py-14">
      <div
        aria-hidden
        className="absolute top-0 left-1/2 h-64 w-full max-w-3xl -translate-x-1/2 rounded-full bg-indigo-500/15 blur-3xl dark:bg-indigo-400/10"
      />

      <div className="relative">
        <Link
          href="/users"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft />
          Back to users
        </Link>

        <header className="mt-5">
          <span className="inline-flex items-center rounded-full border bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-500 dark:bg-blue-400/10 dark:text-blue-400">
            Create
          </span>
          <h1 className="mt-4 text-4xl font-bold tracking-tight">
            Add a new user
          </h1>
          <p className="mt-3 max-w-md text-muted-foreground">
            Create a record with a name and email. It shows up in your user list
            right away.
          </p>
        </header>

        <div className="mt-8 grid items-start gap-6 lg:grid-cols-[minmax(0,1fr)_320px]">
          <Card className="shadow-sm">
            <CardHeader>
              <span className="mb-2 flex size-10 items-center justify-center rounded-lg bg-blue-500/10 text-blue-500 dark:bg-blue-400/10 dark:text-blue-400">
                <UserPlus className="size-5" />
              </span>
              <CardTitle className="text-lg">User details</CardTitle>
              <CardDescription>
                Fill in the fields below, then submit to save the record.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleAddNewUser}>
                <FieldGroup>
                  <Field>
                    <FieldLabel htmlFor="fieldgroup-name">Name</FieldLabel>
                    <Input
                      name="name"
                      id="fieldgroup-name"
                      placeholder="Jordan Lee"
                    />
                  </Field>
                  <Field>
                    <FieldLabel htmlFor="fieldgroup-email">Email</FieldLabel>
                    <Input
                      name="email"
                      id="fieldgroup-email"
                      type="email"
                      placeholder="name@example.com"
                    />
                    <FieldDescription>
                      We&apos;ll send updates to this address.
                    </FieldDescription>
                  </Field>
                  <Field orientation="horizontal" className="justify-end">
                    <Button type="reset" variant="outline">
                      Reset
                    </Button>
                    <Button type="submit">Add User</Button>
                  </Field>
                </FieldGroup>
              </form>
            </CardContent>
          </Card>

          <aside className="flex flex-col gap-6">
            <Card className="overflow-hidden p-0">
              <Image
                src="/hero-users.svg"
                alt="Illustration of a user management dashboard with add, edit, and delete actions"
                width={320}
                height={240}
                unoptimized
                className="w-full rounded-t-xl bg-muted/50 p-4"
              />
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Before you add</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="flex flex-col gap-3 text-sm text-muted-foreground">
                  <li className="flex gap-2">
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-blue-500" />
                    The record needs a name and an email — that&apos;s all the
                    API stores.
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-blue-500" />
                    Made a mistake? Edit it later from the user list with the
                    Edit Detail dialog.
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-blue-500" />
                    After submitting you&apos;ll land back on the users page to
                    see the new card.
                  </li>
                </ul>
              </CardContent>
            </Card>
          </aside>
        </div>
      </div>
    </div>
  )
}

export default AddNewUser
