import styled from 'styled-components'
import { colors } from '../../../style/colors'

export const PortfolioWrapper = styled.div``
export const PortfolioTitle = styled.h2`
  margin-bottom: 22px;
  text-align: center;
  text-transform: uppercase;
  color: ${colors.colorBlack2};
`
export const PortfolioFilterButtons = styled.div`
  text-align: center;
  margin-bottom: 43px;
`
export const PortfolioFilterList = styled.ul``
export const PortfolioFilterItem = styled.li`
  font-size: 17px;
  color: #888888;
  display: inline-block;
  list-style: none;
  margin-right: 60px;
  position: relative;
  cursor: pointer;

  &.active {
    color: ${colors.colorGreen};
  }

  &:after {
    position: absolute;
    right: -33px;
    top: -1px;
    content: '|';
    color: #d7d7d7;
  }

  &:last-child {
    margin-right: 0;

    &:after {
      display: none;
    }
  }
`
export const BlockRow = styled.div``
export const PortfolioFilter = styled.div`
  position: relative;

  img {
    object-fit: cover;
    &:before {
      content: '';
      display: block;
      width: 100%;
      height: 100%;
      background-color: rgb(0, 0, 0);
      z-index: 999;
    }
  }
`

export const ButtonWrapper = styled.div`
  text-align: center;
  margin-top: 30px;
  overflow: hidden;
`
export const ButtonMore = styled.a`
  font-size: 15px;
  color: #ffffff;
  text-transform: uppercase;
  letter-spacing: 2px;
  display: inline-block;
  padding: 15px 102px 13px;
  background: #000606;
  cursor: pointer;
  font-family: 'RobotoBold', sans-serif;
`
