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
        className={cn(
          'relative block h-[2px] w-[16px] self-start rounded-full bg-foreground transition-all duration-300',
          isOpen && 'top-[3px] w-[24px] rotate-45',
        )}
      ></span>
      <span
        aria-hidden
        className={cn(
          'relative mt-[4px] block h-[2px] w-[20px] self-start rounded-full bg-foreground transition-all duration-300',
          isOpen && 'bottom-[3px] w-[24px] -rotate-45',
        )}
      ></span>
      <span
        aria-hidden
        className={cn(
          'flex h-[2px] items-center justify-center rounded-full bg-foreground transition-all duration-300',
          isOpen ? 'w-[0px]' : 'mt-[4px] w-[24px]',
        )}
      ></span>
      <span className='sr-only'>Toggle Navigation Menu</span>
    </button>
  )
}

export default MenuButton
