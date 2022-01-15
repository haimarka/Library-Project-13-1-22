import ApllayMap from "./ApllayMap.jsx";
import * as styles from "../../CSS/styles.module.css";
import { useState } from "react";

export default function BooksList({searchInput,setSearch, Books, setData, isLoading }) {

  return (
    <div>
      <h4>Books List</h4>
      {isLoading ? <div className={styles.loader}></div> : ""}
      <label>Serch A Book:</label>
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
      <ApllayMap
        searchInput={searchInput}
        isLoading={isLoading}
        setData={setData}
        Books={Books}
      />
    </div>
  );
}
