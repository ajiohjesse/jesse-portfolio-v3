const Skills = () => {
  return (
    <section className='border-b py-12'>
      <h2 className='text-bright mb-5 font-mono text-xl font-bold uppercase tracking-tight'>
        <span className='text-primary'>3.</span> My Skills.
      </h2>

      <div className='flex flex-wrap gap-2'>
        {SKILLS.map((skill, index) => (
          <p
            key={index}
            className='min-w-max flex-1 select-none bg-card px-4 py-2 font-mono text-sm shadow-md transition hover:bg-primary hover:text-background'
          >
            {skill}
          </p>
        ))}
      </div>
    </section>
  )
}

export default Skills

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
