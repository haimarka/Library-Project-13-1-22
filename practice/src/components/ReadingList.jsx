import React, { useState } from 'react'
import { Redirect } from 'react-router-dom';
import * as styles from '../../CSS/styles.module.css'

export default function ReadingList({Books,setData,isRedirect, setIsRedirect,setBookDetails,isLoading}) {
    let obj = {};
    // const [text,setText] = useState('');
    // const tempText = [];
    // const [text,setText] = useState([]);
    let temp = [...Books];
    
    if(isRedirect){
        return <Redirect to='/Details'/>
    }
    
    const showNots = (e)=>{
        for (let i = 0; i < temp.length; i++) {
            temp[i].note = e.target.value
        }
        setData(temp)
    }

    const doneReadingBook = (i)=>{
        temp[i].completed = true
        console.log('done reading');
    }
    
    const removeBook = (i)=>{
        temp.splice(i,1);
        console.log('book delated');
    }

    const element = temp.map((book,i)=>{
        if(book.readding && !book.completed){
            return( 
                <section key={book.id}>
                    <h1 onClick={()=>{setIsRedirect(true),setBookDetails(book)}}>{book.bookName}</h1>
                    <h3 onClick={()=>{setIsRedirect(true),setBookDetails(book)}}>{book.author}</h3>
                    <img onClick={()=>{setIsRedirect(true),setBookDetails(book)}} style={{height:'250px',width:'250px'}} src={book.img}/>
                    <p>{book.readding}</p>
                    <p>{book.completed}</p>
                    <button onClick={()=>{doneReadingBook(i),console.log(book),setData(temp)}}>done</button>
                    <button onClick={()=>{removeBook(i),console.log(temp),setData(temp)}}>remove</button>
                    <p onClick={()=>{setIsRedirect(true),setBookDetails(book)}}>{book.description.slice(0,300)}</p>
                    <textarea onChange={showNots}defaultValue={temp.note?temp.note:''} cols="150" rows="10"/><br />
                    {/* <h4>{text?text:'leave comment..'}</h4> */}
                    {/* <button onClick={()=>{
                        tempText.push(text),
                        console.log(tempText)
                        }}>click</button> */}
                </section>
                )
        }
     })
    return (
        <div>
            <h4>Reading List</h4>
            {isLoading?<div className={styles.loader}></div>:''}
            {element}
        </div>
    )
}
