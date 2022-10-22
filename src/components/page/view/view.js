import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Header } from '../header/header';
import { Content } from '../content';
import { Footer } from '../footer';
import { Announcement } from '../announcement/announcement';
import { SlideShow } from '../slideshow/slideshow';
import { LOGIN_PAGE } from './../../../utils/colors';
const navbaritems = [
  {
    text: 'Acerca de nosotros',
    link: 'www.google.com',
  },
  {
    text: 'Mapa del sitio',
    link: 'www.google.com',
  },
  {
    text: 'Legal',
    link: 'www.google.com',
  },
];
export const View = (props) => {
  return (
    <Container fluid>
      <Row>
        <Header theme={props.theme} items={navbaritems}></Header>
      </Row>
      <Row>
        <Col md="12">
          {props.banner == 'slideshow' ? (
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
          ) : props.banner == 'announcement' ? (
            <Announcement></Announcement>
          ) : (
            <div></div>
          )}
          <Content>{props.children}</Content>
        </Col>
      </Row>
      <Footer theme={props.theme} items={navbaritems}></Footer>
    </Container>
  );
};
