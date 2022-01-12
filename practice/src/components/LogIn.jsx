import {useState, useEffect, useRef} from "react";
import axios from "axios"; 
import { Redirect } from "react-router-dom";

export default function LogIn({setAuth,AUTH_LOCAL_STORAGE,auth}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hasError, setHasError] = useState(false);
  const [isDisabled, setIsDisable] = useState(true);
  const formEl = useRef(null);
  const API_KEY = "AIzaSyCSD7xywuCnpvKnHnEnuoVyklqjM3tB-Pk";
  const URL = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`;

  if(auth) return <Redirect to='/BooksList'/>

  useEffect(() => {
    setIsDisable(!formEl.current.checkValidity());
  }, [email, password])

  const LogInVerification = (e) => {
    e.preventDefault();
    axios
      .post(URL, {
        email,
        password,
      })
      .then((res) => {
          console.log(res),
          setAuth(res),
          localStorage.setItem(AUTH_LOCAL_STORAGE,JSON.stringify(res))
          setHasError(false)
        })
      .catch((err) => {
          console.log(err.res,
          setHasError(true)
            )});
  };
  return (
    <div>
        <h3>Log In</h3>
      <form
        ref={formEl}
        onSubmit={LogInVerification}
      >
        <input
          required
          autoFocus
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="enter email"
        />{" "}
        <br />
        <input
          required
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="enter password"
        />{" "}
        <br />
        {hasError?<h4 style={{color: 'red'}}>ERROR, Somting Worng</h4>:<h4 style={{color: 'green'}}></h4>}
        <input disabled={isDisabled} type="submit" value="sign in" />
      </form>
    </div>
  );
}