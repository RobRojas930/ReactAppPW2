import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Header } from '../header/header';
import { Content } from '../content';
import { Footer } from '../footer';
import { Announcement } from '../announcement/announcement';
import { SlideShow } from '../slideshow/slideshow';
const { SLIDESHOW } = require('../../../constants.json');

export const View = (props) => {
  return (
    <Container fluid>
      <Row>
        <Header></Header>
      </Row>
      <Row>
        <Col md="12">
          {SLIDESHOW ? (
            <SlideShow
              slides={[
                {
                  number: 0,
                  img: 'https://i.pinimg.com/originals/c6/20/4d/c6204dfdc2fc3a5e421fbd955dad5809.jpg',
                  text: 'Texto1',
                },
                {
                  number: 1,
                  img: 'https://i.pinimg.com/originals/c6/20/4d/c6204dfdc2fc3a5e421fbd955dad5809.jpg',
                  text: 'Texto2',
                },
                {
                  number: 2,
                  img: 'https://i.pinimg.com/originals/c6/20/4d/c6204dfdc2fc3a5e421fbd955dad5809.jpg',
                  text: 'Texto3',
                },
              ]}
            ></SlideShow>
          ) : (
            <Announcement></Announcement>
          )}
          <Content>{props.children}</Content>
        </Col>
      </Row>
      <Footer></Footer>
    </Container>
  );
};
