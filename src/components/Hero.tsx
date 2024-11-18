import Image from 'next/image'
import Sparkles from './sparkles'

const Hero = () => {
  return (
    <section className='relative border-b py-12'>
      <Sparkles className='mb-8 lg:absolute lg:-left-36'>
        <Image
          src='/images/panda-2.svg'
          priority
          width={180}
          height={180}
          alt='Jesse Profile'
          className='size-32 object-cover object-top'
        />
      </Sparkles>
      <h1 className='upper text-bright font-mono text-4xl font-bold uppercase tracking-tight xs:text-[2.5rem]'>
        Jesse Ajioh.
      </h1>
      <p className='mt-2 font-mono text-primary'>| Fullstack Web Developer.</p>
      <p className='text-muted text-pretty pt-4'>
        Hi, I&#39;m a fullstack developer with a passion for building scalable
        and performant web applications. I&#39;m excited to bring my skills and
        experience to the table and help you achieve your goals.
      </p>

      <button className='mt-6 rounded bg-primary px-6 py-3 text-sm font-bold text-background'>
        Send Me A Message
      </button>
    </section>
  )
}

export default Hero
