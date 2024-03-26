

const CardBook = ({bookd}) => {
    const {bookName, author, image, tags,rating , category, publisher, yearOfPublishing , totalPages} = bookd;
    return (
        <div className="my-10">
            <section className=" text-gray-800 border border-gray-300 py-5 px-5 rounded-2xl">
                <div className="container flex flex-col mx-auto lg:flex-row">
                    <div className="w-full lg:w-1/3" >
                    <img src={bookd.image} alt="" className="rounded-lg shadow-lg h-96" />
                    </div>
                    <div className="flex flex-col w-full p-6 lg:w-2/3 md:p-8 lg:p-12">
                       
                        <h2 className="text-3xl font-semibold leading-none">{bookd.bookName}</h2>
                        <p className="mt-4 mb-8 text-sm">By : {bookd.author}</p>
                        <div className="flex gap-3">
                            <div className="mt-2">Tags</div>
                            <div className="space-x-2 text-green-600 bg-green-100 rounded-2xl px-4 py-2 text-sm">
                                    #{bookd.tags[0]}
                                </div>
                                <div className="space-x-2 text-green-600 bg-green-100 rounded-2xl px-4 py-2 text-sm">
                                #{bookd.tags[1]}
                                </div>
                            <div className="mt-3">Year Of Publishing {bookd.yearOfPublishing}</div>
                            
                        </div>
                        <div className="flex gap-4 my-8">
                            <div>
                                <h3>Publisher: {bookd.publisher}</h3>
                            </div>
                            <div>
                                <h3>Page {bookd.totalPages}</h3>
                            </div>
                            </div>
                            <hr />
                        <div className="flex gap-3 my-3">
                        <div>
                       <button className="bg-blue-200 self-start px-5 py-2 text-sm rounded-3xl text-gray-900">Catagory {bookd.category}</button>
                       </div> <div>
                       <button className="bg-orange-200 self-start px-5 py-2 text-sm  rounded-3xl text-gray-900">Rating {bookd.rating}</button>
                       </div>
                      <div>
                       <button className="bg-green-300 self-start px-5 py-2 text-sm rounded-3xl text-gray-900">View Details</button>
                       </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CardBook;