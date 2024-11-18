import Slider from './Slider'

const Reviews = () => {
  return (
    <section className='border-b py-12'>
      <h2 className='text-bright mb-5 font-mono text-xl font-bold uppercase tracking-tight'>
        <span className='text-primary'>5.</span> Reviews.
      </h2>

      <div className='pb-12'>
        <Slider>
          {REVIEWS.map((review, index) => (
            <ReviewCard key={index} {...review} />
          ))}
        </Slider>
      </div>
    </section>
  )
}

export default Reviews

interface ReviewCardProps {
  text: string
  author: string
  position?: string
}

const ReviewCard = (props: ReviewCardProps) => {
  const { text, author, position } = props

  return (
    <div className='relative h-full rounded bg-card p-12'>
      <span className='absolute left-4 top-4 text-6xl italic text-primary'>
        &#34;
      </span>

      <p className='line-clamp-[10] italic'>{text}</p>

      <div className='mt-6 flex flex-col'>
        <p className='line-clamp-1 text-primary'>- {author}</p>
        {position ? (
          <p className='line-clamp-1 pl-2 text-xs leading-none'>{position}</p>
        ) : null}
      </div>
    </div>
  )
}

const REVIEWS = [
  {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl eget ultricies ultrices, nulla nulla aliquet nisi, euismod aliquam nisl nisi euismod.',
    author: 'Jesse Ajioh',
    position: 'Devloper Advocate at Velocity Tech. Inc.',
  },
  {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl eget ultricies ultrices, nulla nulla aliquet nisi, euismod aliquam nisl nisi euismod.',
    author: 'Jesse Ajioh',
    position: 'Senior Frontend Developer',
  },
]
