const Contact = () => {
  return (
    <section className='border-b py-12'>
      <h2
        id='contact'
        className='mb-5 font-mono text-xl font-bold uppercase tracking-tight text-bright'
      >
        <span className='text-primary'>6.</span> Contact Me.
      </h2>

      <div className='relative space-y-6 pb-12 pt-6'>
        <form action='' className='flex flex-col gap-4'>
          <fieldset>
            <label htmlFor='name' className='sr-only'>
              Name
            </label>
            <input
              type='text'
              name='name'
              id='name'
              placeholder='Name'
              className='w-full rounded bg-card p-4 shadow-md'
            />
          </fieldset>

          <fieldset>
            <label htmlFor='email' className='sr-only'>
              Email
            </label>
            <input
              type='email'
              name='email'
              id='email'
              placeholder='Email'
              className='w-full rounded bg-card p-4 shadow-md'
            />
          </fieldset>

          <fieldset>
            <label htmlFor='message' className='sr-only'>
              Message
            </label>
            <textarea
              name='message'
              id='message'
              placeholder='Message'
              className='min-h-[140px] w-full rounded bg-card p-4 shadow-md'
            />
          </fieldset>

          <button type='submit' className='button'>
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
