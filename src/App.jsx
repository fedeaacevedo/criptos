import { useState } from "react";
import styled from "@emotion/styled";
import ImagenCripto from './img/imagen-criptos.png';

//Styled component
const Contenedor = styled.div`
  max-width: 900px;
  margin: 0 auto;
`;

const Imagen = styled.img`
  max-width: 400px;
  width: 80%;
  margin: 100px auto 0 auto;
  display: block;
`

// Podemos crear componentes y darles estilo para no depender del codigo css
const Heading = styled.h1`
  font-family: "Lato", sans-serif;
  color: #fff;
`;

function App() {

  return (
  <Contenedor>
    <Imagen 
      src={ImagenCripto}
      alt="imagenes criptomonedas"
    />
    <Heading>Desde app</Heading>;
  </Contenedor>
)}

export default App;
