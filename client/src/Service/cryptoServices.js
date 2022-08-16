import { request } from "../utils/requester"

const baseUrl='http://localhost:3030/data/crypto'

export const getAll=()=>{
   return request(baseUrl)
    
}
export const getOne=(cryptoId)=>{
    return request(`${baseUrl}/${cryptoId}`)
 }