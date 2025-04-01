import "./App.css";
import Home from "./Pages/Home";
import Header from "./Components/Header";
import Formulaire from "./Pages/Formulaire";
import { BrowserRouter as Router, Routes, Route } from "react-router";

function App() {
  return (
    <Router basename="/La-Maison-Jungle2-">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Formulaire" element={<Formulaire />} />
      </Routes>
    </Router>
  );
}

export default App;
