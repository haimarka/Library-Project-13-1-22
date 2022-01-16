import { useEffect, useState } from 'react'
import {BrowserRouter, Switch ,Link ,Route, Redirect} from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import BooksList from './components/BooksList'
import ReadingList from './components/ReadingList'
import CompletedList from './components/CompletedList'
import Details from './components/Details'
import useFetch from './Hooks/useFetch'
import * as styles from '../CSS/styles.module.css'


function App() {
  const [auth, setAuth] = useState(null);
  const [isRedirect, setIsRedirect] = useState(false);
  const [bookDetails, setBookDetails] = useState({});
  const [Books,setData ,isLoading] = useFetch('./data.json');
  const AUTH_LOCAL_STORAGE = 'Users_Ditails';

  useEffect(()=>{
    let authStorage = JSON.parse(localStorage.getItem(AUTH_LOCAL_STORAGE))
    authStorage ? setAuth(authStorage) : null;
  },[])

  const handleLogout = () => {
    localStorage.setItem(AUTH_LOCAL_STORAGE,JSON.stringify(''))
    setAuth(null); 
    document.location.href = "/";
  }

  return (
      <BrowserRouter>
        <div className="App"> 

          <div className={styles.linksContainer}> {auth?<Link className={styles.links} to='/BooksList'>BooksList</Link>:''} {auth?<Link className={styles.links} to='/ReadingList'>ReadingList</Link>:''} {auth?<Link className={styles.links} to='/CompletedList'>CompletedList</Link>:''} </div>
        {auth?<button title='click to sign out'  className={styles.signOut} onClick={handleLogout}><span>sign out</span></button>:''}
          <Switch>
              <Route exact path='/' render={()=><Home AUTH_LOCAL_STORAGE={AUTH_LOCAL_STORAGE} setAuth={setAuth} auth={auth}/>}/>
              <Route exact path='/BooksList' render={()=><BooksList isLoading={isLoading} Books={Books} setData={setData}/>}/>
              <Route exact path='/ReadingList' render={()=><ReadingList isLoading={isLoading} Books={Books} setData={setData} setBookDetails={setBookDetails} setIsRedirect={setIsRedirect} isRedirect={isRedirect}/>}/>
              <Route exact path='/CompletedList' render={()=><CompletedList isLoading={isLoading} Books={Books} setData={setData} setBookDetails={setBookDetails} isRedirect={isRedirect} setIsRedirect={setIsRedirect}/>}/>
              <Route exact path='/Details' render={()=><Details setData={setData} Books={Books} isRedirect={isRedirect} setIsRedirect={setIsRedirect} isLoading={isLoading} setBookDetails={setBookDetails} bookDetails={bookDetails}/>}/>
          </Switch>
        </div>
    </BrowserRouter>
  )
}
// ,localStorage.setItem(AUTH_LOCAL_STORAGE,JSON.stringify(''))
export default App
