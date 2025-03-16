import {plantList} from "../Datas/donnee";
import '../Style/Shopping.css'
import Emoji from './Emoji'

function Shopping() {
    function imgClick({name, light, water}) {
        const objetReference = {
            1: "peu",
            2: "moderement",
            3: "beaucoups"
        }
        alert(`Vous voulez acheter ${name} ? 🌺✨ Cette plante requiert ${objetReference[water]} d'eau 💧 et ${objetReference[light]} de lumiere 🌞`)
    }
  return (
    <div>
      <ul className="plantList">
        {plantList.map(({ name, price, cover, light, water, id }, index) => (
          <li key={`${id}-${index}`}>
            <img src={cover} alt="" onClick={()=>imgClick({name, light, water})}/>
            <br />
            {name}
            <br />
            prix : {price} euro
            <br />
            <Emoji water={water} light={light} />
            <button>+ Ajouter</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Shopping;
