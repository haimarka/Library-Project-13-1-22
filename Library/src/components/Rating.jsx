import { useState } from 'react';
import { FaStar } from 'react-icons/fa';


export default function Rating({book,setData,Books,isEditable = true}) {
    const [hover,setHover] = useState(false)
    const setRating = (value) => {
        let temp = [...Books];
        const index = temp.findIndex((b) => book.id === b.id);
        temp[index].rate = value;
        setData(temp);
    };
    return (
        <div>
            <div>
            {[...Array(5)].map((star,i)=>{
                const ratingValue = i + 1;
                return (<label key={i}>
                            <input type="radio" name="rating" value={ratingValue} disabled={!isEditable} onClick={()=>{
                                setRating(ratingValue);
                            }} />
                            {isEditable ? <FaStar 
                            color={ratingValue <= (hover||book.rate)?'orange':'gray'}
                                 size={45}
                                onMouseEnter={()=>setHover(ratingValue)}
                                onMouseLeave={()=>setHover(false)}
                                /> : 
                                <FaStar 
                            color={ratingValue <= (book.rate) ?'orange':'gray'}
                                 size={45}
                                />
                            }
                        </label>)
            })}
            </div>
        </div>
    )
}
