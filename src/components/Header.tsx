'use client'

import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'
import Logo from './icons/Logo'
import MenuButton from './MenuButton'

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false)

  return (
    <header className='bg-background/95 fixed left-0 top-0 z-[9999] w-full backdrop-blur-[300px]'>
      <nav className='container flex h-16 items-center justify-between gap-x-12'>
        <Link href='/'>
          <Logo className='size-10 text-primary' />
        </Link>

        <div
          data-nav-open={isMenuOpen}
          style={{
            top: isMenuOpen ? '64px' : '-100vh',
            opacity: isMenuOpen ? 1 : 0,
          }}
          className={cn(
            'fixed inset-0 z-[999] flex h-screen flex-col items-center gap-x-6 gap-y-8 bg-background py-12 text-foreground-muted transition-all duration-300 ease-linear will-change-transform md:static md:h-fit md:w-fit md:flex-row md:bg-transparent md:pt-0 lg:gap-x-12',
          )}
        >
          <NavLink href='/'>Home</NavLink>
          <NavLink href='#about'>About</NavLink>
          <NavLink href='#portfolio'>Portfolio</NavLink>
          <NavLink href='/blog'>Blog</NavLink>
          <NavLink href='/resources'>Resources</NavLink>
          <NavLink href='/contact'>Contact</NavLink>

          {/* <Image
            src='/images/panda-2.svg'
            width={170}
            height={200}
            alt='panda'
            className='w-[140px] md:hidden'
          /> */}
        </div>

        <MenuButton
          isOpen={isMenuOpen}
          setOpen={() => setMenuOpen(p => !p)}
          className='md:hidden'
        />
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
    <Link
      className={cn(
        'flex flex-col items-center transition-colors duration-300 will-change-transform after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-200 after:ease-linear hover:text-foreground hover:after:w-4 md:items-start',
        isActive && 'text-foreground after:w-4',
      )}
      href={href}
    >
      {children}
    </Link>
  )
}
