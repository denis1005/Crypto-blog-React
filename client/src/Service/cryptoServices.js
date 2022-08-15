const baseUrl='http://localhost:3030/data/crypto'

export const getAll=()=>{
   return fetch(baseUrl)
    .then(res=>res.json())
    
}
export const getOne=(cryptoId)=>{
    return fetch(`${baseUrl}/${cryptoId}`)
     .then(res=>res.json())
     
 }