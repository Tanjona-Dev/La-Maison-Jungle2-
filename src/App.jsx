import { useState } from "react";
import Banner from "./Components/Banner";
import Shopping from "./Components/Shopping";
import Panier from "./Components/Cart";
import "./Style/App.css"
function App() {
  const [cart, setCart] = useState([]);
  return (
    <div >
      <Banner />
      <div className="flexBody">
      <Panier cart={cart} setCart={setCart} />
      <Shopping cart={cart} setCart={setCart} />
      </div>

    </div>
  );
}

export default App;
