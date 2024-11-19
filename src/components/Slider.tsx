'use client'
import SlickSlider, { type Settings } from 'react-slick'

const Slider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 200,
    slidesToShow: 2,
    slidesToScroll: 1,
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

  return <SlickSlider {...settings}>{children}</SlickSlider>
}

export default Slider
