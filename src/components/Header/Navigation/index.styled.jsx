import styled from 'styled-components'


export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding-top: 15px;
`

export const NavWrapper = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
`
export const NavList = styled.li`
  margin-left: 63px;
  &:first-child{
    margin-left: 0;
  }
`
export const NavLink = styled.a`
  color: #fff;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 14px;
  padding: 0 0 6px 0;
`

export const NavLogo = styled.div`
    width: 50px;
`

export const Logo = styled.img`
  max-width: 100%;
  height: auto;
`