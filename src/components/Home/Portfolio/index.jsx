import React from 'react'
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
import {Container, ContainerFluid} from '../../../style/global'
import GalleryComponent from "./Gallery"

const Portfolio = () => {
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
                    <GalleryComponent/>
                </PortfolioFilter>
            </ContainerFluid>
            <ButtonWrapper>
                <ButtonMore>Загрузить больше</ButtonMore>
            </ButtonWrapper>
        </PortfolioWrapper>
    )
}

export default Portfolio
