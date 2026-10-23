import Image from "next/image"
import Link from "next/link"
import { ArrowRight, FilePlus2, Pencil, Trash2, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const FEATURES = [
  {
    icon: FilePlus2,
    title: "Create",
    description: "Add new users in seconds with a clean, validated form.",
    chip: "bg-blue-500/10 text-blue-500 dark:bg-blue-400/10 dark:text-blue-400",
  },
  {
    icon: Users,
    title: "Read",
    description: "Browse every user in a fast, responsive card grid.",
    chip: "bg-emerald-500/10 text-emerald-600 dark:bg-emerald-400/10 dark:text-emerald-400",
  },
  {
    icon: Pencil,
    title: "Update",
    description: "Edit names and emails inline with a handy dialog.",
    chip: "bg-amber-500/10 text-amber-600 dark:bg-amber-400/10 dark:text-amber-400",
  },
  {
    icon: Trash2,
    title: "Delete",
    description: "Remove stale records with one confident click.",
    chip: "bg-red-500/10 text-red-500 dark:bg-red-400/10 dark:text-red-400",
  },
]

export default function Page() {
  return (
    <div className="container mx-auto px-4">
      {/* Hero */}
      <section className="grid items-center gap-10 py-14 lg:grid-cols-2 lg:py-20">
        <div className="text-center lg:text-left">
          <span className="inline-flex items-center rounded-full border bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
            User management, simplified
          </span>
          <h1 className="mt-5 text-4xl font-bold tracking-tight md:text-5xl">
            Manage users the <span className="text-primary">simple</span> way
          </h1>
          <p className="mx-auto mt-5 max-w-md text-muted-foreground lg:mx-0">
            A lightweight client for your CRUD API. Create, browse, edit, and
            delete user records from a clean interface that works beautifully on
            any screen.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
            <Link href="/users">
              <Button size="lg">
                Manage Users
                <ArrowRight />
              </Button>
            </Link>
            <Link href="/users/adduser">
              <Button size="lg" variant="outline">
                Add a user
              </Button>
            </Link>
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-xl">
          <div
            aria-hidden
            className="absolute inset-6 rounded-full bg-indigo-500/20 blur-3xl"
          />
          <Image
            src="/hero-users.svg"
            alt="Illustration of a user management dashboard with add, edit, and delete actions"
            width={560}
            height={420}
            unoptimized
            priority
            className="relative w-full"
          />
        </div>
      </section>

      {/* Features */}
      <section className="py-14">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold md:text-3xl">Everything CRUD</h2>
          <p className="mt-3 text-muted-foreground">
            The four essentials, nothing more, nothing less.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((feature) => (
            <Card key={feature.title}>
              <CardHeader>
                <span
                  className={`mb-2 flex size-10 items-center justify-center rounded-lg ${feature.chip}`}
                >
                  <feature.icon className="size-5" />
                </span>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      {/* Closing CTA */}
      <section className="my-14 rounded-2xl bg-muted/50 px-6 py-14 text-center ring-1 ring-foreground/10">
        <h2 className="text-2xl font-bold md:text-3xl">
          Ready to tidy up your user list?
        </h2>
        <p className="mx-auto mt-3 max-w-md text-muted-foreground">
          Jump straight into the dashboard and see every record at a glance.
        </p>
        <Link href="/users">
          <Button size="lg" className="mt-6">
            Manage Users
            <ArrowRight />
          </Button>
        </Link>
      </section>
    </div>
  )
}
