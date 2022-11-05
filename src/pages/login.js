import React, { Fragment } from 'react';
import LoginForm from '../components/forms/loginForm';
import { useNavigate  } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardTitle,
  CardBody,
} from 'reactstrap';
import { View } from './../components/page/view/view';
import { LOGIN_PAGE } from './../utils/colors';
import logo from './../res/logo.png';
import portada from './../res/portada.jpg';
import Store from '../utils/store';
import store2 from 'store2';
import  AlertData  from './../utils/dialogs';
const store = new Store();
const alertData = new AlertData();
export const Login = ({onAlert}) => {
  let navigate = useNavigate();
  return (
    <View theme={LOGIN_PAGE} banner={''}>
      <Container fluid className="h-100 m-3">
        <Row className='flex-grow-1 justify-content-center h-100"'>
          <Col lg="6" className="text-center">
            <CardImg
              alt="Card image cap"
              src={portada}
              style={{
                width: 500,
              }}
              width="100%"
            />
          </Col>
          <Col lg="6">
            <Card inverse>
              <CardTitle>Bienvenido</CardTitle>
              <CardBody>
                <Container>
                  <Row>
                    <Col md="12" className="text-center">
                      <CardImg
                        alt="Card image cap"
                        src={logo}
                        style={{
                          width: 300,
                          height: 300,
                        }}
                        width="100%"
                      />
                    </Col>
                    <Col md="12">
                      <LoginForm
                        onLogin={(email, password) => {
                          store.Login(email, password, (response) => {
                            store2.set('TOKEN', response.token);
                            navigate("/main");
                            onAlert()
                          });
                        }}
                      ></LoginForm>
                    </Col>
                  </Row>
                </Container>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </View>
  );
};
