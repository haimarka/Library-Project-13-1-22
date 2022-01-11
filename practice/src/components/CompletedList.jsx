import React from 'react'
import { Redirect } from 'react-router-dom';
import { useState } from 'react';
import * as styles from '../../CSS/styles.module.css'
import { FaStar } from 'react-icons/fa';

export default function CompletedList({Books,setData,isRedirect,setIsRedirect,setBookDetails,isLoading}) {
    const [rating,setRating] = useState(null)
    
    let temp = [...Books];
    if(isRedirect){
        return <Redirect to='/Details'/>

    }

    const completedBook = (i)=>{
        temp[i].completed = false
        temp[i].readding = false
        console.log('done reading');
        setData(temp)     
    }

    const removeBook = (i)=>{
        temp.splice(i,1);
        console.log('book delated');
        setData(temp)     
    }
    const element = temp.map((book,i)=>{
        if(book.completed && book.readding){
            return( 
                <section key={book.id}>
                    <div>
                        {[...Array(5)].map((star,i)=>{
                            const ratingValue = i + 1;
                            return (<label key={i}>
                                        <input type="radio" name="ratig" value={ratingValue} onClick={()=>setRating(ratingValue)} />
                                        <FaStar color={ratingValue <= rating?'orange':'gray'} className={styles.star} size={50}/>
                                    </label>)
                        })}
                    </div>
                    <h1 onClick={()=>{setIsRedirect(true),setBookDetails(book)}}>{book.bookName}</h1>
                    <h3 onClick={()=>{setIsRedirect(true),setBookDetails(book)}}>{book.author}</h3>
                    <img onClick={()=>{setIsRedirect(true),setBookDetails(book)}} style={{height:'250px',width:'250px'}} src={book.img}/>
                    <p>{book.readding}</p>
                    <p>{book.completed}</p>
                    <button onClick={()=>{completedBook(i),console.log(temp)}}>complete</button>
                    <button onClick={()=>{removeBook(i),console.log(temp)}}>remove</button>
                    <p onClick={()=>{setIsRedirect(true),setBookDetails(book)}}>{book.description.slice(0,300)}</p>
                </section>
                )
        }
     })
    return (
        <div>
            <h4>Completed List</h4>
            {isLoading?<div className={styles.loader}></div>:''}
            {element}
        </div>
    )
}

