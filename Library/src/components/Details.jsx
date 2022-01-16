import {useState} from 'react'
import * as styles from '../../CSS/styles.module.css'
import { Redirect } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';


export default function Details({Books,setData,bookDetails,isLoading,isRedirect,setIsRedirect}) {
    if(!isRedirect){
        return <Redirect to='/BooksList'/>
    }
    
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
            <h1>Book Details</h1>
            {[...Array(5)].map((star,i)=><FaStar key={i} 
                color={i<bookDetails.rate ?'orange':'gray'}
                    className={styles.star} size={45}
            />)}
            <p>{bookDetails.bookName}</p>
            <p>{bookDetails.author}</p>
            {isLoading?<div className={styles.loader}></div>:''}
            <img style={{height:'250px',width:'250px'}} src={bookDetails.img}/>
            <p>{bookDetails.description}</p>
            <textarea onChange={showNots} defaultValue={bookDetails.note?bookDetails.note:''} cols="150" rows="10"/><br />
            <button className={styles.goBackDetailsBtn} onClick={()=>setIsRedirect(false)}><span>go back</span></button>
        </div>
    )
}
