import {useEffect} from 'react'
import axios from 'axios'
// import Register from './components/Register'
// import LogIn from './components/LogIn'


export default function Home() {
    useEffect(() => {
        getJson()
    }, []);

    const getJson=()=>{
        axios
        .get('./data.json')
        .then(res=>res)
        .catch(err=>console.log(err.res))
    }

    return (
        <div>
            <h4>Home</h4>
            <img style={{backgroundSize:'cover'}} width='100%' height='100%' src="https://wallpaperaccess.com/full/1209397.jpg" alt="" />
            {/* <LogIn/>
            <Register/> */}
        </div>
    )
}




