import sun from "../../assets/sun.svg";
import waterImage from "../../assets/water.svg";

function Emoji({ water, light }) {
  const tableau = [1, 2, 3];
  return (
    <div>
      {tableau.map((nbr, index) =>
        water >= nbr ? (
          <span key={index}>
            <img src={waterImage} alt="" />
          </span>
        ) : null
      )}
      <br />
      {tableau.map((nbr1, index) =>
        light >= nbr1 ? (
          <span key={index}>
            <img src={sun} alt="" />
          </span>
        ) : null
      )}
    </div>
  );
}
export default Emoji;
