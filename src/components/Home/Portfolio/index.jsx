import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {
  BlockRow,
  ButtonMore,
  ButtonWrapper,
  PortfolioFilter,
  PortfolioFilterButtons,
  PortfolioFilterItem,
  PortfolioFilterList,
  PortfolioTitle,
  PortfolioWrapper,
} from './index.styled'
import { Container, ContainerFluid } from '../../../style/global'
import GalleryComponent from './Gallery'

const Portfolio = () => {
  const [imagesData, setImagesData] = useState([])
  const [page, setPage] = useState(0)

  useEffect(() => {
    getData()
  }, [])

  const getData = () => {
    axios
      .get(
        `https://api.unsplash.com/photos?client_id=ZqXbcY28ANlOVeIWmpXwtR9ZKeB44r24xyNIf2uVzC8&page=${
          page + 1
        }`
      )
      .then((res) => {
        setImagesData(imagesData.concat(res.data))
      })
      .catch((err) => {
        console.error(err)
      })
  }

  const fetchData = () => {
    setPage(page + 1)
    getData()
  }

  return (
    <PortfolioWrapper>
      <Container>
        <BlockRow>
          <PortfolioTitle>
            <h2>Наши последние работы</h2>
          </PortfolioTitle>
          <PortfolioFilterButtons>
            <PortfolioFilterList>
              <PortfolioFilterItem className="active">Все</PortfolioFilterItem>
              <PortfolioFilterItem>Мода</PortfolioFilterItem>
              <PortfolioFilterItem>Образ жизни</PortfolioFilterItem>
              <PortfolioFilterItem>Природа</PortfolioFilterItem>
              <PortfolioFilterItem>Свадьба</PortfolioFilterItem>
              <PortfolioFilterItem>Видео</PortfolioFilterItem>
            </PortfolioFilterList>
          </PortfolioFilterButtons>
        </BlockRow>
      </Container>
      <ContainerFluid>
        <PortfolioFilter>
          <GalleryComponent imagesData={imagesData} />
        </PortfolioFilter>
      </ContainerFluid>
      <ButtonWrapper>
        <ButtonMore onClick={fetchData}>Загрузить больше</ButtonMore>
      </ButtonWrapper>
    </PortfolioWrapper>
  )
}

export default Portfolio
