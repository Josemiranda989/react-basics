import { useState, useRef, useEffect } from "react";

const Formulario = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [mensaje, setMensaje] = useState("");

  const nombreRef = useRef(null);
  const apellidoRef = useRef(null);

  useEffect(() => {
    // Enfoque automático en el primer campo de texto al cargar el componente
    nombreRef.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMensaje(`Hola, ${nombre} ${apellido}!`);
    // Puedes realizar cualquier otra acción con los valores aquí, como enviarlos a un servidor
  };

  return (
    <div>
      <h1>Form with Hooks</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input
            type="text"
            ref={nombreRef}
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </label>
        <br />
        <label>
          Apellido:
          <input
            type="text"
            ref={apellidoRef}
            value={apellido}
            onChange={(e) => setApellido(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Enviar</button>
      </form>
      <p>{mensaje}</p>
    </div>
  );
};

export default Formulario;
