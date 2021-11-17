import React from 'react'
import { Container, Section } from '../../style/global'
import Services from './Services'
import Categories from './Categories'

const Home = () => {
  return (
    <Container>
      <Section>
        <Services />
      </Section>
      <Section>
        <Categories />
      </Section>
    </Container>
  )
}

export default Home
