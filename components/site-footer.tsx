import Link from "next/link"
import { NAV_LINKS } from "@/lib/nav"

const SiteFooter = () => {
  return (
    <footer className="border-t">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 py-6 sm:flex-row">
        <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Simple CRUD
        </p>
      </div>
    </footer>
  )
}

export default SiteFooter
