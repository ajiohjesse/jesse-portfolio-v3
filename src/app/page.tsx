import About from '@/components/About'
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import Reviews from '@/components/Reviews'
import Services from '@/components/Services'
import Skills from '@/components/Skills'

export default function Home() {
  return (
    <article className='container pt-6'>
      <Hero />
      <About />
      <Services />
      <Skills />
      <Projects />
      <Reviews />
    </article>
  )
}
