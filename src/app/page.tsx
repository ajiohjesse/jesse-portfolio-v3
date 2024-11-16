'use client'

import Boop from '@/components/Boop'
import MenuButton from '@/components/MenuButton'
import Sparkles from '@/components/sparkles'
import Image from 'next/image'
import { useState } from 'react'

export default function Home() {
  const [isOpen, setOpen] = useState(false)

  return (
    <div className='container'>
      <div className='grid h-screen place-items-center'>
        <Boop config={{ scale: 1.1 }}>
          <MenuButton isOpen={isOpen} setOpen={setOpen} />
        </Boop>

        <Boop config={{ scale: 1.05 }}>
          <Sparkles>
            <Image
              src='/images/panda.svg'
              width={200}
              height={200}
              alt='panda'
            />
          </Sparkles>
        </Boop>
      </div>
    </div>
  )
}
