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
        <li>Con Javascript (styled components)</li>
        <li>Preprocesadores (SASS)</li>
        <li>Frameworks de estilos</li>
      </ul>
    </>
  );
}

export default App;
