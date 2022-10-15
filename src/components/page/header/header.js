import React from 'react';
import {
  TopNav,
  TopNavLink,
  TopNavSearchBar,
  TopNavSearchButton,
} from './styles';
import { Container, Row, Col } from 'reactstrap';

export const Header = () => {
  return (
    <TopNav>
      <Container>
        <Row>
          <Col md="10">
            <TopNavLink>Home</TopNavLink>
            <TopNavLink>Nosotros</TopNavLink>
            <TopNavLink>Sucursales</TopNavLink>
          </Col>
          <Col md="2">
            <Container>
              <Row>
                <Col md="8">
                  <TopNavSearchBar></TopNavSearchBar>
                </Col>
                <Col md="2">
                  <TopNavSearchButton>Buscar</TopNavSearchButton>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </TopNav>
  );
};
