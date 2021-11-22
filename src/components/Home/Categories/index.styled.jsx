import styled from 'styled-components'
import { colors } from '../../../style/colors'

export const CategoriesWrapper = styled.div``
export const RowGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`
export const CategoriesColl = styled.div``
export const SectionTitle = styled.div``
export const Title = styled.h2`
  color: ${colors.colorBlack2};
  text-transform: uppercase;
  margin-bottom: 15px;
`
export const Description = styled.p`
  color: ${colors.colorGray};
  font-size: 15px;
  line-height: 26px;
  margin: 0 0 15px 0;
`
export const ButtonWrapper = styled.div`
  text-align: right;
  padding-top: 24px;
`
export const Button = styled.button`
  background-color: ${colors.colorGreen};
  color: #ffffff;
  padding: 14px 30px;
  text-transform: uppercase;
  font-family: 'RobotoBold', sans-serif;
  border: none;
  outline: none;
  cursor: pointer;
`
