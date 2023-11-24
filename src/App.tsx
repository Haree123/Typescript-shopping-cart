import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./routes/home";
import Store from "./routes/store";
import About from "./routes/about";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
