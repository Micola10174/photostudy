import styled from 'styled-components'

export const ContainerFluid = styled.div`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
`
export const Container = styled.div`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;

  @media only screen and (min-width: 1430px) {
    max-width: 1400px;
  }

  @media (max-width: 1200px) {
    max-width: 1140px;
  }

  @media (max-width: 992px) {
    max-width: 960px;
  }

  @media (max-width: 768px) {
    max-width: 720px;
  }

  @media (max-width: 576px) {
    max-width: 540px;
  }
`

export const Row = styled.div`
  display: flex;
  margin-left: 15px;
  margin-right: 15px;
`
export const Section = styled.section`
  padding-top: 0;
  padding-bottom: 60px;
`
