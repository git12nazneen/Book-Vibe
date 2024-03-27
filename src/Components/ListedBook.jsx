import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import CardBook from './CardBook';
import Wish from './Wish';
import { getStoredReadBook, getStoredWishBook } from '../Utility/localstorage';
const ListedBook = () => {

  const books = useLoaderData();

  const [clickbooks, setClickBooks] = useState([]);
 const [wishBooks, setWishBooks] = useState([])
  
 const [sortBy, setSortBy] = useState(''); 


  // useEffect(() => {
  //   const storedBookIds = getStoredReadBook();
  //   if (Array.isArray(books) && books.length > 0) {
  //     const appliedBooks = storedBookIds.flatMap(id => books.find(book => book.id === id));
  //     setClickBooks(appliedBooks);
  //   }
  // }, [books]);
  
  // useEffect(() => {
  //   const storedWishIds = getStoredWishBook();
  //   if (Array.isArray(books) && books.length > 0) {
  //     const appliedWish = storedWishIds.flatMap(id => books.find(book => book.id === id));
  //     setWishBooks(appliedWish);
  //   }
  // }, [books]);

  useEffect(() => {
    const storedBookIds = getStoredReadBook();
    if (Array.isArray(books) && books.length > 0) {
      const appliedBooks = storedBookIds.flatMap(id => books.find(book => book.id === id));
      // Sort the books based on the selected sorting option
      const sortedBooks = applySorting(appliedBooks);
      setClickBooks(sortedBooks);
    }
  }, [books, sortBy]); // Include sortBy in dependency array

  useEffect(() => {
    const storedWishIds = getStoredWishBook();
    if (Array.isArray(books) && books.length > 0) {
      const appliedWish = storedWishIds.flatMap(id => books.find(book => book.id === id));
      // Sort the wish books based on the selected sorting option
      const sortedWishBooks = applySorting(appliedWish);
      setWishBooks(sortedWishBooks);
    }
  }, [books, sortBy]); // Include sortBy in dependency array

  // Function to apply sorting based on the selected option
  const applySorting = (booksData) => {
    switch (sortBy) {
      case 'Rating':
        return booksData.sort((a, b) => b.rating - a.rating);
      case 'totalPages':
        return booksData.sort((a, b) => b.totalPages - a.totalPages);
        case 'Year':
          return booksData.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
      default:
        return booksData; // Return unsorted books if no sorting option selected
    }
  };

  // Function to handle sorting option change
  const handleSortChange = (option) => {
    setSortBy(option);
  };


    return (
        <div className='max-w-6xl mx-auto'>    
          <h1 className="text-4xl text-center font-bold">Books</h1>

          <div className="flex justify-center items-center">
      <div className='mb-36 mt-4'>
        <details className="dropdown  ">
          <summary className="btn bg-green-500 text-white">Sort by</summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
            <li><a onClick={() => handleSortChange('')}>All</a></li>
            <li><a onClick={() => handleSortChange('Rating')}>Rating</a></li>
            <li><a onClick={() => handleSortChange('totalPages')}>Pages</a></li>
            <li><a onClick={() => handleSortChange('Year')}> Year</a></li>
          </ul>
        </details>
      </div>
    </div>

          <div>
          <Tabs>
            <TabList>
            <Tab>Read Books</Tab>
            <Tab>Wished List</Tab>
            </TabList>

            <TabPanel>
          <div>
            {
              clickbooks.map(bookd => <CardBook
                 key={bookd.id}
                  bookd={bookd}
              ></CardBook>)
            }
          </div>
            </TabPanel>
            <TabPanel>
            <div>
              {
                wishBooks.map(wish => <Wish
                key={wish.id}
                wish={wish}></Wish>)
              }
            </div>
            </TabPanel>
        </Tabs>
          </div>
        </div>
    );
};

export default ListedBook;


