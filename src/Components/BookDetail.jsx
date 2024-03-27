import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getStoredReadBook, saveBookRead, saveBookWish } from "../Utility/localstorage";

const BookDetail = () => {
    const bookdetail = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const book = bookdetail.find(book => book.id === idInt);
  
    const handleApplyjob = () => {
        const added = saveBookRead(idInt);
        if (added) {
            toast.success("Book added to read");
        } else {
            toast.error("Book already in read list");
        }
    }

    const handleWishlist = () => {
        const isAlreadyRead = getStoredReadBook().includes(idInt);
        if (isAlreadyRead) {
            toast.error("Book already in read list. Cannot add to wishlist.");
        } else {
            const added = saveBookWish(idInt);
            if (added) {
                toast.success('Book added to wishlist');
            } else {
                toast.error('Book already in wishlist');
            }
        }
    }
    return (
        <div className="max-w-6xl mx-auto">

            <section className=" text-gray-100">
	<div className="container flex flex-col-reverse mx-auto lg:flex-row">
		
		<div className="lg:w-1/2 xl:w-3/6 mt-12">
			<div className="flex items-center justify-center p-4 md:p-8 lg:p-4">
				<img src={book.image} alt="" className="rounded-lg shadow-lg  h-full" />
			</div>
		</div>
        <div className="flex flex-col px-6  space-y-6 rounded-sm sm:p-8 lg:p-12 lg:w-1/2 xl:w-3/6  text-gray-900">
			<div className="flex space-x-2 sm:space-x-4">
				
				<div className="space-y-2">
					<p className="text-lg font-medium leading-snug">{book.bookName}</p>
					<p className="leading-snug">By: {book.author}</p>
				</div>
			</div>
			<div className="flex space-x-2 sm:space-x-4">
				<div className="space-y-2">
					<p className="text-lg font-medium leading-snug">{book.category}</p>
				</div>
			</div>
            <hr />
			<div className="flex space-x-2 sm:space-x-4">
				<div className="space-y-2">
					<p className="leading-snug">{book.review}</p>	
				</div>  
			</div>
            <div className="flex gap-2">
                    <div>Tag</div>
                    <div className="space-x-2 text-green-600 bg-green-100 rounded-2xl px-4 py-2 text-sm">
                        #{book.tags[0]}
                    </div>
                    <div className="space-x-2 text-green-600 bg-green-100 rounded-2xl px-4 py-2 text-sm">
                    #{book.tags[1]}
                      </div>
                </div>
                <hr />
                <div className="flex justify-between">
                    <div>
                        <h3 className="text-gray-500">Number of Pages</h3>
                    </div>
                    <div>
                        <h3 className="font-bold">{book.totalPages}</h3>
                    </div>
                </div>
                <div className="flex justify-between">
                    <div>
                        <h3 className="text-gray-500">Publisher</h3>
                    </div>
                    <div>
                        <h3 className="font-bold">{book.publisher}</h3>
                    </div>
                </div>
                <div className="flex justify-between">
                    <div>
                        <h3 className="text-gray-500">Year Of Publishing</h3>
                    </div>
                    <div>
                        <h3 className="font-bold">{book.yearOfPublishing}</h3>
                    </div>
                </div>
                <div className="flex justify-between">
                    <div>
                        <h3 className="text-gray-500">Rating</h3>
                    </div>
                    <div>
                        <h3 className="font-bold">{book.rating}</h3>
                    </div>
                </div>
            <div className="flex">
            <div className="mr-5">
                <a onClick={handleApplyjob} className="btn bg-green-500 hover:bg-blue-500 text-white">Read</a>
                </div>
                <div>
                <a onClick={handleWishlist} className="btn bg-blue-500 hover:bg-green-500 text-white">Wishlist</a>
                </div>
            </div>
            <ToastContainer />
		</div>
	</div>
</section>
        </div>
    );
};

export default BookDetail;
