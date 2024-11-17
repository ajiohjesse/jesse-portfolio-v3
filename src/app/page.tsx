import Github from '@/components/icons/Github'
import LinkedIn from '@/components/icons/LinkedIn'
import Mail from '@/components/icons/Mail'
// import StarBadge from '@/components/icons/StarBadge'
import Twitter from '@/components/icons/Twitter'
import Image from 'next/image'

export default function Home() {
  return (
    <section className='container flex flex-col-reverse items-center gap-y-4 py-8 sm:grid sm:grid-cols-2 md:py-16'>
      <div className='flex flex-col gap-y-6 lg:gap-y-8'>
        <div className='flex items-center gap-4 lg:flex-col lg:items-start'>
          <Image
            src='/images/jesse-profile.png'
            width={180}
            height={180}
            alt='Jesse Profile'
            className='size-20 lg:size-32'
          />
          <div className='flex w-full flex-col'>
            <h1 className='font-heading text-3xl uppercase text-primary lg:text-6xl'>
              Jesse Ajioh
            </h1>
            <p className='font-decorative text-xs text-foreground-muted sm:mt-2 sm:text-lg lg:text-2xl'>
              Fullstack Developer
            </p>
          </div>
        </div>

        <div className='flex w-full justify-center gap-x-6 sm:justify-start'>
          {SOCIALS.map(({ url, icon: Icon, label }) => (
            <a
              key={label}
              href={url}
              target='_blank'
              rel='norefer'
              className='rounded-full border border-primary-muted bg-card p-3 text-primary lg:p-4'
            >
              <Icon className='size-4 lg:size-5' />
              <span className='sr-only'>{label}</span>
            </a>
          ))}
        </div>

        <button
          type='button'
          className='inner flex h-14 w-full max-w-[350px] items-center justify-center rounded-full bg-primary text-sm font-bold text-background lg:max-w-full'
        >
          Let&#39;s Connect
        </button>
      </div>

      <Image
        src='/images/panda.svg'
        width={170}
        height={200}
        alt='panda'
        className='sm:w-[220px] sm:justify-self-center md:w-[260px] lg:w-[300px]'
      />
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
