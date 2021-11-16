import React from 'react'
import { Header } from './index.styled'
import Navigation from './Navigation'
import { Row } from '../../style/global'
import { HeaderSection } from './Navigation/index.styled'

const Head = () => {
  return (
    <Header>
      <div className="container-fluid light">
        <HeaderSection>
          <Row>
            <Navigation />
          </Row>
        </HeaderSection>
      </div>
    </Header>
  )
}

export default Head
