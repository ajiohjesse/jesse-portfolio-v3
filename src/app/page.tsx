import Boop from '@/components/Boop'
import Github from '@/components/icons/Github'
import LinkedIn from '@/components/icons/LinkedIn'
import Mail from '@/components/icons/Mail'
// import StarBadge from '@/components/icons/StarBadge'
import Twitter from '@/components/icons/Twitter'
import Sparkles from '@/components/sparkles'
import Image from 'next/image'

export default function Home() {
  return (
    <section className='container flex flex-col-reverse items-center gap-y-4 py-8 sm:grid sm:grid-cols-2 md:py-16'>
      <div className='flex max-w-[350px] flex-col gap-y-8'>
        <div className='flex gap-x-4'>
          <div className='flex w-full flex-col items-center justify-center sm:items-start'>
            <h1 className='font-heading text-[2.5rem] uppercase text-primary sm:text-5xl lg:text-6xl'>
              Jesse Ajioh
            </h1>
            <p className='font-mono text-foreground-muted sm:mt-2 sm:text-lg'>
              Fullstack Developer
            </p>
          </div>
        </div>

        <div className='flex w-full justify-center gap-x-8 sm:justify-start'>
          {SOCIALS.map(({ url, icon: Icon, label }) => (
            <a
              key={label}
              href={url}
              target='_blank'
              rel='norefer'
              className='text-primary'
            >
              <Boop>
                <Icon className='size-6' />
                <span className='sr-only'>{label}</span>
              </Boop>
            </a>
          ))}
        </div>

        <Boop
          className='w-full max-w-[350px] lg:max-w-full'
          config={{ scale: 1.01 }}
        >
          <button
            type='button'
            className='inner flex h-14 w-full items-center justify-center rounded-full bg-primary text-sm font-bold text-background'
          >
            Let&#39;s Connect
          </button>
        </Boop>
      </div>

      <Sparkles className='sm:justify-self-center'>
        <Image
          src='/images/panda.svg'
          width={170}
          height={200}
          alt='panda'
          className='sm:w-[220px] md:w-[260px] lg:w-[300px]'
        />
      </Sparkles>
    </section>
  )
}

const SOCIALS = [
  {
    url: '/',
    icon: Github,
    label: 'Github',
  },
  {
    url: '/',
    icon: LinkedIn,
    label: 'LinkedIn',
  },
  {
    url: '/',
    icon: Twitter,
    label: 'Twitter',
  },
  {
    url: '/',
    icon: Mail,
    label: 'Mail',
  },
]
