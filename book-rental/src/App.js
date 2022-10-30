import "./App.css";
import { Routes, Route} from "react-router-dom";
import BookList from "./components/BookList";
import Favourite from "./components/Favourite";
import BooksDetail from "./components/BooksDetail";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Cart  from "./components/Cart";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<BookList />} />
        <Route path="/book/:id" element={<BooksDetail />} />
        <Route path="/favourites" element={<Favourite />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;


