import {useEffect} from 'react'
import axios from 'axios'
import { Link }from 'react-router-dom'
import * as styles from '../../CSS/styles.module.css'
import {Redirect} from 'react-router-dom'

export default function Home({auth}) {
    useEffect(() => {
        getJson()
    }, []);

    const getJson=()=>{
        axios
        .get('./data.json')
        .then(res=>res)
        .catch(err=>console.log(err.res))
    }

    // if (auth) return <Redirect to='/BooksList'/>;

    return (
        <div>
            <h4>Home</h4>
            {!auth?<Link style={{textDecoration:'none'}} to='/Register'><button className={styles.RegisterBtn}><span>Register</span></button></Link>:''} {!auth?<Link style={{textDecoration:'none'}} className={styles.logIn} to='/LogIn'><button className={styles.logInBtn}><span className={styles.text}>LogIn</span></button></Link>:''}
            <img style={{backgroundSize:'cover'}} width='100%' height='100%' src="https://wallpaperaccess.com/full/1209397.jpg" alt="" />
        </div>
    )
}




