'use client'

import Link from "next/link"
import { usePathname } from "next/navigation";
import clsx from "clsx";

const links = [
  { name: "Quote Generator", href: "/" },
  {
    name: "Saved Quotes",
    href: "/savedQuotes",
  }
];

export default function NavLink() {
  const pathname = usePathname();

  return (
    <nav className="flex justify-center w-full items-center gap-6">
      {links.map((link) => {
        return (
          <Link 
            key={link.href} 
            href={link.href}
            className={clsx(
              "flex h-[48px] items-center justify-center gap-2 rounded-md p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3",
              {
                "bg-sky-100 text-blue-600": pathname === link.href,
              }
            )}
          >
            <p>{link.name}</p>
          </Link>
        )
      })}
    </nav>
  )
}