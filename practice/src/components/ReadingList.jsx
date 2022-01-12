import { Redirect } from 'react-router-dom';
import * as styles from '../../CSS/styles.module.css'

export default function ReadingList({Books,setData,isRedirect, setIsRedirect,setBookDetails,isLoading}) {
    let temp = [...Books];

    if(isRedirect){
        return <Redirect to='/Details'/>
    }

    const doneReadingBook = (i)=>{
        temp[i].completed = true
        console.log('done reading');
    }
    
    const removeBook = (i)=>{
        temp[i].readding = false

        console.log('book delated');
    }

    const element = temp.map((book,i)=>{
        if(book.readding && !book.completed){
            return( 
                <section className={styles.readdinBookSection} key={book.id}>
                    <h1 onClick={()=>{setIsRedirect(true),setBookDetails(book)}}>{book.bookName}</h1>
                    <h3 onClick={()=>{setIsRedirect(true),setBookDetails(book)}}>{book.author}</h3>
                    <img onClick={()=>{setIsRedirect(true),setBookDetails(book)}} style={{height:'250px',width:'250px'}} src={book.img}/>
                    <p>{book.readding}</p>
                    <p>{book.completed}</p>
                    <img title='delete book' onClick={()=>{removeBook(i),console.log(temp),setData(temp)}} width='56px' height='56px' src='https://cdn-icons-png.flaticon.com/512/6559/6559184.png'/>
                    <img title='completed book' onClick={()=>{doneReadingBook(i),console.log(book),setData(temp)}} width='50px' height='50px' src="https://cdn-icons.flaticon.com/png/512/3934/premium/3934534.png?token=exp=1641982639~hmac=37c91af8a80f62aaee93988d14b3fad0"/>
                    <p onClick={()=>{setIsRedirect(true),setBookDetails(book)}}>{book.description.slice(0,300)}</p>
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
