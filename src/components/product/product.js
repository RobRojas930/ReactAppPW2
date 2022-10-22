import React from 'react';
import {
  ProductCard,
  ProductImage,
  ProductTitle,
  ProductPrice,
  ProductButton,
} from './styles';

export const Product = ({ name, price, description, image }) => {
  console.log('Image', image)
  return (
    <ProductCard>
      <ProductImage src={image}></ProductImage>
      <ProductTitle>{name}</ProductTitle>
      <ProductPrice>{price}</ProductPrice>
      <p>{description}</p>
      <ProductButton>Add to Car</ProductButton>
    </ProductCard>
  );
};
