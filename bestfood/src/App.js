import { Route, Routes } from "react-router";
import "./App.css";
import HomePage from "./pages/HomePage";
import RestaurentPage from "./pages/RestaurentPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="restaurent/:resId" element={<RestaurentPage />} />
      </Routes>
    </div>
  );
}

export default App;
