import { useState } from "react";
import Banner from "./Components/Banner";
import Shopping from "./Components/Shopping";
import Panier from "./Components/Cart";
import "./Style/App.css";
import Fotter from "./Components/Footer";
import styled from "styled-components";

function App() {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("stcokPanier");
    return savedCart ? JSON.parse(savedCart) : [];
  });
  return (
    <div>
      <Banner />
      <Container className="flexBody">
        <Panier cart={cart} setCart={setCart} />
        <Shopping cart={cart} setCart={setCart} />
      </Container>
      <Fotter />
    </div>
  );
}

const Container = styled.div`
  display: flex;
`;
export default App;
