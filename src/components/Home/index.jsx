import React from 'react'
import { Section } from '../../style/global'
import Services from './Services'
import Categories from './Categories'
import Portfolio from './Portfolio'

const Home = () => {
  return (
    <div>
      <Section>
        <Services />
      </Section>
      <Section>
        <Categories />
      </Section>
      <Section>
        <Portfolio />
      </Section>
    </div>
  )
}

export default Home
