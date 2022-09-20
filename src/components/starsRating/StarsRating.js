import {useState} from 'react';

import './StarsRating.css';

const StarsRating=()=>{
    const [starsRating,setStarsRating]=useState(1);

    const clickHandler=(e)=>{
        setStarsRating(e.target.value);
    };

    return (
        <>
            <div className="stars-rating">
                <input type="radio" id="star1" name="stars" value={1} onChange={clickHandler} /><label htmlFor="star1" className={starsRating>=1?"star-light":"star-dark"}></label>
                <input type="radio" id="star2" name="stars" value={2} onChange={clickHandler} /><label htmlFor="star2" className={starsRating>=2?"star-light":"star-dark"}></label>
                <input type="radio" id="star3" name="stars" value={3} onChange={clickHandler} /><label htmlFor="star3" className={starsRating>=3?"star-light":"star-dark"}></label>
                <input type="radio" id="star4" name="stars" value={4} onChange={clickHandler} /><label htmlFor="star4" className={starsRating>=4?"star-light":"star-dark"}></label>
                <input type="radio" id="star5" name="stars" value={5} onChange={clickHandler} /><label htmlFor="star5" className={starsRating>=5?"star-light":"star-dark"}></label>
            </div>
            <h1>{starsRating}顆星</h1>
        </>
    );
}

export default StarsRating;