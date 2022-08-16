import * as request from "../utils/requester"

const baseUrl='http://localhost:3030/data/crypto'

export const getAll=()=>request.get(baseUrl)

export const getOne=(cryptoId)=> request.get(`${baseUrl}/${cryptoId}`)
 