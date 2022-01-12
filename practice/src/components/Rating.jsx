import { FaStar } from 'react-icons/fa';
import { useState } from 'react';


export default function Rating({book}) {
    const [rating,setRating] = useState(null)
    const [hover,setHover] = useState(false)
    return (
        <div>
            <div>
            {[...Array(5)].map((star,i)=>{
                const ratingValue = i + 1;
                return (<label key={i}>
                            <input type="radio" name="rating" value={ratingValue} onClick={()=>{
                                setRating(ratingValue);
                                book.rate = ratingValue;
                            }} />
                            <FaStar 
                            color={ratingValue <= (hover||rating)?'orange':'gray'}
                                 size={45}
                                onMouseEnter={()=>setHover(ratingValue)}
                                onMouseLeave={()=>setHover(false)}
                                />
                        </label>)
            })}
            </div>
        </div>
    )
}
