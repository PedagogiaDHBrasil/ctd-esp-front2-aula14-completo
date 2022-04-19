import React from "react";
import styled from "styled-components";

// styled-components
const Div = styled.div`
  padding: 124px 48px;
  background: url("wallpaper.png");
  background-repeat: no-repeat;
  background-position: center;
`;

const H1 = styled.h1`
  font-size: 32px;
  color: white;
`;

const P = styled.p`
  font-size: 16px;
  color: white;
  line-height: 160%;
`;

const Button = styled.button`
  margin-right: 32px;
  font-size: 18px;
  border-radius: 4px;
  border: none;
  padding: 12px 32px;
  background-color: ${(props) => (props.favorite ? "yellow" : "purple")};
  color: ${(props) => (props.favorite ? "black" : "white")};
  cursor: pointer;
`;

const Banner = () => {
  return (
    <Div>
      <H1>Rick and Morty</H1>
      <P>
        Rick and Morty (em português Rick e Morty) é uma série de animação
        adulta norte-americana de comédia e ficção científica criada por Justin
        Roiland e Dan Harmon para o bloco de programação noturno Adult Swim,
        exibido no canal Cartoon Network.
      </P>
      <Button>Assistir Trailer</Button>
      <Button favorite>Salvar no favoritos</Button>
    </Div>
  );
};

export default Banner;
