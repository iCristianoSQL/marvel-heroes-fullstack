import React from 'react'
import useEmblaCarousel, { EmblaOptionsType } from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

import ImageCarousel1 from "../../assets/carousel/carousel1.jpg";
import ImageCarousel2 from "../../assets/carousel/carousel2.jpg";
import ImageCarousel3 from "../../assets/carousel/carousel3.jpg";
import ImageCarousel4 from "../../assets/carousel/carousel4.jpg";

const images: string[] = [ImageCarousel1, ImageCarousel2, ImageCarousel3, ImageCarousel4]
const imageByIndex = (index: number): string => images[index % images.length]

type PropType = {
  slides: number[]
  options?: EmblaOptionsType
}

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props
  const [emblaRef] = useEmblaCarousel(options, [Autoplay()])

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((index) => (
            <div className="embla__slide" key={index}>
              <div className="embla__slide__number">
                <span>{index + 1}</span>
              </div>
              <img
                className="embla__slide__img"
                src={imageByIndex(index)}
                alt="Carousel Image"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export const HeroesCarousel = () => {
    const OPTIONS: EmblaOptionsType = {}
    const SLIDE_COUNT = 4
    const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

    return (
        <section className="sandbox__carousel">
            <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      </section>
    )
}