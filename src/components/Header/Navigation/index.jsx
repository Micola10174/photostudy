import React from 'react'
import {Logo, Nav, NavItem, NavLink, NavList, NavLogo, NavWrapper, Search,} from './index.styled'
import logo from '../../../assets/images/logo.svg'

const Navigation = () => {
    return (
        <Nav>
            <NavLogo>
                <Logo src={logo}/>
            </NavLogo>
            <NavWrapper>
                <NavList>
                    <NavItem to="/" activeClassName="active">Главная</NavItem>
                </NavList>
                <NavList>
                    <NavItem to="/about" activeClassName="active">О нас</NavItem>
                </NavList>
                <NavList>
                    <NavItem to="/services" activeClassName="active">Сервисы</NavItem>
                </NavList>
                <NavList>
                    <NavItem to="/pricing" activeClassName="active">Покупка</NavItem>
                </NavList>
                <NavList>
                    <NavItem to="/portfolio" activeClassName="active">Портфолио</NavItem>
                </NavList>
                <NavList>
                    <NavItem to="/blog" activeClassName="active">Блог</NavItem>
                </NavList>
                <NavList>
                    <NavItem to="/pages" activeClassName="active">Страницы</NavItem>
                </NavList>
                <NavList>
                    <NavItem to="/contact" activeClassName="active">Контакты</NavItem>
                </NavList>
            </NavWrapper>
            <Search>
                <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20C13.125 20 15.078 19.2635 16.6177 18.0319L21 22.4142L22.4142 21L18.0319 16.6177C19.2635 15.078 20 13.125 20 11C20 6.02944 15.9706 2 11 2ZM4 11C4 7.13401 7.13401 4 11 4C14.866 4 18 7.13401 18 11C18 14.866 14.866 18 11 18C7.13401 18 4 14.866 4 11Z"
                        fill="#FFF"
                    />
                </svg>
            </Search>
        </Nav>
    )
}

export default Navigation
