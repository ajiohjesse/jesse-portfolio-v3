'use client'

import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Logo from './icons/Logo'

const Header = () => {
  return (
    <header className='sticky top-0 z-[99] bg-card shadow-2xl'>
      <nav className='container flex h-16 items-center justify-between gap-x-4'>
        <Logo className='size-10 text-primary' />

        <div>
          <div className='flex gap-x-6'>
            <NavLink href='/'>Home</NavLink>
            <NavLink href='/blog'>Blog</NavLink>
            <NavLink href='/resources'>Resources</NavLink>
          </div>
        </div>
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
        'hover:text-bright transition-all',
        isActive && 'text-bright underline',
      )}
      href={href}
    >
      {children}
    </Link>
  )
}
