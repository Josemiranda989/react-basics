
export const CssInline = () => {
    const character = {
      display: "block",
      border: "1px solid skyblue",
      height: "auto",
      padding: "10px",
      width: "90%",
      backgroundColor: "#f0d9ab",
    };

    const character__header = {
      padding: "10px",
    };

    const character__body = {
      color: "tomato",
    };

    return (
      <div style={character}>
        <div style={character__header}>
          <h1>CSS INLINE</h1>
        </div>
        <div style={character__body}>
          <p>Agregando estilos en linea, otra opción en una variable</p>
        </div>
        <div style={{ color: "gray", textAlign: "center"}}>
          <p>All rights reserved</p>
        </div>
      </div>
    );
}
