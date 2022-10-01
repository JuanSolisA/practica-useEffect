import "./App.css";
import RickMortyClass from "./components/RickMortyClass";
import RickMortyFn from "./components/RickMortyFn";
import Home from "./components/Home";
import { Route, Link, Routes, Router } from "react-router-dom";

function App() {
  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/rick-morty">Rick and Morty</Link>
      <hr />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/rick-morty" element={<RickMortyClass />} /> */}
        <Route path="/rick-morty" element={<RickMortyFn />} />
      </Routes>
    </>
  );
}

export default App;
