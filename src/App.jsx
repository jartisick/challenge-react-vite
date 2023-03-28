import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./views/Home/Home";
import Responses from "./views/responses/Responses";
function App() {
  const [count, setCount] = useState(0);

  return (
    <Routes>
      <Route path="/" element={<Home />}>
        Hola
      </Route>
      <Route path="responses/:user" element={<Responses />} />
    </Routes>
  );
}

export default App;
