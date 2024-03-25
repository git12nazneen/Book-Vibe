
import { CiStar } from "react-icons/ci";

const Book = ({book}) => {
  
   
    const {bookName, author, image, rating, category, tags} = book
    return (
        <div>
         
            <div className="flex flex-col w-80 p-5 my-4 space-y-6 overflow-hidden rounded-lg shadow-md border border-gray-300 text-black">
	<div>
		<img src={book.image} alt="" className=" w-full mb-4 lg:h-52 sm:h-96 bg-gray-500" />
        <div className="flex flex-wrap justify-between my-3">
            <div className="space-x-2 text-green-600 bg-green-100 rounded-2xl px-4 py-2 text-sm">
                {tags[0]}
            </div>
            <div className="space-x-2 text-green-600 bg-green-100 rounded-2xl px-4 py-2 text-sm">
            {tags[1]}
            </div>
        </div>
		<h2 className="mb-1 text-xl font-bold text-gray-700">{bookName}</h2>
		<p className="text-sm text-gray-600 mb-4">By {author}</p>
        <hr />
	</div>
	<div className="flex flex-wrap justify-between">
		<div className="space-x-2 text-gray-600">
			<p>{category}</p>
		</div>
		<div className="flex space-x-2 text-sm text-gray-600">
        <p> {rating}</p>
        <p className="mt-1"><CiStar /></p>
            
		</div>
	</div>
</div>
        </div>
    );
};

export default Book;