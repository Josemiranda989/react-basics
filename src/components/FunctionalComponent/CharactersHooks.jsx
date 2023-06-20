import { useState, useEffect } from "react";

function FunctionalComponent() {
  const [characters, setCharacters] = useState([]);

  const apiCall = (url) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCharacters(data);
      });
  };

  useEffect(() => {
    apiCall("https://rickandmortyapi.com/api/character/1,2,3,4");
  }, []);

  return (
    <>
      <h2>Functional Component with Hooks</h2>
      <div className="card-container" style={{ backgroundColor: "tomato" }}>
        {characters.map((character) => (
          <div key={character.id} className="card">
            <img src={character.image} alt={character.name} />
            <h3>{character.name}</h3>
            <p>Status: {character.status}</p>
            <p>Species: {character.species}</p>
            <p>Gender: {character.gender}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default FunctionalComponent;
