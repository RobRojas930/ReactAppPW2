import React from 'react';
import {
  ProductCard,
  ProductImage,
  ProductTitle,
  ProductPrice,
  ProductButton,
} from './styles';

export const Product = ({ name, price, description, img }) => {
  return (
    <ProductCard>
      <ProductImage img={img}></ProductImage>
      <ProductTitle>{name}</ProductTitle>
      <ProductPrice>{price}</ProductPrice>
      <p>{description}</p>
      <ProductButton>Add to Car</ProductButton>
    </ProductCard>
  );
};
