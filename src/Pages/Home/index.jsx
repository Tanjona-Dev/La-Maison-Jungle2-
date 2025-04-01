import { plantList } from "../../Datas/donnee";
import styled from "styled-components";
import Emoji from "../../Components/Emoji";
import Cart from "../../Components/Cart";
import { useState } from "react";

function Home() {
  const [cart, setCart] = useState([]);

  function addToCart({ name, price }) {
    const chercherNom = cart.find((plant) => plant.name === name);
    if (chercherNom) {
      const filtrerNom = cart.filter((plant) => plant.name !== name);
      setCart([...filtrerNom, { name, price, amount: chercherNom.amount + 1 }]);
    } else {
      setCart([...cart, { name, price, amount: 1 }]);
    }
    console.log(name);
  }
  return (
    <Container>
      <Panier>
        <Cart cart={cart} setCart={setCart} />
      </Panier>
      <Container2>
        <H1>La Maison Jungle</H1>
        <Ul>
          {plantList.map(({ name, cover, id, water, light, price }, index) => (
            <li key={`${index}-${id}`}>
              <ImgContainer>
                <SpanPrice>{price} EUR</SpanPrice>
                <Image src={cover} alt="plant-cover" />
              </ImgContainer>
              <br />
              {name}
              <br />
              {price} EUR
              <Emoji water={water} light={light} />
              <button onClick={() => addToCart({ name, price })}>
                Ajouter
              </button>
            </li>
          ))}
        </Ul>
      </Container2>
    </Container>
  );
}
const Image = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 10px;
  display: block;
  border-radius: 15px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

  @media(max-width: 768px){
    width: 200px;
    height: 200px;
  }

  &:hover {
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.3);
`;
const Ul = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  list-style: none;
  padding: 0;
`;
const SpanPrice = styled.span`
  position: absolute;
  top: 80%;
  right: 12px;
  background: rgba(255, 255, 255, 0.8);
  color: #2e8b57;
  padding: 8px 12px;
  border-radius: 20px;
  font-weight: bold;
  font-size: 14px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.3);
  }
`;
const ImgContainer = styled.div`
  position: relative;
  display: inline-block;
`;
const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%; /* Assurer que le container prend toute la largeur disponible */
  gap: 10px; /* Espacement entre les éléments */
`;
const Panier = styled.div`
  width: 30vw; /* Taille du panier */
  @media (max-width: 768px) {
    width: 30%; /* Prendre toute la largeur sur les petits écrans */
    margin-left: -20px;
    padding: 0;
  }
`;
const H1 = styled.h1`
  @media(max-width: 768px){
    font-size: 1.5em;
  }
`
const Container2 = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: space-around; /* Répartir les éléments de manière uniforme */
  width: calc(100% - 35vw); /* Occupation restante de la largeur après le panier */
`;

export default Home;
