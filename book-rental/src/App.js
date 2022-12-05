import "./App.css";
import { Routes, Route} from "react-router-dom";
import Login from "./components/Login";
import BookList from "./components/BookList";
import Favourite from "./components/Favourite";
import BooksDetail from "./components/BooksDetail";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import { useState } from "react";

function App() {
  const [status, setStatus] = useState(false);

  const authenticate = ()=>{
    setStatus(true)
  }

  const logout = ()=>{
    setStatus(false)
  }

  return (
    <div className="App">
      <Navbar />
      <Routes>
      <Route path="/" element={<Login auth={authenticate}/>} />
        <Route path="/booklist" element={<BookList logout={logout} status={status}/>} />
        <Route path="/book/:id" element={<BooksDetail />} />
        <Route path="/favourites" element={<Favourite />} />

      </Routes>
      <Footer />
    </div>
  );
}

export default App;


