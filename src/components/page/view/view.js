import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Header } from '../header/header';
import { Content } from '../content';
import { Footer } from '../footer';
import { Announcement } from '../announcement/announcement';
import { SlideShow } from '../slideshow/slideshow';
import SweetAlert2 from 'react-sweetalert2';
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
export const View = ({ alertData, theme, banner, children }) => {
  const [swalProps, setSwalProps] = useState({});
  useEffect(() => {
    setSwalProps(alertData);
  });
  return (
    <Container fluid>
      <Row>
        <Header theme={theme} items={navbaritems}></Header>
      </Row>
      <Row>
        <Col md="12">
          {banner == 'slideshow' ? (
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
          ) : banner == 'announcement' ? (
            <Announcement></Announcement>
          ) : (
            <div></div>
          )}
          <Content>{children}</Content>
        </Col>
      </Row>
      <Footer theme={theme} items={navbaritems}></Footer>
      <SweetAlert2 {...swalProps}  onConfirm={alertData.onConfirm} />
    </Container>
  );
};
