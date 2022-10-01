import { useState, useEffect } from "react";

function RickMortyFn() {
  const [personajes, setPersonajes] = useState([]);
  const [ pagina, setPagina] = useState(1);

  useEffect(() => {
    console.log("%cse montó el componente", "color:green");

    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((data) => {
        setPersonajes(data.results);
      })
      .catch((error) => console.error(error));
  }, []);

useEffect(()=>{
  console.log("%cse actualizó el componente", "color:brown");
},[personajes])

useEffect(()=>{
return ()=> console.log("%cse desmontó el componente", "color:red");
},[])

const cargarMas = async () => {
  await setPagina(pagina + 1);
  console.log(
    `https://rickandmortyapi.com/api/character?page=${pagina}`
  );

  fetch(`https://rickandmortyapi.com/api/character?page=${pagina}`)
    .then((response) => response.json())
    .then((data) => {
      setPersonajes( data.results);
      
    })
    .catch((error) => console.error(error));
};


  return (
    <div>
      <h2>Soy el componente Rick and Morty Function</h2>
      <ul>
        {personajes.length === 0 && <p>Cargando...</p>}
        {personajes.map((personaje, i) => {
          return (
            <li key={i}>
              <h3>{personaje.name}</h3>
              <img src={personaje.image} alt="avatar" width="150" />
            </li>
          );
        })}
        <button onClick={cargarMas}>Siguiente Página</button>
      </ul>
    </div>
  );
}
export default RickMortyFn;
