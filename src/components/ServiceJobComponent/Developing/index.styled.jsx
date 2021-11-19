import styled from 'styled-components'
import build from '../../../assets/images/build.jpg'

export const DevelopingWrapper = styled.div`
  height: calc(100vh - 79px);
  background: url(${build});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const DevelopingSubtitle = styled.h3`
  font-size: 24px;
  font-weight: 400;
  color: #2c4e4e;
`
export const DevelopingTitle = styled.h2`
  font-size: 60px;
  color: #2c4e4e;
`
