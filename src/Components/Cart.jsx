function Panier({cart, setCart}) {
  return (
    <div>
      <h3>Panier</h3>
      <ul>
        {cart.map(({name, price, amount},index)=> <li key={index}>
            🌿
            ({amount})
            {name}
            <br />
            Prix : {price} euro
        </li>)}
      </ul>
    </div>
  );
}
export default Panier;
