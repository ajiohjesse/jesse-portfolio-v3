import ProductDesign from './icons/ProductDesign'
import ProjectMgt from './icons/ProjectMgt'
import UiUx from './icons/UiUx'
import WebDev from './icons/WebDev'

const Services = () => {
  return (
    <section className='prose border-b py-12'>
      <h2 className='font-mono text-xl font-bold uppercase tracking-tight text-bright'>
        <span className='text-primary'>2.</span> What I DO.
      </h2>

      <div className='relative grid gap-4 pt-6 sm:grid-cols-2'>
        {SERVICES.map((service, index) => (
          <div data-id='border-card' key={index} className='shadow-2xl'>
            <div
              data-id='border-card-inner'
              className='flex flex-1 flex-col rounded bg-card p-4 shadow-2xl md:p-6'
            >
              {service.icon}
              <h3 className='font-mono text-bright'>{service.name}</h3>
              <p>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Services

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
    icon: <ProjectMgt className='size-8 text-primary' />,
    name: 'Project Management',
    description:
      'With a strategic approach to project management, I guide projects from inception to completion.',
  },
]
