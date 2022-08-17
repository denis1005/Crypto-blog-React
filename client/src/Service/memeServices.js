import * as request from "../utils/requester"

const baseUrl='http://localhost:3030/data/memes'

export const getAll=()=>request.get(baseUrl)

export const getOne=(memeId)=> request.get(`${baseUrl}/${memeId}`)