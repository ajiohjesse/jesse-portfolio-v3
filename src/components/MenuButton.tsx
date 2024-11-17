'use client'

import { cn } from '@/lib/utils'
import { Dispatch, SetStateAction } from 'react'

interface Props {
  isOpen: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
  className?: string
}

const MenuButton: React.FC<Props> = ({ isOpen, setOpen, className }) => {
  return (
    <button
      type='button'
      onClick={() => setOpen(p => !p)}
      className={cn(
        'flex size-[24px] flex-col items-center justify-center',
        className,
      )}
    >
      <span
        aria-hidden
        style={{
          transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
          top: isOpen ? '3px' : '0px',
          width: isOpen ? '24px' : '16px',
        }}
        className={cn(
          'relative block h-[2px] w-[16px] self-start rounded-full bg-foreground transition-all duration-300 will-change-transform',
        )}
      ></span>
      <span
        aria-hidden
        style={{
          transform: isOpen ? 'rotate(-45deg)' : 'rotate(0deg)',
          top: isOpen ? '-3px' : '0px',
          width: isOpen ? '24px' : '20px',
        }}
        className={cn(
          'relative my-[4px] block h-[2px] w-[20px] self-start rounded-full bg-foreground transition-all duration-300 will-change-transform',
        )}
      ></span>
      <span
        aria-hidden
        style={{
          width: isOpen ? '0px' : '24px',
        }}
        className={cn(
          'flex h-[2px] items-center justify-center rounded-full bg-foreground transition-all duration-100 will-change-transform',
        )}
      ></span>
      <span className='sr-only'>Toggle Navigation Menu</span>
    </button>
  )
}

export default MenuButton
