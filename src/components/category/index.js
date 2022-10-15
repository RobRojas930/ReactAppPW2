import React from 'react';
import { Button, Emoji, Title, Content } from './styles';

export const Category = ({
  path = 'https:www.google.com',
  emoji = '😒',
  bgColor = '#191970',
  bgColor2 = '#6d6dff',
  text = 'Frutas y verduras',
}) => (
  <div>
    <Button href={path} bgColor={bgColor}>
      <Content>
        <Title>{text}</Title>
        <Emoji bgColor={bgColor2}>{emoji}</Emoji>
      </Content>
    </Button>
  </div>
);
