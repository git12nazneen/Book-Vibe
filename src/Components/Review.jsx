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
        <div className='max-w-6xl mx-auto'>    
           <h2>data {reviews.length}</h2>
          
         <div>
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