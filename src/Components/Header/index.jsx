import { Link } from "react-router";

function Header() {
    return(
        <div>
            <Link to={`/`}>Accueil</Link>
            <Link to={`/Formulaire`}>Formulaire</Link>
        </div>
    )
}
export default Header