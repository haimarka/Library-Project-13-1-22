import Rating from "./Rating";
import * as styles from "../../CSS/styles.module.css";

export default function DisplayBooks({ Books, setData, searchInput }) {

  const updateTemp = (book) => {
    let temp = [...Books];
    const index = temp.findIndex((b) => book.id === b.id);
    temp[index].readding = true;
    setData(temp);
  };

  const removeBook = (book) => {
    let temp = [...Books];
    const index = temp.findIndex((b) => book.id === b.id);
    temp[index].readding = false;
    setData(temp);
  };

  let booksFilter = Books.filter((book) => {
    return (
      book.bookName.toLowerCase().includes(searchInput.toLowerCase()) ||
      book.author.toLowerCase().includes(searchInput.toLowerCase()) ||
      book.description.toLowerCase().includes(searchInput.toLowerCase())
    );
  });

  booksFilter = searchInput ? booksFilter : booksFilter.slice(0, 10);
  
  return (
    <div>
      {booksFilter.map((book) => {
        if ((!book.readding && !book.completed) || book.readding) {
          return (
            <section className={styles.displayBooks} key={book.id}>
              <img className={styles.booksImage} src={book.img} />
              <div className={styles.bookDetails}>
              <Rating isEditable={false} className={styles.starsRating} book={book}/>
                <h1>{book.bookName}</h1>
                <h3>{book.author}</h3>
                <p>{book.readding}</p>
                <p>{book.completed}</p>
                {/* {text?<h4>book have been added</h4>:''} */}
                <p>{book.description.slice(0, 300)}</p>
              </div>
              <img
                className={styles.addBookIconBooksList}
                title="add book"
                onClick={() => {
                  book.readding ? removeBook(book) : updateTemp(book)}}
                width="50px"
                height="50px"
                src={
                  book.readding
                    ? "https://cdn-icons-png.flaticon.com/512/6559/6559184.png"
                    : "https://cdn2.iconfinder.com/data/icons/book-46/64/Book-add-more-plus-512.png"
                }
              />{" "}
              <br />
              {/* <img  title='add book' onClick={() => {updateTemp(book)}} width='50px' height='50px' src="https://cdn2.iconfinder.com/data/icons/book-46/64/Book-add-more-plus-512.png"/> <br /> */}
            </section>
            //https://cdn-icons-png.flaticon.com/512/6559/6559184.png
          );
        }
      })}
    </div>
  );
}
