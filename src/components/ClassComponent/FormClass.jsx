import React, { Component } from "react";

class Formulario extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nombre: "",
      apellido: "",
      mensaje: "",
    };

    this.nombreRef = React.createRef();
    this.apellidoRef = React.createRef();
  }

  componentDidMount() {
    this.nombreRef.current.focus();
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { nombre, apellido } = this.state;
    this.setState({ mensaje: `Hola, ${nombre} ${apellido}!` });
    // Puedes realizar cualquier otra acción con los valores aquí, como enviarlos a un servidor
  };

  handleNombreChange = (e) => {
    this.setState({ nombre: e.target.value });
  };

  handleApellidoChange = (e) => {
    this.setState({ apellido: e.target.value });
  };

  render() {
    const { nombre, apellido, mensaje } = this.state;

    return (
      <div>
        <h1>Form with Class component</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Nombre:
            <input
              type="text"
              ref={this.nombreRef}
              value={nombre}
              onChange={this.handleNombreChange}
            />
          </label>
          <br />
          <label>
            Apellido:
            <input
              type="text"
              ref={this.apellidoRef}
              value={apellido}
              onChange={this.handleApellidoChange}
            />
          </label>
          <br />
          <button type="submit">Enviar</button>
        </form>
        <p>{mensaje}</p>
      </div>
    );
  }
}

export default Formulario;
