import { plantList } from "../Datas/donnee";
import "../Style/Categorie.css";

function Categorie({ catego, setCatego }) {
  const categor = plantList.reduce(
    (acc, plant) =>
      acc.includes(plant.category) ? acc : acc.concat(plant.category),
    []
  );

  return (
    <div className="selectCategory">
      <select
        name=""
        id=""
        value={catego}
        onChange={(e) => setCatego(e.target.value)}
      >
        <option value="">Categories des Plantes</option>
        {categor.map((cat, index) => (
          <option value={cat} key={`${cat}-${index}`}>
            {cat}
          </option>
        ))}
      </select>
    </div>
  );
}
export default Categorie;
