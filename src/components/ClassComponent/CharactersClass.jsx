import { Component } from "react";

class ClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [],
    };
  }

  componentDidMount() {
    this.apiCall("https://rickandmortyapi.com/api/character/1,2,3,4");
  }

  apiCall(url) {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        this.setState({ characters: data });
      });
  }

  render() {
    const { characters } = this.state;

    return (
      <>
        <h2>Class Component</h2>
        <div className="card-container" style={{ backgroundColor: "#A0C49D" }}>
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
}

export default ClassComponent;
