import {useState} from 'react'
import * as styles from '../../CSS/styles.module.css'
import { Redirect } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';


export default function Details({setBookDetails,Books,setData,bookDetails,isLoading,isRedirect,setIsRedirect}) {
    const [rating,setRating] = useState(null)

    if(!isRedirect){
        return <Redirect to='/BooksList'/>
    }
    
    // console.log(temp);
    
    let temp = [...Books]
    const showNots = (e)=>{
        for (let i = 0; i < temp.length; i++) {
            if(temp[i].id === bookDetails.id){
                temp[i].note = e.target.value
            }
        }
        setData(temp)
    }

    return (
        <div>
            <div>
                    {[...Array(5)].map((star,i)=>{
                        const ratingValue = i + 1;
                        return (<label key={i}>
                                    <input type="radio" name="ratig" value={ratingValue} onClick={()=>setRating(ratingValue)} />
                                    <FaStar color={ratingValue <= rating?'orange':'gray'} className={styles.star} size={70}/>
                                </label>)
                    })}
                </div>
            <h1>Book Details</h1>
            <p>{bookDetails.bookName}</p>
            <p>{bookDetails.author}</p>
            {isLoading?<div className={styles.loader}></div>:''}
            <img style={{height:'250px',width:'250px'}} src={bookDetails.img}/>
            <p>{bookDetails.description}</p>
            <textarea onChange={showNots}defaultValue={bookDetails.note?bookDetails.note:''} cols="150" rows="10"/><br />
            <button onClick={()=>setIsRedirect(false)}>go back</button>
        </div>
    )
}
