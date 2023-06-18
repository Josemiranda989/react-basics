import "./App.css";
import { CssModule } from "./components/CssModule/CssModule";
import { CssExterno } from "./components/CssExterno/CssExterno";
import { CssInline } from "./components/CssInline/CssInline";

function App() {
  return (
    <>
      <h1>Formas de Agregar estilos en React</h1>
      <CssModule />
      <CssExterno />
      <CssInline />
      <ul>
        <li>
          Con Javascript{" "}
          <a href="https://styled-components.com/docs/basics#getting-started">
            (styled components)
          </a>
        </li>
        <li>
          Preprocesadores{" "}
          <a href="https://create-react-app.dev/docs/adding-a-sass-stylesheet/">
            (SASS)
          </a>
        </li>
        <li>
          <a href="https://desarrolloweb.com/colecciones/frameworks-css"></a>
          Frameworks de estilos
        </li>
      </ul>
    </>
  );
}

export default App;
