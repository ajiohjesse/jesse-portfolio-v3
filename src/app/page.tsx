import Boop from '@/components/Boop'
import Github from '@/components/icons/Github'
import LinkedIn from '@/components/icons/LinkedIn'
import Mail from '@/components/icons/Mail'
import StarBadge from '@/components/icons/StarBadge'
import Twitter from '@/components/icons/twitter'
import Sparkles from '@/components/sparkles'
import Image from 'next/image'

export default function Home() {
  return (
    <section className='container flex flex-col-reverse items-center gap-y-4 py-12 sm:grid sm:grid-cols-2'>
      <div className='flex flex-col items-center gap-y-6'>
        <div className='flex items-center gap-x-4'>
          <div className='relative size-[90px] rounded-full border-2 border-primary'>
            <StarBadge className='absolute -right-2 size-6' />
          </div>
          <div>
            <h1 className='font-heading text-4xl tracking-wide text-primary'>
              Jesse Ajioh.
            </h1>
            <p className='text-foreground-muted mt-1 font-decorative text-sm'>
              Fullstack Developer
            </p>
          </div>
        </div>

        <div className='flex gap-x-6'>
          {SOCIALS.map(({ url, icon: Icon, label }) => (
            <Boop key={label} config={{ rotation: 15, scale: 0.95 }}>
              <a
                href={url}
                target='_blank'
                rel='norefer'
                className='inline-block rounded-full border border-primary-muted bg-card p-2 text-primary'
              >
                <Icon className='size-6' />
                <span className='sr-only'>{label}</span>
              </a>
            </Boop>
          ))}
        </div>

        <button
          type='button'
          className='inner flex h-16 w-full items-center justify-center rounded-full bg-primary font-bold text-background'
        >
          Let&#39;s Connect
        </button>
      </div>

      <Sparkles className='sm:justify-self-center'>
        <Image
          src='/images/panda.svg'
          width={170}
          height={200}
          alt='panda'
          className='sm:w-[220px]'
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
