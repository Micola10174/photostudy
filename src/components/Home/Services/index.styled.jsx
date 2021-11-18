import styled from 'styled-components'

export const ServicesWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;
  margin-top: -70px;
  z-index: 99;
  position: relative;
`
export const ServicesItem = styled.div`
  padding: 10px 10px 18px 10px;
  background-color: #fff;
  text-align: center;
`
export const ServicesImg = styled.img`
  margin-bottom: 28px;
  min-width: 100%;
`

export const ServicesTitle = styled.h3`
  margin-bottom: 10px;
  color: #191039;
  text-transform: uppercase;
`

export const ServicesDescription = styled.p`
  color: #666666;
`