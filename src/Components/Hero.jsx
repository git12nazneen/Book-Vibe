// import bannerImg from'../assets/book.jpg'
import { Link } from 'react-router-dom';
import bannerImg1 from'../assets/book1.png'

const Hero = () => {
    return (
        <div className='max-w-6xl mx-auto'>
            <div className="hero min-h-screen bg-base-200 rounded-2xl">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={bannerImg1} className="max-w-lg rounded-lg " />
                <div className='lg:mr-20'>
                <h1 className="text-5xl font-bold">Books to freshen up <br /> your bookshelf</h1>
               
                <Link to='/listedBooks' className="btn text-white bg-green-600 mt-6">View the list</Link>
                </div>
            </div>
            </div>
                    </div>
    );
};

export default Hero;