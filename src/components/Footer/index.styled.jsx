import styled from 'styled-components'

export const Footer = styled.footer`
  background: #000606;
  padding-top: 70px;
`

export const GridRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
`

export const GridCol = styled.div`
  color: #fff;
`

export const AboutBlock = styled.div``
export const LogoBlock = styled.div`
  margin-bottom: 34px;
`
export const LogoLink = styled.a``
export const LogoImg = styled.img`
  max-width: 50px;
`

export const AboutTitle = styled.p`
  color: #c4c4c4;
  margin-bottom: 20px;
`
export const SocialBlock = styled.div`
  display: flex;
  align-items: center;
`
export const SocialLink = styled.a`
  margin-right: 20px;
`
export const SocialImage = styled.div``

export const WidgetGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  ul {
    list-style: none;
  }

  li {
  }

  a {
    text-decoration: none;
    font-size: 15px;
    color: #c4c4c4;
    line-height: 36px;
  }
`
export const WidgetBlock = styled.div``
export const WidgetTitle = styled.h5`
  font-size: 20px;
  text-transform: uppercase;
  margin-bottom: 35px;
`
export const InstagramImagesWrapper = styled.div``
export const InstagramImage = styled.img`
  width: 103px;
  height: 103px;
  object-fit: cover;
  margin-right: 5px;
`

export const SubscribeTitle = styled.p`
  color: #c4c4c4;
`
export const SubscribeFormWrapper = styled.div``
export const SubscribeForm = styled.form`
  position: relative;
`
export const SubscribeInput = styled.input`
  width: 100%;
  height: 50px;
  font-size: 15px;
  color: #c4c4c4;
  padding-left: 20px;
  border: 1px solid #009603;
  background: transparent;
  outline: none;
`
export const SubscribeButtonSubmit = styled.button`
  color: #ffffff;
  background: #009603;
  height: 50px;
  width: 50px;
  border: none;
  position: absolute;
  right: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    width: 30px;
    height: 30px;
  }
`

export const FooterBottom = styled.div``

export const CopyrightBlock = styled.div`
  font-size: 15px;
  color: #c4c4c4;
  text-align: center;
  border-top: 1px solid #181d1d;
  padding: 30px 0;
  margin-top: 40px;
`
export const CopyrightText = styled.p``
