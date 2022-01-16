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
                <section className={styles.displayBooks} key={book.id}>
                    <img className={styles.booksImage} onClick={()=>{setIsRedirect(true),setBookDetails(book)}} src={book.img}/>
                   <div className={styles.bookDetails}> <h1 title='click to see book details'  onClick={()=>{setIsRedirect(true),setBookDetails(book)}}>{book.bookName}</h1>
                    <h3 title='click to see book details'  onClick={()=>{setIsRedirect(true),setBookDetails(book)}}>{book.author}</h3>
                    <p>{book.readding}</p>
                    <p>{book.completed}</p>
                    <p title='click to see book details' onClick={()=>{setIsRedirect(true),setBookDetails(book)}}>{book.description.slice(0,300)}</p></div>
                    <img className={styles.addBookIconReadding} title='delete book' onClick={()=>{removeBook(i),console.log(temp),setData(temp)}} width='56px' height='56px' src='https://cdn-icons-png.flaticon.com/512/6559/6559184.png'/>
                    <img className={styles.renoveBookIconReadding} title='completed book' onClick={()=>{doneReadingBook(i),console.log(book),setData(temp)}} width='50px' height='50px' src="https://cdn-icons.flaticon.com/png/512/3934/premium/3934534.png?token=exp=1642019789~hmac=d653ab12ca1ef8d3cbdffd6b187de562"/>
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
