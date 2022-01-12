import {useState} from "react";
import axios from "axios";  
import { Redirect } from "react-router-dom";

export default function Register({setAuth,AUTH_LOCAL_STORAGE,auth}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(false);
  const [Disable,setDisable] = useState(false);
  const API_KEY = "AIzaSyCSD7xywuCnpvKnHnEnuoVyklqjM3tB-Pk";
  const URL = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`;
  if(auth){
    return <Redirect to='/BooksList'/>
  }
  // else{
  //   return <Redirect to='/LogIn'/>
  // }
  const isValid = ()=>{
    return(email.length && password.length && confirmPassword.length )
  }
  const RegisterUser = () => {
    axios
      .post(URL, {
        email,
        password,
        confirmPassword
      })
      .then((res) => {
          console.log(res),
          localStorage.setItem(AUTH_LOCAL_STORAGE,JSON.stringify(res))
          setAuth(res),
          setError(false)
        })
      .catch((err) => {
          console.log(err.res,
          setError(true)
            )});
  };
  return (
    <div>
        <h3>Register</h3>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if(isValid){
            RegisterUser();

          }
        }}
      >
        <input
          onChange={(e) => {
            setEmail(e.target.value),
            setDisable(isValid())
          }}
          type="email"
          placeholder="enter email"
        />{" "}
        <br />
        <input
          onChange={(e) => {
            setPassword(e.target.value),
            setDisable(isValid())
          }}
          type="password"
          placeholder="enter password"
        />{" "}
        <br />
        <input
          onChange={(e) => {
            setConfirmPassword(e.target.value),
            setDisable(isValid())
          }}
          type="password"
          placeholder="confirm password"
        />{" "}
        {error?<h4 style={{color: 'red'}}>ERROR, Somting Worng</h4>:<h4 style={{color: 'green'}}></h4>}
        <input disabled={!Disable} type="submit" value="sign up" />
      </form>
    </div>
  );
}
