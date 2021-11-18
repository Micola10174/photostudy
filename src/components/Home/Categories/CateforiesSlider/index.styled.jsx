import styled from 'styled-components'

export const SliderWrapper = styled.div`
  .slick-slider {
    margin: 20px auto;
    text-align: center;
  }

  .slick-slide {
    & > div {
      margin-right: 20px;
    }
  }

  .slick-next {
    right: 20px;
  }

  .slick-prev {
    left: 20px;
    z-index: 1;
  }

  .slick-slide img {
    object-fit: cover;
  }

  .slick-slider,
  .slick-list,
  .slick-track {
    height: 100%;
  }

  .slick-prev:before,
  .slick-next:before {
    display: none;
  }

  .slick-prev:hover,
  .slick-next:hover {
    background: rgba(0, 0, 0, 0.5);
  }
`
export const SliderItem = styled.div`
  background-color: #fff;
  text-align: center;
`
export const SliderTitleWrapper = styled.div`
  padding: 25px 0 22px;
`
export const SliderTitle = styled.h4`
  text-transform: uppercase;
  margin-bottom: 10px;
  color: #111111;
  transition: all 0.3s;
`
export const SliderSubTitle = styled.span``
export const SliderImg = styled.img`
  height: 360px;
  width: 100%;
  object-fit: cover;
`
export const ArrowNext = styled.div`
  background: rgba(0, 0, 0, 0.5);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`
