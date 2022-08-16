import * as request from "../utils/requester"

const baseUrl='http://localhost:3030/users'

export const login=(email,password)=>
 request.post(`${baseUrl}/login`,{email,password})

 export const logout=(accessToken)=> request.get(`${baseUrl}/logout`)

 export const register = (email, password,name) =>
    request.post(`${baseUrl}/register`, {email, password,name});
 
