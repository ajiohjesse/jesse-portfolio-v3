'use client'
import Slider, { type Settings } from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'

const Projects = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    customPaging: i => (
      <span className='grid size-8 place-items-center rounded-full bg-card text-center text-xs transition-colors [.slick-active_&]:bg-primary [.slick-active_&]:text-background'>
        {i + 1}
      </span>
    ),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  } satisfies Settings

  return (
    <section className='border-b py-12'>
      <h2 className='text-bright mb-5 font-mono text-xl font-bold uppercase tracking-tight'>
        <span className='text-primary'>4.</span> Reviews.
      </h2>

      <div>
        <Slider {...settings} className='h-full'>
          {REVIEWS.map(({ author, position, text }, index) => (
            <ReviewCard
              key={index}
              author={author}
              position={position}
              text={text}
            />
          ))}
        </Slider>
      </div>
    </section>
  )
}

export default Projects

interface ReviewCardProps {
  text: string
  author: string
  position?: string
}

const ReviewCard = (props: ReviewCardProps) => {
  const { text, author, position } = props

  return (
    <div className='relative m-2 h-full rounded bg-card p-12'>
      <span className='absolute left-4 top-4 text-6xl italic text-primary'>
        &#34;
      </span>

      <p className='line-clamp-[10] text-sm italic'>{text}</p>

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
    position: 'Senior Frontend Developer',
  },
  {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl eget ultricies ultrices, nulla nulla aliquet nisi, euismod aliquam nisl nisi euismod.',
    author: 'Jesse Ajioh',
    position: 'Senior Frontend Developer',
  },
]
