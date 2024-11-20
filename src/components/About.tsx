import Github from './icons/Github'
import LinkedIn from './icons/LinkedIn'
import Mail from './icons/Mail'
import Twitter from './icons/Twitter'

const About = () => {
  return (
    <section className='prose border-b py-12'>
      <h2 className='font-mono text-xl font-bold uppercase tracking-tight text-bright'>
        <span className='text-primary'>1.</span> About Me.
      </h2>

      <div className='mb-6 grid grid-cols-2 gap-4 pt-6'>
        <div data-id='border-card' className='flex-1'>
          <div
            data-id='border-card-inner'
            className='flex flex-col items-center rounded bg-card px-4 py-6 shadow-2xl'
          >
            <span className='mb-2 font-mono text-3xl text-primary'>3+</span>
            <span className='text-center font-mono text-sm font-bold'>
              Years <br className='sm:hidden' />
              Experience
            </span>
          </div>
        </div>

        <div data-id='border-card' className='flex-1'>
          <div
            data-id='border-card-inner'
            className='flex flex-col items-center rounded bg-card px-4 py-6 shadow-2xl'
          >
            <span className='mb-2 font-mono text-3xl text-primary'>10+</span>
            <span className='w-max text-center font-mono text-sm font-bold'>
              Projects <br className='sm:hidden' />
              Completed
            </span>
          </div>
        </div>
      </div>

      <p className='pt-4'>
        I have over <strong>3 years</strong> of experience in software
        development and have worked on a variety of projects, including web
        applications and APIs. I have a strong background in JavaScript,
        TypeScript, and React, and I am familiar with Node.js, MongoDB, and
        PostgreSQL. I also have experience in building dynamic user interfaces,
        optimizing performance, and implementing server-side logic.
      </p>
      <p>
        I am passionate about creating intuitive and engaging user experiences
        and can bring a unique perspective to any design process. I am always
        looking for new ways to improve and grow as a developer, and I am eager
        to take on new challenges and projects.
      </p>

      <div className='flex justify-center gap-4 pt-4'>
        <a
          title='View on GitHub'
          target='_blank'
          rel='noreferrer'
          href='https://github.com/ajiohjesse'
          className='inline-block rounded-full bg-card p-3 text-foreground transition-colors hover:text-primary'
        >
          <Github className='size-6' />
          <span className='sr-only'>View on GitHub</span>
        </a>
        <a
          title='Follow on LinkedIn'
          target='_blank'
          rel='noreferrer'
          href='https://linkedin.com/in/ajiohjesse'
          className='inline-block rounded-full bg-card p-3 text-foreground transition-colors hover:text-primary'
        >
          <LinkedIn className='size-6' />
          <span className='sr-only'>Follow on LinkedIn</span>
        </a>
        <a
          title='Follow on X'
          target='_blank'
          rel='noreferrer'
          href='https://x.com/rehxofficial'
          className='inline-block rounded-full bg-card p-3 text-foreground transition-colors hover:text-primary'
        >
          <Twitter className='size-6' />
          <span className='sr-only'>Follow on X</span>
        </a>
        <a
          title='Send me an email'
          target='_blank'
          rel='noreferrer'
          href='mailto:me@jesse.name.ng'
          className='inline-block rounded-full bg-card p-3 text-foreground transition-colors hover:text-primary'
        >
          <Mail className='size-6' />
          <span className='sr-only'>Send me an email</span>
        </a>
      </div>
    </section>
  )
}

export default About
