import { CssInline } from "./CssInline/CssInline";
import { CssModule } from "./CssModule/CssModule";
import { CssExterno } from "./CssExterno/CssExterno";

export const Styling = () => {
  return (
    <>
      <h1>Formas de Agregar estilos en React</h1>
      <CssInline />
      <CssModule />
      <CssExterno />

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
};
