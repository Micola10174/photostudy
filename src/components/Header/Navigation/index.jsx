import React from 'react'
import { Logo, Nav, NavLink, NavList, NavLogo, NavWrapper } from "./index.styled";
import logo from '../../../assets/images/logo.png'

const Navigation = () => {
    return (
        <div className="container-fluid">
            <div className="container">
                <Nav>
                    <NavLogo>
                        <Logo src={logo} />
                    </NavLogo>
                    <NavWrapper>
                        <NavList>
                            <NavLink href="#">Home</NavLink>
                        </NavList>
                        <NavList>
                            <NavLink href="#">About</NavLink>
                        </NavList>
                        <NavList>
                            <NavLink href="#">Pricing</NavLink>
                        </NavList>
                        <NavList>
                            <NavLink href="#">Team</NavLink>
                        </NavList>
                        <NavList>
                            <NavLink href="#">Clients</NavLink>
                        </NavList>
                        <NavList>
                            <NavLink href="#">Contacts</NavLink>
                        </NavList>
                    </NavWrapper>
                </Nav>
            </div>
        </div>


    )
}

export default Navigation