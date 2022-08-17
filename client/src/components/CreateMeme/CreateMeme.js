import * as memeServices from "../../Service/memeServices"

import { useNavigate } from 'react-router';

export const  CreateMeme=()=>{

  const navigate=useNavigate()
  const onSubmit=(e)=>{
   e.preventDefault();
    const{
    title,
    imgUrl,
    
    }=Object.fromEntries(new FormData(e.target))

    memeServices
    .createOne(title,imgUrl)
    .then(res=>{
      navigate('/memes')

    })
    .catch((err)=>{
        console.log(err)
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
                      Create an Meme
                    </h2>
                    <form id='create' onSubmit={onSubmit}>
                      <div className="form-outline mb-4">
                        <input
                          name="title"
                          type="text"
                          id="form3Example1cg"
                          className="form-control form-control-lg"
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
                          Create
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