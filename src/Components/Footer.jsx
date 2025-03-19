import { useState } from "react";

function Fotter() {
  const [Vinput, setVinput] = useState({ nom: "", email: "" });
  function eviter(e) {
    e.preventDefault();
  }
  function MiseAjour(e) {
    setVinput({ ...Vinput, [e.target.name]: e.target.value });
  }
  function afficherAlert() {
    alert(`Nom : ${Vinput.nom} 
        email : ${Vinput.email}`);
    setVinput({ nom: "", email: "" });
  }
  return (
    <div style={{ textAlign: "center" }}>
        <p>Pour les passionnees des Plantes 🌿✨</p>
      <form action="" onSubmit={eviter}>
        <span>Nom : </span>
        <input
          type="text"
          placeholder="nom"
          name="nom"
          value={Vinput.nom}
          onChange={MiseAjour}
        />
        <span>email : </span>
        <input
          type="email"
          placeholder="email"
          name="email"
          value={Vinput.email}
          onChange={MiseAjour}
        />
        <button type="submit" onClick={() => afficherAlert()}>
          envoyer
        </button>
      </form>
    </div>
  );
}
export default Fotter;
