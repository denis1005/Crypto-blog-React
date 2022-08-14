/* eslint-disable react-hooks/exhaustive-deps */
import {useEffect, useState} from 'react'

import {CryptoCard} from './CryptoCard'

import * as cryptoServices from "../../Service/cryptoServices"

export const Home=()=>{

  const [crypto,setCrypto]=useState([]);

  useEffect(()=>{
    cryptoServices
    .getAll()
    .then(result=>{
      setCrypto(result);
    });
  },[])

   return (
    
    

    <div className="card-group">
      
      {crypto.map(x=><CryptoCard key={x._id} data={x}/>)}
    
    </div>
   );
}