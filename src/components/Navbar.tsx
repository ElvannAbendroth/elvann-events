'use client'
import Image from 'next/image'
import { FC } from 'react'
import { Button } from './ui/button'
import { Icons } from './Icons'
import Link from 'next/link'

const scrollTo = (elementId: string) => {
  const element = document.getElementById(elementId)
  element?.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' })
}

interface NavbarProps {}

export const Navbar: FC<NavbarProps> = () => {
  return (
    <nav className="flex items-center bg-background py-3 px-4 fixed top-0 left-0 right-0 justify-between">
      <Link href="/">
        <Image
          src="/logo-sigil-dark.png"
          width={50}
          height={50}
          priority={true}
          className="object-cover h-10 w-10"
          sizes="25vw"
          alt="Elvann Logo"
        />
      </Link>

      <div id="nav-pages" className="flex gap-2">
        <Link href="/about">
          <Button variant="link">About</Button>
        </Link>
        <Link href="/booking">
          <Button variant="link">Booking</Button>
        </Link>
        <Link href="/repertoire">
          <Button variant="link">Repertoire</Button>
        </Link>
        <Link href="/repertoire">
          <Button variant="link">F.A.Q</Button>
        </Link>
        <Link href="/" onClick={() => scrollTo('hr-contact')}>
          <Button variant="link">Contact</Button>
        </Link>
      </div>

      <div id="nav-cta">
        <Button size="sm" onClick={() => scrollTo('contact-section')}>
          <Icons.calendar className="mr-2 h-4 w-4" /> Book now!
        </Button>
      </div>
    </nav>
  )
}
