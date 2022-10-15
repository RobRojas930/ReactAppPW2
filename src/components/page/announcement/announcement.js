import React from 'react';
import {
  HeroImage,
  HeroText,
  HeroTitle,
  HeroTextButton,
  HeroDescription,
} from './styles';

export const Announcement = () => {
  return (
    <HeroImage>
      <HeroText>
        <HeroTitle>Estrena hoy, con nuestros mejores productos</HeroTitle>
        <HeroDescription>Las mejores ofertas solo al 2x1</HeroDescription>
        <HeroTextButton>Entrar</HeroTextButton>
      </HeroText>
    </HeroImage>
  );
};
