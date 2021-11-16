import React from 'react'
import { Header } from './index.styled'
import Navigation from './Navigation'

const Head = () => {
  return (
    <Header>
      <div className="container-fluid light">
        <div className="container">
          <Navigation />
        </div>
      </div>
    </Header>
  )
}

export default Head
