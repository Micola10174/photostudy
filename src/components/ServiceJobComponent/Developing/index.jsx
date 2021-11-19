import React from 'react'
import PropTypes from 'prop-types'
import {
  DevelopingTitle,
  DevelopingSubtitle,
  DevelopingWrapper,
} from './index.styled'
import { Container } from '../../../style/global'

const Developing = ({ page }) => {
  return (
    <DevelopingWrapper>
      <Container>
        <DevelopingSubtitle>Скоро будет страница {page}</DevelopingSubtitle>
        <DevelopingTitle>
          Мы создаем <br />
          что-то классное !!
        </DevelopingTitle>
      </Container>
    </DevelopingWrapper>
  )
}

Developing.propTypes = {
  page: PropTypes.string,
}

export default Developing
