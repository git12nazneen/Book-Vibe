import { Link } from "react-router-dom";
import errorImg from'../assets/404.jpg'

const Eror = () => {
    return (
        <div className="max-w-6xl mx-auto my-20 justify-center text-center">
            <h2 className="font-extrabold text-3xl">Opps sorry</h2>
            <Link to="/" className="font-extrabold text-2xl">Go back to home</Link>
            <div className="w-96 h-96 mx-auto">
            <img src={errorImg} alt="" />
            </div>
        </div>
    );
};

export default Eror;