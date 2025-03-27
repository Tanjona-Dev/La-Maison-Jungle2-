import { plantList } from "../Datas/donnee";
import Emoji from "./Emoji";
import { useState } from "react";
import Categorie from "./Categories";
import styled from "styled-components";

function Shopping({cart, setCart}) {
  const [catego, setCatego] = useState("");

  function imgClick({ name, light, water }) {
    const objetReference = {
      1: "peu",
      2: "moderement",
      3: "beaucoups",
    };
    alert(
      `Vous voulez acheter ${name} ? 🌺✨ Cette plante requiert ${objetReference[water]} d'eau 💧 et ${objetReference[light]} de lumiere 🌞`
    );
  }
  function addToCart({name, price}) {
    const chercherNom = cart.find(plant => plant.name === name)
    if (chercherNom) {
       const filtrerNom = cart.filter(plant => plant.name !== name)
        setCart([...filtrerNom, {name, price, amount: chercherNom.amount + 1}])
    }else{
        setCart([...cart, {name, price, amount: 1}])
    }
  }
  return (
    <div>
      <Categorie catego={catego} setCatego={setCatego} />
      <UlContainer className="plantList">
        {plantList.map(
          ({ name, price, cover, light, water, id, category }, index) =>
            !catego || catego === category ? (
              <li key={`${id}-${index}`}>
                <Image
                  src={cover}
                  alt=""
                  onClick={() => imgClick({ name, light, water })}
                />
                <br />
                {name}
                <br />
                prix : {price} euro
                <br />
                <Emoji water={water} light={light} />
                <button onClick={()=>addToCart({name, price})}>+ Ajouter</button>
              </li>
            ) : null
        )}
      </UlContainer>
    </div>
  );
}
const Image = styled.img`
  width: 250px;
  height: 30vh;
  border-radius: 10px;
`
const UlContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: left;
  gap: 2%;
  list-style: none;

`
export default Shopping;
