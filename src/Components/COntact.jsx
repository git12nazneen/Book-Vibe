import contactImg1 from'../assets/contact.jpg'

const COntact = () => {
    return (
        <div className='max-w-6xl mx-auto'>  
                <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 bg-gray-100 text-gray-800">
                <div className="flex flex-col justify-between">
                    <div className="space-y-2">
                        <h2 className="text-4xl font-bold leading-tight lg:text-5xl">Let's talk!</h2>
                        <div className="text-gray-400">Contact use for best book find out.</div>
                    </div>
                    <img src={contactImg1} alt="" className=" mb-10 mr-4 h-60 justify-center items-center text-center" />
                </div>
                <form novalidate="" className="space-y-6">
                    <div>
                        <label for="name" className="text-sm">Full name</label>
                        <input id="name" type="text" placeholder="" className="w-full p-3 rounded bg-gray-800 text-white" />
                    </div>
                    <div>
                        <label for="email" className="text-sm">Email</label>
                        <input id="email" type="email" className="w-full p-3 rounded bg-gray-800 text-white" />
                    </div>
                    <div>
                        <label for="message" className="text-sm">Message</label>
                        <textarea id="message" rows="3" className="w-full p-3 rounded bg-gray-800 text-white"></textarea>
                    </div>
                    <button type="submit" className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded bg-green-400 text-gray-900">Send Message</button>
                </form>
            </div>
                    </div>
    );
};

export default COntact;