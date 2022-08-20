import * as authServices from '../../Service/authService'
import { useNavigate } from 'react-router';
import { AuthContext } from '../../context/AuthContext';
import { useContext, useState } from 'react';

export const Register = () => {

  const [imgUrl, setImgUrl] = useState();
  const [name, setName] = useState("");
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [repeatPassword, setRepeatPassword] = useState();
  const [error, setError] = useState({
    imgUrl: '',
    name: '',
    email: '',
    password: '',
    RepeatPassword: '',
    ServerErrorMessage:''
  });
  const { userLogin } = useContext(AuthContext)
  const navigate = useNavigate()

  const validateName = (e) => {
    let errorMessage = ''
    let name = e.target.value
    if (name.length < 3 || name.length > 10) {
      errorMessage = "The name should be at least 3 symbols and no more then 10";
      setName("");
    }

    setError(state => ({
      ...state,
      name: errorMessage,
    }));
  }

  const validateImgUrl = (e) => {
    let errorMessage = ''
    const imgUrl = e.target.value;
    if (!imgUrl.startsWith('http')) {
      errorMessage = "The imgUr should start with http";
      setImgUrl("");
    }
    if (imgUrl === '') {
      errorMessage = "The imgUr can't be empty string";
      setImgUrl("");
    }

    setError(state => ({
      ...state,
      imgUrl: errorMessage,
    }));

  }

  const validatePassword = (e) => {
    let errorMessage = ''
    let password = e.target.value
    if (password.length < 4) {
      errorMessage = "The password should be at least 4 symbols";
      setPassword("");
    }

    setError(state => ({
      ...state,
      password: errorMessage,
    }));
  }

  const validateRepeatPassword = (e) => {
    let errorMessage = ''
    let repeatPassword = e.target.value
    if (repeatPassword !== password) {
      errorMessage = "Passwords doesn't match";
      setPassword("");
      setRepeatPassword("");
    }

    setError(state => ({
      ...state,
      RepeatPassword: errorMessage,
    }));
  }

  const onSubmit = (e) => {
    e.preventDefault();
    if (imgUrl && email && password && name) {
      authServices
        .register(email, password, name, imgUrl)
        .then(authData => {
          
          if(authData.code){
            setError(state => ({
              ...state,
              ServerErrorMessage: authData.message,
            }));
            navigate('/register')
          }else{
            userLogin(authData);
           navigate('/')
          }

        })
        .catch(() => {
          navigate('/404')
        })
    }

  }

  return (
    <>
      <section>
        <div className="card-body p-5 text-center">
          <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                <div className="card bg-dark text-white" style={{ borderRadius: 15 }}>
                  <div className="card-body p-5">
                    <h2 className="text-uppercase text-center mb-5">
                      Create an account
                    </h2>
                    {error.ServerErrorMessage &&
                          <div style={{ color: 'red' }}>{error.ServerErrorMessage}</div>
                    }
                    <form id='register' onSubmit={onSubmit}>
                      <div className="form-outline mb-4">
                        <input
                          name="name"
                          type="text"
                          id="form3Example1cg"
                          className="form-control form-control-lg"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          onBlur={validateName}
                        />
                        {error.name &&
                          <div style={{ color: 'red' }}>{error.name}</div>
                        }
                        <label className="form-label" htmlFor="form3Example1cg">
                          Your Name
                        </label>
                      </div>
                      <div className="form-outline mb-4">
                        <input
                          name="email"
                          type="email"
                          id="form3Example3cg"
                          className="form-control form-control-lg"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}

                        />
                        <label className="form-label" htmlFor="form3Example3cg">
                          Your Email
                        </label>
                      </div>
                      <div className="form-outline mb-4">
                        <input
                          name="password"
                          type="password"
                          id="form3Example4cg"
                          className="form-control form-control-lg"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          onBlur={validatePassword}
                        />
                        {error.password &&
                          <div style={{ color: 'red' }}>{error.password}</div>
                        }
                        <label className="form-label" htmlFor="form3Example4cg">
                          Password
                        </label>
                      </div>
                      <div className="form-outline mb-4">
                        <input
                          name="repeatPassword"
                          type="password"
                          id="form3Example4cdg"
                          className="form-control form-control-lg"
                          value={repeatPassword}
                          onChange={(e) => setRepeatPassword(e.target.value)}
                          onBlur={validateRepeatPassword}

                        />
                        {error.RepeatPassword &&
                          <div style={{ color: 'red' }}>{error.RepeatPassword}</div>
                        }
                        <label className="form-label" htmlFor="form3Example4cdg">
                          Repeat your password
                        </label>
                      </div>
                      <div className="form-outline mb-4">
                        <input
                          name="imgUrl"
                          type="text"
                          id="form3Example4cg"
                          className="form-control form-control-lg"
                          value={imgUrl}
                          onChange={(e) => setImgUrl(e.target.value)}
                          onBlur={validateImgUrl}
                        />
                        {error.imgUrl &&
                          <div style={{ color: 'red' }}>{error.imgUrl}</div>
                        }
                        <label className="form-label" htmlFor="form3Example4cg">
                          Img url
                        </label>
                      </div>
                      <div className="d-flex justify-content-center">
                        <button
                          type="submit"
                          className="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
                        >
                          Register
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
