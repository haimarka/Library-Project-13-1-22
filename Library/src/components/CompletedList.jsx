import { Redirect } from 'react-router-dom';
import Rating from './Rating';
import * as styles from '../../CSS/styles.module.css'

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
                <section className={styles.displayBooks} key={book.id}>
                    <img className={styles.booksImage} onClick={()=>{setIsRedirect(true),setBookDetails(book)}}  src={book.img}/>
                  <div className={styles.bookDetails}>  <Rating Books={Books} setData={setData} className={styles.starsRating} book={book}/>
                   <h1 onClick={()=>{setIsRedirect(true),setBookDetails(book)}}>{book.bookName}</h1>
                    <h3 onClick={()=>{setIsRedirect(true),setBookDetails(book)}}>{book.author}</h3>
                    <p>{book.readding}</p>
                    <p>{book.completed}</p>
                    <p onClick={()=>{setIsRedirect(true),setBookDetails(book)}}>{book.description.slice(0,300)}</p></div> 
                    <img className={styles.completBookIcon} title='remove book' onClick={()=>{completedBook(i),console.log(temp)}} width='50px' height='50px' src='https://cdn-icons.flaticon.com/png/512/4033/premium/4033305.png?token=exp=1642020256~hmac=5be572d47ba55669acf4085fb6765c1f'/>
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

