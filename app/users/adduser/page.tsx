"use client"

import { Button } from "@/components/ui/button"
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
    <div className="container mx-auto max-w-lg px-4 py-10">
      <form onSubmit={handleAddNewUser}>
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="fieldgroup-name">Name</FieldLabel>
            <Input name="name" id="fieldgroup-name" placeholder="Jordan Lee" />
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
          <Field orientation="horizontal">
            <Button type="reset" variant="outline">
              Reset
            </Button>
            <Button type="submit">Add User</Button>
          </Field>
        </FieldGroup>
      </form>
    </div>
  )
}

export default AddNewUser
