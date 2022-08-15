/* eslint-disable react-hooks/exhaustive-deps */
import {useParams} from 'react-router-dom'
import {useEffect, useState} from 'react'
import * as cryptoServices from "../../Service/cryptoServices"


export const CryptoDetails=()=>{
    const {cryptoId}=useParams();
    const [selected,setSelected]=useState({});

  useEffect(()=>{
    cryptoServices.getOne(cryptoId)
    .then(result=>{
      setSelected(result);
      console.log(result)
    });
  },[])
  console.log(selected)


   return (
    <>
    {/* Page Content */}
    <div className="container">
      {/* Portfolio Item Heading */}
      <h1 className="my-4">
        Crypto Dictionary 
        <small>{selected.name}</small>
      </h1>
      {/* Portfolio Item Row */}
      <div className="row">
        <div className="col-md-8">
          <img
            className="img-fluid"
            src={selected.imgUrl}
            alt=""
          />
        </div>
        <div className="col-md-4">
          <h3 className="my-3">Description</h3>
          <p>
              {selected.description}
          </p>
        </div>
      </div>
    </div>
  </>
  
   );
}