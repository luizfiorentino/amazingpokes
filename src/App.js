import logo from "./logo.svg";
import "./App.css";
import Title from "./Components/Title";
import { Routes, Route } from "react-router-dom";
import AboutPage from "./Components/Pages/AboutPage";
import DiscoverPage from "./Components/Pages/DiscoverPage";
import HomePage from "./Components/Pages/HomePage";
import NavBar from "./Components/NavBar";

function App() {
  return (
    <div className="App">
      <Title />
      <NavBar />

      <Routes>
        <Route path="/discover" element={<DiscoverPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
