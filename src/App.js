import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header/Header";
import Home from "./Components/Home";
import SearchPage from "./Components/SearchPage";

function App() {
  return (
    <div className="App">
      <Header />

      <div className="app_page">
        <Routes>
          <Route exact path="/search/:searchTerm " element={<SearchPage />} />
          <Route exact path="/" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
