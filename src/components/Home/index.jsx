import React from 'react'
import { Container, Section } from '../../style/global'
import Services from './Services'

const Home = () => {
  return (
    <Container>
      <Section>
        <Container>
          <Services />
        </Container>
      </Section>
    </Container>
  )
}

export default Home
