import * as request from "../utils/requester"

const baseUrl='http://localhost:3030/data/memes'

export const getAll=()=>request.get(baseUrl)

export const getOne=(memeId)=> request.get(`${baseUrl}/${memeId}`)

export const createOne=(title,imgUrl,likes=0)=>request.post(`${baseUrl}`,{title,imgUrl,likes})
export const deleteOne=(memeId)=>request.del(`${`${baseUrl}/${memeId}`}`)
export const updateOne=(memeId,data)=>request.put(`${`${baseUrl}/${memeId}`}`,data)