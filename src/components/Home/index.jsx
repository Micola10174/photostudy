import React from 'react'
import {Section} from '../../style/global'
import Services from './Services'
import Categories from './Categories'
import Portfolio from './Portfolio'
import Carousel from "./Carousel"

const Home = () => {
    return (
        <div>
            <Section>
                <Carousel />
            </Section>
            <Section>
                <Services/>
            </Section>
            <Section>
                <Categories/>
            </Section>
            <Section>
                <Portfolio/>
            </Section>
        </div>
    )
}

export default Home
