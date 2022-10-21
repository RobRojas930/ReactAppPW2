import 'regenerator-runtime/runtime';
import React, { Component } from 'react';
import { Product } from '../product/product';
import { Col, Container, Row } from 'reactstrap';
import API from './../../utils/api';
const { APIURL, TOKEN } = require('../../constants.json');
export class ListOfProducts extends Component {
  constructor(props) {
    super(props);
    this.api = new API();
    this.state = {
      products: props.products,
    };
  }
  async getProducts() {
    this.api.Request({
      method: 'GET',
      url: '/products',
      headers: [
        { header: 'Content-Type', value: 'application/json' },
        { header: 'Authorization', value: `BEARER ${TOKEN}` },
        { header: 'Access-Control-Allow-Origin', value: `*` },
        { header: 'Access-Control-Allow-Credentials', value: 'true' },
        { header: 'Access-Control-Allow-Headers', value: 'Authorization' },
        { header: 'Access-Control-Allow-Methods', value: 'GET, POST, PUT, DELETE' },
      ],
      callback: async (response) => {
        console.log('response', response);
        if (response.success) {
          this.setState({
            products: response.data.products,
          });
          console.log('Products', response.data.products);
        }
      },
    });
  }
  async componentDidMount() {
    try {
      this.getProducts();
    } catch (error) {}
  }
  render() {
    var products = this.state.products || [];
    console.log('Products2', products);
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
