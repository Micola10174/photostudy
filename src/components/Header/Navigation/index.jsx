import React from 'react'
import {
  Logo,
  Nav,
  NavLink,
  NavList,
  NavLogo,
  NavWrapper,
} from './index.styled'
import logo from '../../../assets/images/logo.png'

const Navigation = () => {
  return (
    <Nav>
      <NavLogo>
        <Logo src={logo} />
      </NavLogo>
      <NavWrapper>
        <NavList>
          <NavLink href="#">Главная</NavLink>
        </NavList>
        <NavList>
          <NavLink href="#">О нас</NavLink>
        </NavList>
        <NavList>
          <NavLink href="#">Сервисы</NavLink>
        </NavList>
        <NavList>
          <NavLink href="#">Покупка</NavLink>
        </NavList>
        <NavList>
          <NavLink href="#">Портфолио</NavLink>
        </NavList>
        <NavList>
          <NavLink href="#">Блог</NavLink>
        </NavList>
        <NavList>
          <NavLink href="#">Страницы</NavLink>
        </NavList>
        <NavList>
          <NavLink href="#">Контакты</NavLink>
        </NavList>
      </NavWrapper>
    </Nav>
  )
}

export default Navigation
