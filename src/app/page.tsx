import Logo from '@/components/icons/Logo'
import ProductDesign from '@/components/icons/ProductDesign'
import ProjectMgt from '@/components/icons/ProjectMgt'
import UiUx from '@/components/icons/UiUx'
import WebDev from '@/components/icons/WebDev'
import Sparkles from '@/components/sparkles'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <article className='container'>
      <header>
        <nav className='flex h-16 items-center justify-between gap-x-4'>
          <Logo className='size-10 text-primary' />

          <div>
            <div className='flex gap-x-6'>
              <Link
                href='/'
                className='hover:text-bright transition-all hover:underline'
              >
                Home
              </Link>
              <Link
                href='/'
                className='hover:text-bright transition-all hover:underline'
              >
                Blog
              </Link>
              <Link
                href='/'
                className='hover:text-bright transition-all hover:underline'
              >
                Resources
              </Link>
            </div>
          </div>
        </nav>
      </header>
      <section className='relative border-b py-12'>
        <Sparkles className='mb-8 lg:absolute lg:-left-36'>
          <Image
            src='/images/panda-2.svg'
            width={180}
            height={180}
            alt='Jesse Profile'
            className='size-32 object-cover object-top'
          />
        </Sparkles>
        <h1 className='upper text-bright font-mono text-4xl font-bold uppercase tracking-tight xs:text-[2.5rem]'>
          Jesse Ajioh.
        </h1>
        <p className='mt-2 font-mono text-primary'>
          | Fullstack Web Developer.
        </p>
        <p className='text-muted text-pretty pt-4'>
          Hi, I&#39;m a full stack developer with a passion for building
          scalable and performant web applications. I&#39;m excited to bring my
          skills and experience to the table and help you achieve your goals.
        </p>

        <button className='mt-6 rounded bg-primary px-6 py-3 text-sm font-bold text-background'>
          Send Me A Message
        </button>
      </section>

      <section className='prose border-b py-12'>
        <h2 className='text-bright font-mono text-xl font-bold uppercase tracking-tight'>
          <span className='text-primary'>1.</span> About Me.
        </h2>

        <div className='flex flex-wrap gap-4'>
          <div data-id='border-card' className='flex-1'>
            <div
              data-id='border-card-inner'
              className='flex flex-col rounded bg-card p-4 shadow-2xl'
            >
              <span className='mb-2 font-mono text-3xl text-primary'>3+</span>
              <span className='w-max font-mono text-sm font-bold'>
                Years Experience
              </span>
            </div>
          </div>

          <div data-id='border-card' className='flex-1'>
            <div
              data-id='border-card-inner'
              className='flex flex-col rounded bg-card p-4 shadow-2xl'
            >
              <span className='mb-2 font-mono text-3xl text-primary'>10+</span>
              <span className='w-max font-mono text-sm font-bold'>
                Projects Completed
              </span>
            </div>
          </div>
        </div>

        <p>
          I have over <strong>3 years</strong> of experience in software
          development and have worked on a variety of projects, including web
          applications and APIs. I have a strong background in JavaScript,
          TypeScript, and React, and I am familiar with Node.js, MongoDB, and
          PostgreSQL. I have also experience with building dynamic user
          interfaces, optimizing performance, and implementing server-side
          logic.
        </p>
        <p>
          I am passionate about creating intuitive and engaging user experiences
          and can bring a unique perspective to any design process. I am always
          looking for new ways to improve and grow as a developer, and I am
          eager to take on new challenges and projects.
        </p>
      </section>

      <section className='prose border-b py-12'>
        <h2 className='text-bright font-mono text-xl font-bold uppercase tracking-tight'>
          <span className='text-primary'>2.</span> What I DO.
        </h2>

        <div className='relative grid gap-4 sm:grid-cols-2'>
          {SERVICES.map((service, index) => (
            <div data-id='border-card' key={index} className='shadow-2xl'>
              <div
                data-id='border-card-inner'
                className='flex h-[calc(100%-2px)] flex-1 flex-col rounded bg-card p-4 shadow-2xl md:p-6'
              >
                {service.icon}
                <h3 className='text-bright font-mono'>{service.name}</h3>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className='border-b py-12'>
        <h2 className='text-bright mb-5 font-mono text-xl font-bold uppercase tracking-tight'>
          <span className='text-primary'>3.</span> My Skills.
        </h2>

        <div className='flex flex-wrap gap-2'>
          {SKILLS.map((skill, index) => (
            <p
              key={index}
              className='text-bright min-w-max flex-1 select-none bg-card px-4 py-2 font-mono text-sm transition hover:bg-primary hover:text-background'
            >
              {skill}
            </p>
          ))}
        </div>
      </section>
    </article>
  )
}

const SERVICES = [
  {
    icon: <ProductDesign className='size-8 text-primary' />,
    name: 'Product Design',
    description:
      'I create well-researched, user-centered product designs that prioritize functionality and aesthetics.',
  },
  {
    icon: <UiUx className='size-8 text-primary' />,
    name: 'UI/UX Design',
    description:
      'I specialize in crafting intuitive and visually appealing user interfaces that enhance user experience. ',
  },
  {
    icon: <WebDev className='size-8 text-primary' />,
    name: 'Web Development',
    description:
      'I build responsive, fast, and reliable web applications tailored to meet client objectives.',
  },
  {
    icon: <ProjectMgt className='size-10 text-primary' />,
    name: 'Project Management',
    description:
      'With a strategic approach to project management, I guide projects from inception to completion.',
  },
]

const SKILLS = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React.js',
  'Next.js',
  'Astro',
  'Node',
  'Deno',
  'Express.js',
  'SQL',
  'Postgres',
  'MongoDB',
  'Git',
  'GitHub',
  'Figma',
  'Photoshop',
  'Adobe XD',
  'Illustrator',
  'Jira',
]
