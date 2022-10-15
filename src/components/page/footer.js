import React from 'react'
import styled from 'styled-components';
import { TopNav, TopNavLink } from './header/styles';
export const FooterComp = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color:  hsl(90, 1%, 31%);
  color: white;
  text-align: center;
`;
export const Footer = () => {
  return (
    <FooterComp className='footer'>
      <TopNav>
        <TopNavLink>Acerca de nosotros</TopNavLink>
        <TopNavLink>Mapa del sitio</TopNavLink>
        <TopNavLink>Terminos y condiciones</TopNavLink>
        <TopNavLink>Legal</TopNavLink>
      </TopNav>
    </FooterComp>
  )
}
