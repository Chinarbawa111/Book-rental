import React from 'react'
import '../App';
import  { useAppContext } from "./context/appContext";

export const Favourite = () => {

  const { favourites, addToFavourites, removeFromFavourites } = useAppContext();

  console.log("favourite are", favourites);
  
  
  const favouritesChecker = (id) => {
      const boolean = favourites.some((book) =>book.id ===id);
      return boolean;
  }

  return <div className="favourites">
        {favourites.length > 0 ? favourites.map((book)=> (
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
      )):<h2>you don't have any favourites books yet</h2>}
    </div>; 

};
export default Favourite;