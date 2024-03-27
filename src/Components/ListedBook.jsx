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
  
  useEffect(() => {
    const storedBookIds = getStoredReadBook();
    if (Array.isArray(books) && books.length > 0) {
      const appliedBooks = storedBookIds.flatMap(id => books.find(book => book.id === id));
      setClickBooks(appliedBooks);
    }
  }, [books]);
  
  useEffect(() => {
    const storedWishIds = getStoredWishBook();
    if (Array.isArray(books) && books.length > 0) {
      const appliedWish = storedWishIds.flatMap(id => books.find(book => book.id === id));
      setWishBooks(appliedWish);
    }
  }, [books]);

    return (
        <div className='max-w-6xl mx-auto'>    
          <h1 className="text-4xl text-center font-bold">Books</h1>

          <div className="flex justify-center items-center">
      <div className='mb-36 mt-4'>
        <details className="dropdown  ">
          <summary className="btn bg-green-500 text-white">Sort by</summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
            <li><a>All</a></li>
            <li><a>Rating</a></li>
            <li><a>Pages</a></li>
            <li><a>Item 2</a></li>
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


