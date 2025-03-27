import { useState, useEffect } from "react";
import styled from "styled-components";

function Panier({ cart, setCart }) {
  const [isOpen, setIsOpen] = useState(true);
  const Total = cart.reduce(
    (acc, plant) => acc + plant.amount * plant.price,
    0
  );

  useEffect(() => {
    localStorage.setItem("stcokPanier", JSON.stringify(cart));
  }, [cart]);

  return isOpen ? (
    <Container>
      <Boutton onClick={() => setIsOpen(false)}>fermer</Boutton>
      <h3>Panier</h3>
      <Ul>
        {cart.map(({ name, price, amount }, index) => (
          <li key={index}>
            🌿 ({amount}){name}
            <br />
            Prix : {price} euro
          </li>
        ))}
      </Ul>
      <span>Total : {Total} euro</span>
      <br />
      <Boutton onClick={() => setCart([])}>vider</Boutton>
    </Container>
  ) : (
    <Boutton2 onClick={() => setIsOpen(true)}>Ouvrir le Panier</Boutton2>
  );
}
const Container = styled.div`
  background-color: rgb(102, 172, 137, 0.9);
  width: 250px;

  @media (max-width: 380px) {
    font-size: 0.7em;
    text-align: left;
  }
`;
const Boutton = styled.button`
  margin-top: 3px;
  width: 95%;
`;
const Ul = styled.ul`
  list-style: none;
  padding-left: 0;
  margin-left: 10px;
`;
const Boutton2 = styled.button`
  height: 50px;
  @media (max-width: 380px) {
    font-size: 0.6em;
    margin-top: 45px;
  }
`;
export default Panier;
