import styled from 'styled-components'

export const SliderWrapper = styled.div`
  height: calc(100% - 79px);
  background-color: #999;
  .slick-next{
    right: 20px;
  }
  .slick-prev{
    left: 20px;
    z-index: 1;
  }

  .slick-slide img {
    object-fit: cover;
  }
  .slick-slider, .slick-list, .slick-track{
    height: 100%;
  }
  .slick-prev:before, .slick-next:before {
    display: none;
  }
  .slick-prev:hover, .slick-next:hover{
    background: rgba(0, 0, 0, 0.5);
  }
`
export const SliderItem = styled.div`
  
`
export const SliderImg = styled.img`

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