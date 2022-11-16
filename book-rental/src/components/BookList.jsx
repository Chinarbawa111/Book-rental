import React, {useState,useEffect} from 'react'
import '../App';
import { API_URL } from '../API';
import axios from 'axios';
import  { useAppContext } from "./context/appContext";
const BookList = () => {
    const [books, setBooks] = useState([]);

const { favourites, addToFavourites, removeFromFavourites } = useAppContext();

console.log("favourite are", favourites);


const favouritesChecker = (id) => {
    const boolean = favourites.some((book) =>book.id ===id);
    return boolean;
}
    useEffect(() => {
        axios.get(API_URL)
        .then((res) => {
            console.log(res.data);
            setBooks(res.data);
        })
        .catch((err) => console.log(err));

    }, []);

  return <div className='book-list'>
      {books.map((book)=> (
        <div key={book.id} className="book">
            <div>
                <h4>{book.title}</h4>
                </div>
           <div>
            <img src={book.image_url} alt="#"/>
            </div>
           <div>
            {favouritesChecker(book.id) ?(
                 <button onClick={() => removeFromFavourites(book.id)}>
                 Remove From Favourite</button>
            ):(
            <button onClick={()=> addToFavourites(book)}>
            Add to Favourite</button>)}
            </div>
           <div><button>Add to Cart</button></div>
           </div>
      ))}
   </div>;
  
};

export default BookList;
