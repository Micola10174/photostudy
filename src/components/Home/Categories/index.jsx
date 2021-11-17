import React from 'react'
import {
  Button,
  ButtonWrapper,
  CategoriesColl,
  CategoriesWrapper,
  Description,
  RowGrid,
  SectionTitle,
  Title,
} from './index.styled'
import CategoriesSlider from './CateforiesSlider'

const Categories = () => {
  return (
    <CategoriesWrapper>
      <RowGrid>
        <CategoriesColl>
          <SectionTitle>
            <Title>Категории</Title>
            <Description>
              Повседневная практика показывает, что дальнейшее развитие
              различных форм деятельности требуют определения и уточнения
              существенных финансовых и административных условий.
            </Description>
          </SectionTitle>
        </CategoriesColl>
        <CategoriesColl>
          <ButtonWrapper>
            <Button>Посмотреть все</Button>
          </ButtonWrapper>
        </CategoriesColl>
      </RowGrid>

      <CategoriesSlider />
    </CategoriesWrapper>
  )
}

export default Categories
