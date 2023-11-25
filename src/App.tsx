import { BrowserRouter, Route, Routes } from "react-router-dom";

import Layout from "./components/layout";
import Home from "./routes/Home";
import Store from "./routes/Store";
import About from "./routes/About";

import { Provider } from "react-redux";
import { store } from "./redux/store/redux-store";


function App() {
  return (
    <Provider store={store}>
      <BrowserRouter basename="/">
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/store" element={<Store />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
