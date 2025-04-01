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
      <div>
        <h1>La Maison Jungle</h1>
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
      </div>
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

  &:hover {
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.3);
`;
const Ul = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  list-style: none;
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
  justify-content: space-between;
  flex-direction: row;
`;
const Panier = styled.div`

  @media (max-width: 768px) {
    max-width: 25vw;
    margin: -24px;
    padding: 0;
    text-align: left;
  }
`;
export default Home;
