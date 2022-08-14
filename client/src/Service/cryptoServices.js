const baseUrl='http://localhost:3030/data/crypto'

export const getAll=()=>{
   return fetch(baseUrl)
    .then(res=>res.json())
    
}