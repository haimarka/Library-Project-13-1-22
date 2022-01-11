import * as styles from "../../CSS/styles.module.css";

export default function ApllayMap({ Books, setData, searchInput,hiddenBooks ,setHiddenBooks }) {
  
  const updateTemp = (i) => {
    let temp = [...Books];
    temp[i].readding = true;
    console.log(temp[i]);
    setData(temp);
  };
  return (
    <div>
      {Books.filter((book) => {
        if (searchInput === "") {
          // return book
          return book;
        } else if (
         book.bookName.toLowerCase().includes(searchInput.toLowerCase()) ||
          book.author.toLowerCase().includes(searchInput.toLowerCase()) ||
          book.description.toLowerCase().includes(searchInput.toLowerCase()) 
        ) {
          return book;
        }
      }).map((book, i) => {
        if (!book.readding && !book.completed || book.readding) {
          if (book.id < 10) {
            return (
              <section key={book.id}>
                <h1>{book.bookName}</h1>
                <h3>{book.author}</h3>
                <img
                  style={{ height: "250px", width: "250px" }}
                  src={book.img}
                />
                <p>{book.readding}</p>
                <p>{book.completed}</p>
                <button
                  onClick={() => {
                    updateTemp(i);
                  }}
                >
                  add book
                </button>
                <p>{book.description.slice(0,300)}</p>
              </section>
            );
          }
        } 
        
         if(book.id > 10 && hiddenBooks) {
          return (
            <section key={book.id}>
              <h1>{book.bookName}</h1>
              <h3>{book.author}</h3>
              <img style={{ height: "250px", width: "250px" }} src={book.img} />
              <p>{book.readding}</p>
              <p>{book.completed}</p>
              <button
                onClick={() => {
                  updateTemp(i);
                }}
              >
                add book
              </button>
              <p>{book.description.slice(0,300)}</p>
            </section>
          );
        }
        setHiddenBooks(false)

      })}
    </div>
  );
}
