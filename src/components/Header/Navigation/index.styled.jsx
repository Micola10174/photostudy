import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { colors } from '../../../style/colors'

export const Nav = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
`

export const NavWrapper = styled.ul`
  display: flex;
  list-style: none;
  @media only screen and (min-width: 768px) and (max-width: 991px) {
    display: none;
  }
  @media only screen and (max-width: 767px) {
    display: none;
  }
`
export const NavList = styled.li`
  margin-right: 30px;
  position: relative;

  &:first-child {
    margin-left: 0;
  }
`
export const NavItem = styled(NavLink)`
  color: #000;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 14px;
  padding: 32px 8px 30px;
  display: block;
  font-family: 'RobotoBold', sans-serif;

  &:after {
    position: absolute;
    left: 0;
    bottom: 0;
    height: 3px;
    width: 100%;
    background: ${colors.colorGreen};
    content: '';
    opacity: 0;
    -webkit-transition: all 0.3s;
    -o-transition: all 0.3s;
    transition: all 0.3s;
  }

  &:hover {
    &:after {
      opacity: 1;
    }
  }

  &.active {
    &:after {
      opacity: 1;
    }
  }
`

export const NavLogo = styled.div`
  width: 50px;
  display: flex;
  margin-right: 150px;
  @media only screen and (min-width: 992px) and (max-width: 1199px) {
    margin-right: 20px;
  }
`

export const Logo = styled.img`
  max-width: 100%;
  height: auto;
`

export const HeaderSection = styled.div`
  @media only screen and (min-width: 1430px) {
    padding-left: 85px;
    padding-right: 85px;
  }
`

export const Search = styled.div`
  height: 50px;
  width: 50px;
  background: ${colors.colorGreen};
  line-height: 50px;
  text-align: center;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
`
