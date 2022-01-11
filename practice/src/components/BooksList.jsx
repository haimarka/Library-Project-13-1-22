import ApllayMap from "./ApllayMap.jsx";
import * as styles from '../../CSS/styles.module.css';
import { useState } from "react";

export default function BooksList({Books,setData,isLoading}) {
    const [searchInput,setSearch] = useState('');
    // const [bookVisibility,setBookVisibility] = useState('hidden');
    const [hiddenBooks,setHiddenBooks] = useState(false);

    return (
        <div>
            <h4>Books List</h4>
            {isLoading?<div className={styles.loader}></div>:''}
            <label>Serch A Book:</label><br /><br />
            <input onChange={(e)=>{
                if(e.target.value){
                    setHiddenBooks(true)
                }
                else{
                    setBookVisibility(false)
                }
                setSearch(e.target.value)
                }} title='search book' type="text" placeholder='Search' /> <br /> <br />
            <ApllayMap setHiddenBooks={setHiddenBooks} hiddenBooks={hiddenBooks} searchInput={searchInput} isLoading={isLoading} setData={setData} Books={Books}/>
        </div>
    )
}
