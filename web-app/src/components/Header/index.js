import React from 'react';
import { Container } from './styles';

export default function Header(){
  return (
    <Container>
      <h1>SkinCancer<strong>Classifier</strong></h1>
      <nav>
        <a href="#">UPLOAD</a>
        <a href="#">RESULTADO</a>
        <a href="#">SOBRE</a>
      </nav>
    </Container>
  );
}
