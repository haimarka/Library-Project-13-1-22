import { useEffect, useState } from 'react'
import './App.css'
import Home from './components/Home'
import Register from './components/Register'
import LogIn from './components/LogIn'
import BooksList from './components/BooksList'
import ReadingList from './components/ReadingList'
import CompletedList from './components/CompletedList'
import Details from './components/Details'
import useFetch from './Hooks/useFetch'
import {BrowserRouter, Switch ,Link ,Route} from 'react-router-dom'
import { Redirect } from 'react-router-dom'
import * as styles from '../CSS/styles.module.css'

function App() {
  const [auth, setAuth] = useState(null);
  const [isRedirect, setIsRedirect] = useState(false);
  const [bookDetails, setBookDetails] = useState({});
  const [searchInput, setSearch] = useState("");
  const [Books,setData ,isLoading] = useFetch('./data.json');
  const AUTH_LOCAL_STORAGE = 'Users_Ditails';

  // if(isRedirect){
  //   return <Redirect to='/'/>
  // }


  useEffect(()=>{
    let authStorage = JSON.parse(localStorage.getItem(AUTH_LOCAL_STORAGE))
    authStorage ? setAuth(authStorage) : null;
  },[])

  return (
      <BrowserRouter>
        <div className="App"> 

          {auth?<Link to='/'>Home</Link>:''} {auth?<Link to='/CompletedList'>CompletedList</Link>:''} {auth?<Link to='/ReadingList'>ReadingList</Link>:''} {auth?<Link to='/BooksList'>BooksList</Link>:''} {!auth?<Link style={{textDecoration:'none'}} to='/Register'><button className={styles.RegisterBtn}><span>Register</span></button></Link>:''} {!auth?<Link style={{textDecoration:'none'}} className={styles.logIn} to='/LogIn'><button className={styles.logInBtn}><span className={styles.text}>LogIn</span></button></Link>:''}
          <Switch>
              <Route exact path='/' component={Home}/>
              <Route exact path='/Register' render={()=><Register auth={auth} setAuth={setAuth} AUTH_LOCAL_STORAGE={AUTH_LOCAL_STORAGE}/>}/>
              <Route exact path='/LogIn' render={()=><LogIn auth={auth} setAuth={setAuth} AUTH_LOCAL_STORAGE={AUTH_LOCAL_STORAGE}/>}/>
              <Route exact path='/BooksList' render={()=><BooksList setSearch={setSearch} searchInput={searchInput} isLoading={isLoading} Books={Books} setData={setData}/>}/>
              <Route exact path='/ReadingList' render={()=><ReadingList isLoading={isLoading} Books={Books} setData={setData} setBookDetails={setBookDetails} setIsRedirect={setIsRedirect} isRedirect={isRedirect}/>}/>
              <Route exact path='/CompletedList' render={()=><CompletedList isLoading={isLoading} Books={Books} setData={setData} setBookDetails={setBookDetails} isRedirect={isRedirect} setIsRedirect={setIsRedirect}/>}/>
              <Route exact path='/Details' render={()=><Details setData={setData} Books={Books} isRedirect={isRedirect} setIsRedirect={setIsRedirect} isLoading={isLoading} setBookDetails={setBookDetails} bookDetails={bookDetails}/>}/>
          </Switch>
        {auth?<button onClick={()=>{setAuth(null)}}>sign out</button>:''}
        </div>
    </BrowserRouter>
  )
}
// ,localStorage.setItem(AUTH_LOCAL_STORAGE,JSON.stringify(''))
export default App
