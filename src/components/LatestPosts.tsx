import Image from 'next/image'
import Link from 'next/link'
import Sparkles from './sparkles'

const LatestPosts = () => {
  return (
    <section className='border-b py-12'>
      <h2 className='mb-5 font-mono text-xl font-bold uppercase tracking-tight text-bright'>
        <span className='text-primary'>5.</span> Latest Posts.
      </h2>

      <div className='relative space-y-6 pb-12 pt-6'>
        <Sparkles className='absolute right-0 top-[-15px] z-[-1]'>
          <Image
            src='/images/panda.svg'
            priority
            width={180}
            height={180}
            alt='Panda'
            className='size-16 object-cover object-top'
          />
        </Sparkles>

        {Array.from({ length: 4 }).map((_, i) => (
          <PostPreview key={i} />
        ))}

        <div className='z-1 pointer-events-none absolute bottom-0 left-0 right-0 flex h-32 items-end justify-center bg-gradient-to-b from-transparent via-background to-background'>
          <Link href='#' className='button pointer-events-auto'>
            See All Posts
          </Link>
        </div>
      </div>
    </section>
  )
}

export default LatestPosts

const PostPreview = () => {
  return (
    <div className='rounded border-l border-primary bg-card p-4 pl-6'>
      <h3 className='text-bright'>
        <Link
          href='#'
          className='text-balance text-bright transition-all hover:text-primary hover:underline md:text-lg'
        >
          How to Build a Personal Portfolio Website and ensure that it is
          stunningly beautiful.
        </Link>
      </h3>

      <div className='mt-4 flex items-center gap-2 text-sm [&>p]:m-0'>
        <p>Published on Nov 2, 2024</p> . <p>5 min read</p>
      </div>
    </div>
  )
}
