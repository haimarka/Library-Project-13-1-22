import { useState } from "react";
import DisplayBooks from "./DisplayBooks.jsx";
import * as styles from "../../CSS/styles.module.css";

export default function BooksList({ Books, setData, isLoading }) {
  const [searchInput, setSearch] = useState("");

  return (
    <div>
      <h4>Books List</h4>
      {isLoading ? <div className={styles.loader}></div> : ""}
      <label>Search A Book:</label>
      <br />
      <br />
      <input
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        title="search book"
        type="text"
        placeholder="Search"
      />{" "}
      <br /> <br />
      <DisplayBooks
        searchInput={searchInput}
        isLoading={isLoading}
        setData={setData}
        Books={Books}
      />
    </div>
  );
}
