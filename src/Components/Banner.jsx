import logoLMJ from "../assets/logo.png";
import styled from "styled-components";

const H1 = styled.h1`
  text-align: right;
  @media(max-width: 632px){
    text-align: center;
  }
`;
const Image = styled.img`

  height: 50px;
  text-align: right;
  margin-top: 40px;
`;
const Conatainer = styled.div `
  display: flex;
  justify-content: right;
   @media(max-width: 632px){
    text-align: center;
  }
`

function Banner() {
  return (
    <Conatainer className="logo-LMJ">
      <Image src={logoLMJ} alt="logo" />

      <H1>La Maison Jungle</H1>
    </Conatainer>
  );
}
export default Banner;
