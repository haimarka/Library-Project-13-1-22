import { useState } from "react";
import * as styles from '../../CSS/styles.module.css'


export default function ApllayMap({ Books, setData, searchInput }) {
const [text,setText] = useState({0:false})

  const updateTemp = (i) => {
    let temp = [...Books];
    temp[i].readding = true;
    setData(temp);
  };
    return (
    <div>
      {Books.filter((book) => {
         if (book.bookName.toLowerCase().includes(searchInput.toLowerCase()) ||
          book.author.toLowerCase().includes(searchInput.toLowerCase()) ||
          book.description.toLowerCase().includes(searchInput.toLowerCase()) 
        ) {
          return book;
        }
      }).map((book, i) => {
        if (!book.readding && !book.completed || book.readding) {
          if (book.id < 10) {
            return (
              <section className={styles.addBookSection} key={book.id}>
                <h1>{book.bookName}</h1>
                <h3>{book.author}</h3>
                <img
                  style={{ height: "250px", width: "250px" }}
                  src={book.img}
                />
                <p>{book.readding}</p>
                <p>{book.completed}</p>
                <img title='add book' onClick={() => {
                  updateTemp(i);
                    setText({0:true});
                  }} width='50px' height='50px' src="https://cdn2.iconfinder.com/data/icons/book-46/64/Book-add-more-plus-512.png"/> <br />
                {text?<h4>book have been added</h4>:''}
                <p>{book.description.slice(0,300)}</p>
              </section>
            )
          }
          // else if(book.id > 10) {
          //   return (
          //     <section key={book.id}>
          //       <h1>{book.bookName}</h1>
          //       <h3>{book.author}</h3>
          //       <img style={{ height: "250px", width: "250px" }} src={book.img} />
          //       <p>{book.readding}</p>
          //       <p>{book.completed}</p>
          //       <img title='add book' onClick={() => {updateTemp(i),setText(text)}} width='50px' height='50px' src="https://cdn2.iconfinder.com/data/icons/book-46/64/Book-add-more-plus-512.png"/> <br />
          //       <p>{book.description.slice(0,300)}</p>
          //     </section>
          //   );
          // }
        } 

      })}
    </div>
  );
}
