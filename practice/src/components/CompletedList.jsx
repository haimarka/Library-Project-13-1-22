import React from 'react'
import { Redirect } from 'react-router-dom';
import * as styles from '../../CSS/styles.module.css'
import Rating from './Rating';

export default function CompletedList({Books,setData,isRedirect,setIsRedirect,setBookDetails,isLoading}) {    
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


    const element = temp.map((book,i)=>{
        if(book.completed && book.readding){
            return( 
                <section className={styles.completedBookSection} key={book.id}>
                    <Rating book={book}/>
                    <h1 onClick={()=>{setIsRedirect(true),setBookDetails(book)}}>{book.bookName}</h1>
                    <h3 onClick={()=>{setIsRedirect(true),setBookDetails(book)}}>{book.author}</h3>
                    <img onClick={()=>{setIsRedirect(true),setBookDetails(book)}} style={{height:'250px',width:'250px'}} src={book.img}/>
                    <p>{book.readding}</p>
                    <p>{book.completed}</p>
                    <img title='remove book' onClick={()=>{completedBook(i),console.log(temp)}} width='50px' height='50px' src='https://cdn-icons.flaticon.com/png/512/4033/premium/4033305.png?token=exp=1641978844~hmac=d31993e8f9c04c04e42b59668fe8f3a1'/>
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

