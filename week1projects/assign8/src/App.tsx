import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Details from "./pages/Details";
import Book from "./pages/Book";
import Confirm from "./pages/Confirm";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movie/:id" element={<Details />} />
      <Route path="/book/:id" element={<Book />} />
      <Route path="/confirm" element={<Confirm />} />
    </Routes>
  );
}

export default App;
