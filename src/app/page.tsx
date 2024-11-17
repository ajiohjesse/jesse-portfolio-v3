import Boop from '@/components/Boop'
import Github from '@/components/icons/Github'
import LinkedIn from '@/components/icons/LinkedIn'
import Mail from '@/components/icons/Mail'
import StarBadge from '@/components/icons/StarBadge'
import Twitter from '@/components/icons/Twitter'
import Sparkles from '@/components/sparkles'
import Image from 'next/image'

export default function Home() {
  return (
    <section className='container flex flex-col-reverse items-center gap-y-4 py-8 md:grid md:grid-cols-2 md:py-16'>
      <div className='flex flex-col gap-y-10 md:items-center lg:gap-y-12'>
        <div className='flex items-center gap-x-4'>
          <div className='relative size-[90px] rounded-full border-2 border-primary lg:size-[120px]'>
            <Image
              alt='Jesse Ajioh'
              src='/images/jesse-profile.jpg'
              className='h-full w-full rounded-full object-cover object-top'
              width={300}
              height={300}
            />
            <StarBadge className='absolute -right-2 top-0 size-6 lg:right-0' />
          </div>
          <div>
            <h1 className='font-heading text-3xl uppercase tracking-wide text-primary xs:text-4xl lg:text-5xl'>
              Jesse Ajioh.
            </h1>
            <p className='mt-1 font-decorative text-sm text-foreground-muted lg:mt-2 lg:text-[1.375rem]'>
              Fullstack Developer
            </p>
          </div>
        </div>

        <div className='flex w-full max-w-[350px] lg:max-w-full'>
          {SOCIALS.map(({ url, icon: Icon, label }) => (
            <a
              key={label}
              href={url}
              target='_blank'
              rel='norefer'
              className='flex flex-1 items-center justify-center border-r border-primary-muted px-6 text-primary last:border-none lg:px-8'
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
          config={{ rotation: 2 }}
        >
          <button
            type='button'
            className='inner flex h-14 w-full items-center justify-center rounded-full bg-primary text-sm font-bold text-background'
          >
            Let&#39;s Connect
          </button>
        </Boop>
      </div>

      <Sparkles className='md:justify-self-center'>
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
