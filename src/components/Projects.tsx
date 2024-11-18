import guessACard from '@/assets/images/guess-a-card.webp'
import incognito from '@/assets/images/incognito.webp'
import Image, { StaticImageData } from 'next/image'
import ExternalArrow from './icons/ExternalArrow'
import Github from './icons/Github'
import Slider from './Slider'
import Sparkles from './sparkles'

const Projects = () => {
  return (
    <section className='border-b py-12'>
      <h2 className='text-bright mb-5 font-mono text-xl font-bold uppercase tracking-tight'>
        <span className='text-primary'>4.</span> Side Projects.
      </h2>

      <div className='pb-12'>
        <Slider>
          {PROJECTS.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </Slider>
      </div>
    </section>
  )
}

export default Projects

interface ProjectCardProps {
  name: string
  image: string | StaticImageData
  description: string
  tags: string[]
  githubUrl: string
  previewUrl: string
}

const ProjectCard = (props: ProjectCardProps) => {
  const { name, image, description, tags, githubUrl, previewUrl } = props

  return (
    <div className='grid h-full rounded bg-card p-4'>
      <Image
        src={image}
        alt={name}
        width={1897}
        height={1198}
        className='h-[160px] w-full rounded object-cover object-top'
      />
      <Sparkles className='mt-6'>
        <h3 className='text-bright line-clamp-[2] font-mono'>{name}</h3>
      </Sparkles>

      <p className='mb-6 line-clamp-4 text-sm'>{description}</p>

      <div className='flex flex-wrap gap-x-4 gap-y-2 border-b border-slate-700 pb-4'>
        {tags.map((tag, index) => (
          <span key={index} className='font-mono text-xs text-primary'>
            {tag}
          </span>
        ))}
      </div>

      <div className='mt-4 flex justify-end gap-6'>
        <a
          href={githubUrl}
          target='_blank'
          rel='noreferrer'
          title='View on GitHub'
        >
          <Github className='size-6 transition-colors hover:text-primary' />
          <span className='sr-only'>View on GitHub</span>
        </a>
        <a
          href={previewUrl}
          target='_blank'
          rel='noreferrer'
          title='View Preview'
        >
          <ExternalArrow className='size-6 transition-colors hover:text-primary' />
          <span className='sr-only'>View Preview</span>
        </a>
      </div>
    </div>
  )
}

const PROJECTS: ProjectCardProps[] = [
  {
    name: 'Guess A Card Game',
    image: guessACard,
    description:
      'Select a card and guess its matching pair from a list of hidden cards. The goal is to guess all matching cards until every hidden card is open.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    githubUrl: 'https://github.com/jesse-ai/jesse-portfolio-v3',
    previewUrl: '/images/jesse-portfolio.png',
  },
  {
    name: 'Incognito',
    image: incognito,
    description:
      'An anonymous messaging app that allows users to send messages to each other without revealing their identity.',
    tags: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'MongoDB'],
    githubUrl: 'https://github.com/jesse-ai/jesse-portfolio-v3',
    previewUrl: '/images/jesse-portfolio.png',
  },
  {
    name: 'Incognito',
    image: incognito,
    description:
      'An anonymous messaging app that allows users to send messages to each other without revealing their identity.',
    tags: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'MongoDB'],
    githubUrl: 'https://github.com/jesse-ai/jesse-portfolio-v3',
    previewUrl: '/images/jesse-portfolio.png',
  },
  {
    name: 'Incognito',
    image: incognito,
    description:
      'An anonymous messaging app that allows users to send messages to each other without revealing their identity.',
    tags: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'MongoDB'],
    githubUrl: 'https://github.com/jesse-ai/jesse-portfolio-v3',
    previewUrl: '/images/jesse-portfolio.png',
  },
  {
    name: 'Incognito',
    image: incognito,
    description:
      'An anonymous messaging app that allows users to send messages to each other without revealing their identity.',
    tags: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'MongoDB'],
    githubUrl: 'https://github.com/jesse-ai/jesse-portfolio-v3',
    previewUrl: '/images/jesse-portfolio.png',
  },
]
