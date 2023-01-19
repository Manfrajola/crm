import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GlobalStyle from "./styles/GlogalStyle";
import Home from "./pages/Home";
import Equipeb from "./pages/Equipeb";
import Equipec from "./pages/Equipec";
import Equipej from "./pages/Equipej";


function App() {
  return (
    <>
      <Router>
        <GlobalStyle />
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/equipeb" element={<Equipeb />} />
            <Route path="/equipec" element={<Equipec />} />
            <Route path="/equipej" element={<Equipej />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
