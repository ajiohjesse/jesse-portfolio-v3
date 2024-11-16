import Boop from '@/components/Boop'
import Sparkles from '@/components/sparkles'
import Image from 'next/image'

export default function Home() {
  return (
    <div className='container'>
      <div className='grid h-screen place-items-center'>
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
