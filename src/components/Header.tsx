'use client'

import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'
import Boop from './Boop'
import Logo from './icons/Logo'
import MenuButton from './MenuButton'

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false)

  return (
    <header className='bg-background/95 sticky top-0 z-[99] backdrop-blur-3xl'>
      <nav className='container flex h-16 items-center justify-between gap-x-12'>
        <Boop>
          <Link href='/'>
            <Logo className='size-10 text-primary' />
          </Link>
        </Boop>

        <div
          data-nav-open={isMenuOpen}
          className={cn(
            'text-foreground-muted fixed top-16 z-[98] flex h-[calc(100dvh-64px)] w-full flex-col items-center gap-x-6 gap-y-8 bg-background pt-12 transition-all duration-500 md:static md:h-fit md:w-fit md:flex-row md:bg-transparent md:pt-0 lg:gap-x-12',
            isMenuOpen ? 'right-0' : '-right-[100vw]',
          )}
        >
          <NavLink href='/'>Home</NavLink>
          <NavLink href='#about'>About</NavLink>
          <NavLink href='#portfolio'>Portfolio</NavLink>
          <NavLink href='/blog'>Blog</NavLink>
          <NavLink href='/resources'>Resources</NavLink>
          <NavLink href='/contact'>Contact</NavLink>
        </div>

        <Boop className='md:hidden'>
          <MenuButton isOpen={isMenuOpen} setOpen={setMenuOpen} />
        </Boop>
      </nav>
    </header>
  )
}

export default Header

const NavLink: React.FC<{
  href: string
  children: React.ReactNode
}> = ({ children, href }) => {
  const pathname = usePathname()
  const isActive = pathname.startsWith(href)

  return (
    <Boop>
      <Link
        className={cn(
          'flex flex-col items-center transition-colors duration-300 will-change-transform after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-200 after:ease-linear hover:text-foreground hover:after:w-4 md:items-start',
          isActive && 'text-foreground after:w-4',
        )}
        href={href}
      >
        {children}
      </Link>
    </Boop>
  )
}
