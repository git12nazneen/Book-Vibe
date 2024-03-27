import { useEffect, useState } from "react";
import SingleReview from "./SingleReview";

const Review = () => {

    const [reviews, setReviews] = useState([])

    useEffect(()=>{
        fetch('fakedata2.json')
        .then(res => res.json())
        .then(data => setReviews(data))
    },[])
    return (
        <div className='max-w-6xl mx-auto '>    
         
         <h1 className="font-extrabold lg:text-4xl text-xl my-10 text-center">See our more review to our clients</h1>
          
         <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 ">
            {
                reviews.map(review => <SingleReview
                key={review.id}
                review={review}
                > </SingleReview>)
            }
         </div>
        </div>
    );
};

export default Review;