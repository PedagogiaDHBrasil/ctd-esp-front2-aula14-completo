import React, { useState, useEffect } from "react";
import styled from "styled-components";

// styled-components
const Section = styled.section`
  padding: 16px 48px;
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
`;

const Article = styled.article`
  border: 1px solid #ccc;
  flex-grow: 1;
  text-align: center;
  border-radius: 8px;
  padding: 8px;
`;

const Image = styled.img`
  border-radius: 4px;
`;

const H2 = styled.h2`
  font-size: 24px;
  text-align: center;
  margin-top: 56px;
`;

const H3 = styled.h3`
  font-size: 24px;
  color: blue;
  ${({ id }) => id === "Female" && "color: red;"}
`;

interface CharacterProps {
  id: number;
  image: string;
  name: string;
  gender: string;
}

const Character = () => {
  const [character, setCharacter] = useState([]);

  useEffect(() => {
    const fetchCharacter = () =>
      fetch(`https://rickandmortyapi.com/api/character`)
        .then((response) => response.json())
        .then((character) => {
          setCharacter(character.results);
        });
    fetchCharacter();
  }, []);

  return (
    <>
      <H2>Alguns personagens da série</H2>
      <Section>
        {character.map((data: CharacterProps) => {
          return (
            <Article key={data.id}>
              <Image src={data.image} alt={data.name} />

              <H2>{data.name}</H2>
              <H3 id={data.gender}>{data.gender}</H3>
            </Article>
          );
        })}
      </Section>
    </>
  );
};

export default Character;
