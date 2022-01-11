import {useState} from "react";
import axios from "axios"; 
import { Redirect } from "react-router-dom";

export default function LogIn({setAuth,AUTH_LOCAL_STORAGE,auth}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [Disabale,setDisable] = useState(false)
  const API_KEY = "AIzaSyCSD7xywuCnpvKnHnEnuoVyklqjM3tB-Pk";
  const URL = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`;
  if(auth){
    return <Redirect to='/'/>

  }
  // else{
  //   return <Redirect to='/LogIn'/>
  // }
  const isValid = ()=>{
    return(email.length && password.length )
  }
  const LogInVerification = () => {
    axios
      .post(URL, {
        email,
        password,
      })
      .then((res) => {
          console.log(res),
          setAuth(res),
          localStorage.setItem(AUTH_LOCAL_STORAGE,JSON.stringify(res))
          setError(false)
        })
      .catch((err) => {
          console.log(err.res,
          setError(true)
            )});
  };
  return (
    <div>
        <h3>Log In</h3>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if(isValid()){
            LogInVerification();
          }
        }}
      >
        <input
          onChange={(e) => {
            setEmail(e.target.value),
            setDisable(()=>isValid())
          }}
          type="email"
          placeholder="enter email"
        />{" "}
        <br />
        <input
          onChange={(e) => {
            setPassword(e.target.value),
            setDisable(()=>isValid())
          }}
          type="password"
          placeholder="enter password"
        />{" "}
        <br />
        {error?<h4 style={{color: 'red'}}>ERROR, Somting Worng</h4>:<h4 style={{color: 'green'}}></h4>}
        <input disabled={!Disabale} type="submit" value="sign in" />
      </form>
    </div>
  );
}
