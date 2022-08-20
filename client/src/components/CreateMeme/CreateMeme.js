import * as memeServices from "../../Service/memeServices"
import { useContext, useState } from 'react';
import { MemeContext } from '../../context/Memecontext';
import { useNavigate } from 'react-router';

export const CreateMeme = () => {
  const navigate = useNavigate()
  const [imgUrl, setImgUrl] = useState('');
  const [title, setTitle] = useState('');
  const [error, setError] = useState({
    imgUrl: '',
    title: '',
  });
  const { memeAdd } = useContext(MemeContext);

  const onChangeImgUrl = (e) => {
    setImgUrl(e.target.value);
  }

  const onChangeTitle = (e) => {
    setTitle(e.target.value)
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

  const validateTitle = (e) => {
    let errorMessage = ''
    if (title.length <= 3) {
      errorMessage = "The title should have at least 4 symbols";
      setTitle("");
    }
    if (title.length >= 7) {
      errorMessage = "The title should not have more then 7 symbols";
      setTitle("");
    }
   

    setError(state => ({
      ...state,
      title: errorMessage,
    }))
   }

  const onSubmit = (e) => {
    e.preventDefault();
    if (title && imgUrl) {
      memeServices
        .createOne(title, imgUrl)
        .then(res => {
          memeAdd(res)
          navigate('/memes')
        })
        .catch((err) => {
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
                      Create Meme
                    </h2>
                    <form id='create' onSubmit={onSubmit}>
                      <div className="form-outline mb-4">
                        <input
                          name="title"
                          type="text"
                          id="form3Example1cg"
                          className="form-control form-control-lg"
                          onChange={onChangeTitle}
                          onBlur={validateTitle}
                          value={title}
                        />
                         {error.title &&
                          <div style={{ color: 'red' }}>{error.title}</div>
                          }
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
                          value={imgUrl}
                          onBlur={validateImgUrl}
                          onChange={onChangeImgUrl}
                        />
                        {error.imgUrl &&
                          <div style={{ color: 'red' }}>{error.imgUrl}</div>
                        }
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