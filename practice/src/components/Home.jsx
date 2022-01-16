import { useState } from "react";
import axios from "axios";
import * as styles from "../../CSS/styles.module.css";
import Register from './Register';
import LogIn from './LogIn';
import { Redirect } from "react-router-dom";

export default function Home({AUTH_LOCAL_STORAGE, auth ,setAuth}) {
  const [showRegister,setShowRegister] = useState(false)
  const [showLogIn, setShowLogIn] = useState(false);
    
if(auth) return <Redirect to='/BooksList'/>
  return (
    <div>
      {/* <h4>Home</h4> */}
      {!showLogIn && !showRegister ? (
      <div>
        <button className={styles.RegisterBtn} onClick={()=>setShowRegister(true)}>
            <span>Register</span>
        </button>
        <button className={styles.logInBtn} onClick={()=>setShowLogIn(true)}>
            <span className={styles.text}>LogIn</span>
        </button>
      </div>) : (
          <button className={styles.logInBtn} onClick={()=>{
            setShowLogIn(false)
            setShowRegister(false)
            }}>
          <span className={styles.text}>back</span>
        </button>
      )}

      <img
        style={{ backgroundSize: "cover" }}
        width="100%"
        height="100%"
        src="https://wallpaperaccess.com/full/1209397.jpg"
      />
     
      {showRegister?<Register auth={auth} AUTH_LOCAL_STORAGE={AUTH_LOCAL_STORAGE} setAuth={setAuth}/>:null}
        {showLogIn?<LogIn auth={auth} AUTH_LOCAL_STORAGE={AUTH_LOCAL_STORAGE} setAuth={setAuth}/>:null}
    </div>
  );
}
