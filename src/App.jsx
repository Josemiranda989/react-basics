import ClassComponent from "./components/ClassComponent/CharactersClass";
import FormClass from "./components/ClassComponent/FormClass";
import FunctionalComponent from "./components/FunctionalComponent/CharactersHooks";
import FormsHooks from "./components/FunctionalComponent/FormHooks";
import { Navbar } from "./components/Navbar/Navbar";
import { Styling } from "./components/Styling";

import { Routes, Route } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <h1>This is the home page</h1>
            </>
          }
        />

        <Route path="/styles" element={<Styling />} />
        <Route path="/class" element={<ClassComponent />} />
        <Route path="/functional" element={<FunctionalComponent />} />
        <Route path="/forms-hooks" element={<FormsHooks/>} />
        <Route path="/forms-class" element={<FormClass />} />
      </Routes>
    </>
  );
}

export default App;
