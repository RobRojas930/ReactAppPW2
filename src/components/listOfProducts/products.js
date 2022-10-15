import 'regenerator-runtime/runtime';
import React, { Component } from 'react';
import { Product } from '../product/product';
import { Col, Container, Row } from 'reactstrap';
const { APIURL, TOKEN } = require('../../constants.json');
export class ListOfProducts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }
  async componentDidMount() {
    const response = fetch(`${APIURL}/products`, {
      method: 'get',
      headers: new Headers({
        'Cache-Control': 'no-cache',
        Authorization: 'Bearer ' + TOKEN,
        'Content-Type': 'application/json',
      }),
      'x-frame': 'same-origin',
      mode: 'no-cors',
    });
    response.then(async (resp) => {
      const respJson = await resp.json();
      if (respJson.success) {
        this.setState({
          products: respJson.Data,
        });
      }
    });
  }
  render() {
    var products = this.state.products || [];
    return (
      <Container fluid>
        <Row>
          {products.map((x, i) => (
            <Col md="3" key={i}>
              <Product {...x}></Product>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}
