import { useState, useEffect } from 'react';

export default function useFetch(URL){
    const [ data , setData ] = useState([])
    const [ isLoading , setIsLoading ] = useState(false)
    useEffect(()=>getData(),[])

    const getData = ()=>{
        setIsLoading(true)
        fetch(URL)
        .then(res=> res.json())
        .then(data=> {setData(data.books),setIsLoading(false)})
        .catch(err=>{console.log(err)})
    }
    return [data,setData,isLoading];
}



