import ClassComponent from "./components/ClassComponent/ClassComponent";
import FunctionalComponent from "./components/FunctionalComponent";
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
      </Routes>
    </>
  );
}

export default App;
