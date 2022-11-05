import 'regenerator-runtime/runtime';
import React, { Component } from 'react';
import { Product } from '../product/product';
import { Col, Container, Row } from 'reactstrap';
import Store from '../../utils/store';
const store = new Store();

export class ListOfProducts extends Component {
  constructor(props) {
    super(props);
    this.alertMessage = props.alertMessage;
    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    store.getProducts({
      callback: (response, alertDataMessage) => {
        //enviamos al componente padre el alert message
        if (alertDataMessage) this.alertMessage(alertDataMessage);
        if (response.success) {
          if (response.data.products.length <= 0)
            this.alertMessage({
              show: true,
              type: 'success',
              title: '¡ÉXITOS!',
              message: response.message,
            });
          this.setState({
            products: response.data.products,
          });
        }
      },
    });
  }
  render() {
    var products = this.state.products || [];
    return (
      <Container fluid>
        <Row>
          {products.map((x, i) => (
            <Col md="3" key={i}>
              <Product image={x.image} {...x}></Product>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}
