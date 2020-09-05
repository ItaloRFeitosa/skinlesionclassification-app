import React from "react";
import { Container } from "./styles";

import { Link } from "react-router-dom";

export default function Header() {
  return (
    <Container>
      <h1>
        SkinCancer<strong>Classifier</strong>
      </h1>
      <nav>
        <Link to="/">Upload</Link>
        <a href="#">Resultado</a>
        <a href="#">Sobre</a>
      </nav>
    </Container>
  );
}
