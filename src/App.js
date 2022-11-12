import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MailLayout } from "./layouts/main";
import { Home } from "./pages/home";
import { Nosotros } from "./pages/nosotros";
import { Contacto } from "./pages/contacto";
import { Simbolos } from "./pages/simbolos";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<MailLayout />}>
          <Route path={"/"} element={<Home />} />
          <Route path={"/nosotros"} element={<Nosotros />} />
          <Route path={"/contacto"} element={<Contacto />} />
          <Route path={"/simbolos"} element={<Simbolos />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
