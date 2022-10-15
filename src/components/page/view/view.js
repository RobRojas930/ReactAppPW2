import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Header } from '../header/header';
import { Content } from '../content';
import { Footer } from '../footer';
import { Announcement } from '../announcement/announcement';

export const View = (props) => {
  return (
    <Container fluid>
      <Row>
        <Header></Header>
      </Row>
      <Row>
        <Col md="12">
          <Announcement></Announcement>
          <Content>{props.children}</Content>
        </Col>
      </Row>
      <Footer></Footer>
    </Container>
  );
};
