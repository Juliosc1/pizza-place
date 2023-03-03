import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Specials from "./pages/Specials";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />}/>
          <Route path="/menu" exact element={<Menu />}/>
          <Route path="/specials" exact element={<Specials />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
