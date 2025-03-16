import { useState } from "react";
import Banner from "./Components/Banner";
import Shopping from "./Components/Shopping";
import Panier from './Components/Cart'

function App() {
  const [cart, setCart] = useState([]);
  return (
    <>
      <Banner />
      < Panier cart={cart} setCart={setCart} />
      <Shopping cart={cart} setCart={setCart} />
    </>
  );
}

export default App;
