const About = () => {
  return (
    <section className='prose border-b py-12'>
      <h2 className='text-bright font-mono text-xl font-bold uppercase tracking-tight'>
        <span className='text-primary'>1.</span> About Me.
      </h2>

      <div className='mb-6 grid grid-cols-2 gap-4'>
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

      <p>
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
    </section>
  )
}

export default About
