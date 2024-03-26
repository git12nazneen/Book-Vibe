

const SingleReview = ({review}) => {
    const {name} = review 
  
    return (
        <div className='max-w-6xl mx-auto'>    
                <h1>{name}</h1>
        </div>
    );
};

export default SingleReview;

// profession,reviewSentence,imageLink