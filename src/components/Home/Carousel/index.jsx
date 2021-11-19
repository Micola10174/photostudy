import React from 'react'
import Slider from 'react-slick'
import { ArrowNext, SliderImg, SliderItem, SliderWrapper } from './index.styled'
import slide1 from '../../../assets/images/slider/slide1.jpg'
import slide2 from '../../../assets/images/slider/slide2.jpg'
import slide3 from '../../../assets/images/slider/slide3.jpg'
import slide4 from '../../../assets/images/slider/slide4.jpg'
import slide5 from '../../../assets/images/slider/slide5.jpg'

const SampleNextArrow = (props) => {
  // eslint-disable-next-line react/prop-types
  const { className, style, onClick } = props
  return (
    <ArrowNext
      className={className}
      onClick={onClick}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        version="1.1"
        id="svg4"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsSvg="http://www.w3.org/2000/svg"
      >
        <path
          d="M9 3.58579L7.58578 5L14.5858 12L7.58578 19L9 20.4142L17.4142 12L9 3.58579Z"
          fill="#FFF"
          id="path2"
        />
      </svg>
    </ArrowNext>
  )
}

const SamplePrevArrow = (props) => {
  // eslint-disable-next-line react/prop-types
  const { className, style, onClick } = props
  return (
      <ArrowNext
          className={className}
          onClick={onClick}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.41421 12L16.4142 5.00001L15 3.58579L6.58578 12L15 20.4142L16.4142 19L9.41421 12Z" fill="white"/>
        </svg>
      </ArrowNext>
  )
}

const Carousel = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow className="test" />,
    prevArrow: <SamplePrevArrow className="test" />,
  }

  return (
    <SliderWrapper>
      <Slider {...settings}>
        <SliderItem className="test">
          <SliderImg src={slide1} />
        </SliderItem>
        <SliderItem>
          <SliderImg src={slide2} />
        </SliderItem>
        <SliderItem>
          <SliderImg src={slide3} />
        </SliderItem>
        <SliderItem>
          <SliderImg src={slide4} />
        </SliderItem>
        <SliderItem>
          <SliderImg src={slide5} />
        </SliderItem>
      </Slider>
    </SliderWrapper>
  )
}

export default Carousel
