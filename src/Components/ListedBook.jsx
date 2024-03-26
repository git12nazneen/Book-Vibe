import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredReadBook } from '../Utility/localstorage';
import CardBook from './CardBook';
const ListedBook = () => {

  const books = useLoaderData();

  const [clickbooks, setClickBooks] = useState([]);

  useEffect(()=>{
    const storedBookIds = getStoredReadBook();
    if(books.length > 0){

      // const appliedBooks = books.filter(book => storedBookIds.includes(book.Id))

      const appliedBooks = [];
      for(const id of storedBookIds){
        const book = books.find(book => book.Id === id);
        if(book){
          appliedBooks.push(book)
        }
      }

      // console.log(books, storedBookIds ,appliedBooks)
      setClickBooks(appliedBooks);
    }
  },[])

    return (
        <div className='max-w-6xl mx-auto'>
          <h2>books click {clickbooks.length}</h2>
          
          <h1 className="text-4xl text-center font-bold">Books</h1>

        <div className='mb-36 w-96 mx-auto'>
        <details className="dropdown">
        <summary className="m-1 btn">open or close</summary>
        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
            <li><a>Item 1</a></li>
            <li><a>Item 2</a></li>
        </ul>
        </details>
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
              clickbooks.map(bookd => <CardBook key={bookd.id}
              bookd={bookd}
              ></CardBook>)
            }
          </div>
            </TabPanel>
            <TabPanel>
            <h2>Any content 2</h2>
            </TabPanel>
        </Tabs>
          </div>
        </div>
    );
};

export default ListedBook;