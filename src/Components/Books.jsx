import { useEffect, useState } from "react";
import Book from "./Book";



const Books = () => {
 
   const [books, setBooks] = useState([])
    useEffect(()=>{
        fetch('fakedata.json')
        .then(res => res.json())
        .then(data => setBooks(data))
    },[])

    return (
        <div className="max-w-6xl mx-auto my-10">
            <h1 className="text-4xl text-center font-bold">Books</h1>
            <div className="grid grid-cols-3 gap-4">
              {
                books.map(book => <Book key={book.id}
                book={book}></Book>)
              }
            </div>
        </div>
    );
};

export default Books;