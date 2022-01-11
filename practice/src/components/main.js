
const getJson=()=>{
    const url = "./read.json";
    axios
    .get(url)
    .then(res=>console.log(res))
    .catch(err=>console.log(err))
}