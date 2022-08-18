/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unreachable */
import * as memeServices from "../../Service/memeServices"
import { useContext } from 'react';
import { MemeContext } from '../../context/Memecontext';
import { useNavigate } from 'react-router';
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'


export const EditMeme =()=>{
    const { memeId } = useParams();
    const { memeEdit } = useContext(MemeContext);
    const navigate = useNavigate();
    const [selected,setSelected]= useState({})

    useEffect(()=>{
        memeServices.getOne(memeId)
        .then(res=>{
            setSelected(res);
        })
        .catch((err)=>{
           console.log(err)
        })
    },[])
    

    const onSubmit=(e)=>{
        e.preventDefault();
         const{
         title,
         imgUrl,
         
         }=Object.fromEntries(new FormData(e.target))
     
         memeServices
         .updateOne(memeId,{title,imgUrl})
         .then(res=>{
            memeEdit(memeId,{title,imgUrl})
            navigate(`/memes/details/${memeId}`)
         })
         .catch((err)=>{
             navigate('/404')
         })
     }
    return(
        <>
        <section>
        <div className="card-body p-5 text-center">
          <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                <div className="card bg-dark text-white" style={{ borderRadius: 15 }}>
                  <div className="card-body p-5">
                    <h2 className="text-uppercase text-center mb-5">
                    Edit Meme
                    </h2>
                    <form id='create' onSubmit={onSubmit}>
                      <div className="form-outline mb-4">
                        <input
                          name="title"
                          type="text"
                          id="form3Example1cg"
                          className="form-control form-control-lg"
                          defaultValue={selected.title}
                        />
                        <label className="form-label" htmlFor="form3Example1cg">
                          Your Meme Title
                        </label>
                      </div>
                      <div className="form-outline mb-4">
                        <input
                          name="imgUrl"
                          type="text"
                          id="form3Example1cg"
                          className="form-control form-control-lg"
                          defaultValue={selected.imgUrl}
                        />
                        <label className="form-label" htmlFor="form3Example1cg">
                          Your Meme Image URL
                        </label>
                      </div>
                  
                      <div className="d-flex justify-content-center">
                        <button
                          type="submit"
                          className="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
                        >
                          Edit
                        </button>
                      </div>
                     
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
    );
    
}
    