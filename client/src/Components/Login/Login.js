import * as authServices from '../../Service/authService'
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext';
import { useContext,useState } from 'react';

export const Login=()=>{
  const{userLogin}=useContext(AuthContext)
  const [error, setError] = useState({
    ErrorMessage: '',
    
  });

  
  const navigate=useNavigate()
  const onSubmit=(e)=>{
   e.preventDefault();
    const{
    email,
    password
    }=Object.fromEntries(new FormData(e.target))
    if(email && password){
      authServices
      .login(email,password)
      .then(authData=>{
        
        if(authData.code){
          setError(state => ({
            ...state,
            ErrorMessage: authData.message,
          }));
          navigate('/login')
        }else{
          userLogin(authData);
         navigate('/')
        }
      
      })
      .catch((err)=>{
        navigate('404')
      })
      
    }
    
  }
   return(
    <>
    <section className="vh-100 gradient-custom">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div
              className="card bg-dark text-white"
              style={{ borderRadius: "1rem" }}
            >
              <div className="card-body p-5 text-center">
                <form id='logion' className="mb-md-5 mt-md-4 pb-5" onSubmit={onSubmit}>
                  <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                  <p className="text-white-50 mb-5">
                    Please enter your login and password!
                  </p>
                  {error.ErrorMessage &&
                          <div style={{ color: 'red' }}>{error.ErrorMessage}</div>
                          }
                  <div className="form-outline form-white mb-4">
                    <input
                      name="email"
                      type="email"
                      id="typeEmailX"
                      className="form-control form-control-lg"
                    />
                    <label className="form-label" htmlFor="typeEmailX">
                      Email
                    </label>
                  </div>
                  <div className="form-outline form-white mb-4">
                    <input
                      type="password"
                      id="typePasswordX"
                      className="form-control form-control-lg"
                      name="password"
                     
                    />
                   
                    <label className="form-label" htmlFor="typePasswordX">
                      Password
                    </label>
                  </div>
                  <button
                    className="btn btn-outline-light btn-lg px-5"
                    type="submit"
                  >
                    Login
                  </button>
                </form>
                <div>
                  <p className="mb-0">
                    Don't have an account?{" "}
                    <Link to="/register" className="text-white-50 fw-bold">
                      Sign Up
                    </Link>
                  </p>
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