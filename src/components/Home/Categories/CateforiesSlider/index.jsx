import React from 'react'
import Slider from 'react-slick'
import {
  ArrowNext,
  SliderImg,
  SliderItem,
  SliderSubTitle,
  SliderTitle,
  SliderTitleWrapper,
  SliderWrapper,
} from './index.styled'
import portrait from '../../../../assets/images/categories-slider/potrait.jpg'
import animal from '../../../../assets/images/categories-slider/animal.jpg'
import natural from '../../../../assets/images/categories-slider/natural.jpg'
import moda1 from '../../../../assets/images/categories-slider/moda1.jpg'
import moda2 from '../../../../assets/images/categories-slider/moda2.jpg'

const CategoriesSlider = () => {
  const settings = {
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    speed: 1500,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1,
        },
      },
    ],
    nextArrow: <SampleNextArrow className="test" />,
    prevArrow: <SamplePrevArrow className="test" />,
  }
  return (
    <SliderWrapper>
      <Slider {...settings}>
        <SliderItem>
          <SliderImg src={portrait} />
          <SliderTitleWrapper>
            <SliderTitle>Портрет</SliderTitle>
            <SliderSubTitle>97 фотографий</SliderSubTitle>
          </SliderTitleWrapper>
        </SliderItem>
        <SliderItem>
          <SliderImg src={animal} />
          <SliderTitleWrapper>
            <SliderTitle>Животное</SliderTitle>
            <SliderSubTitle>511 фотографий</SliderSubTitle>
          </SliderTitleWrapper>
        </SliderItem>
        <SliderItem>
          <SliderImg src={natural} />
          <SliderTitleWrapper>
            <SliderTitle>Природа</SliderTitle>
            <SliderSubTitle>563 фотографий</SliderSubTitle>
          </SliderTitleWrapper>
        </SliderItem>
        <SliderItem>
          <SliderImg src={moda1} />
          <SliderTitleWrapper>
            <SliderTitle>Мода</SliderTitle>
            <SliderSubTitle>120 фотографий</SliderSubTitle>
          </SliderTitleWrapper>
        </SliderItem>
        <SliderItem>
          <SliderImg src={moda2} />
          <SliderTitleWrapper>
            <SliderTitle>Мода</SliderTitle>
            <SliderSubTitle>241 фотографий</SliderSubTitle>
          </SliderTitleWrapper>
        </SliderItem>
      </Slider>
    </SliderWrapper>
  )
}

export default CategoriesSlider

const SampleNextArrow = (props) => {
  // eslint-disable-next-line react/prop-types
  const { className, style, onClick } = props
  return (
    <ArrowNext className={className} onClick={onClick}>
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
    <ArrowNext className={className} onClick={onClick}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9.41421 12L16.4142 5.00001L15 3.58579L6.58578 12L15 20.4142L16.4142 19L9.41421 12Z"
          fill="white"
        />
      </svg>
    </ArrowNext>
  )
}
