import styled from "styled-components";
function Cart({ cart, setCart }) {
  return (
    <Container>
      <h3>Panier</h3>
      <div>
        <Ul>
          {cart.map((plant, index) => (
            <Li key={index}>
              .{plant.amount}
              <br />
              {plant.name}
            </Li>
          ))}
        </Ul>
        <Boutton onClick={() => setCart([])}>Vider</Boutton>
      </div>
    </Container>
  );
}
const Container = styled.div`
   background:  #2e8b57;
  height: 100%;
  width: 250px;
  @media(max-width: 768px){
    width: auto;
  }
`;
const Boutton = styled.button`
    width: 80%;
    @media(max-width: 768px){
        padding: 2px;
        margin-left: 7px;
    }
`
const Ul = styled.ul`
  list-style: none;
  padding: 0;
`;
const Li = styled.li``;

export default Cart;
