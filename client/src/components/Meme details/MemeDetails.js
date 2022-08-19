/* eslint-disable eqeqeq */
/* eslint-disable react-hooks/exhaustive-deps */
import { Link, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import * as memeServices from "../../Service/memeServices"
import { useNavigate } from 'react-router-dom';
import { MemeContext } from '../../context/Memecontext';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import * as likeServices from '../../Service/likeServices'
import { Likes } from '../Likes/Likes'

export const MemeDetails = () => {
  const { user } = useContext(AuthContext);
  const { memeDelete } = useContext(MemeContext);
  const navigate = useNavigate();
  const { memeId } = useParams();
  const [selected, setSelected] = useState({});
  const [like, setLike] = useState({});
  const [allLike, setAllLike] = useState(0);
  const [hasLiked, setHasLiked] = useState(0);


  useEffect(() => {
    memeServices.getOne(memeId)
      .then(result => {
        setSelected(result);

      });
  }, [])

  useEffect(() => {
    likeServices.getLikes(memeId)
      .then((res) => {
        setAllLike(res);
        
      })
  }, [like])

  useEffect(() => {
    likeServices.hasLiked(memeId, user._id)
      .then(res => {
        setHasLiked(res);
     
      })
  }, [hasLiked, like])


  const OnDeleteHandler = (e) => {
    memeServices.deleteOne(memeId)
      .then((res) => {
        memeDelete(memeId)
        navigate('/memes')
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const OnLikeHandler = (e) => {
    if (e.target.textContent == 'Like') {
      likeServices.likeMeme(memeId)
        .then((res) => {
          setLike(res);
          setHasLiked(1);
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }

  return (
    <section className="u-align-center u-clearfix u-section-1" id="sec-fff7">
       <h1 className="text-center">{selected.title}</h1>
      <div className="u-clearfix u-sheet u-valign-middle-md u-valign-middle-sm u-valign-middle-xs u-sheet-1">
        {/*post_details*/}
        {/*post_details_options_json*/}
        {/*{"source":""}*/}
        {/*/post_details_options_json*/}
        {/*blog_post*/}
        <div className="u-container-style u-expanded-width u-post-details u-post-details-1">
          <div className="u-container-layout u-container-layout-1">
          <img src={selected.imgUrl} class="rounded mx-auto d-block" alt="..."/>
          
            
          
           
            {/*/blog_post_header*/}
            <h3
              className="u-text u-text-2"
              data-animation-name="counter"
              data-animation-event="scroll"
              data-animation-duration={3000}
            >
              <Likes likes={allLike}></Likes>
            </h3>
            {user.email
                
                ? <div class="text-center">
                    <div className="btn-group">
                {user._id == selected._ownerId
                  ? <>
                    <Link
                      to={`/memes/edit/${memeId}`}
                      className="u-btn u-btn-round u-button-style u-hover-palette-1-light-1 u-palette-1-base u-radius-50 u-btn-2"
                    >
                      Edit
                    </Link>
                    <button onClick={OnDeleteHandler}
                      href="https://nicepage.com/website-mockup"
                      className="u-btn u-btn-round u-button-style u-hover-palette-1-light-1 u-palette-1-base u-radius-50 u-btn-3"
                    >
                      Delete
                    </button>
                  </>
                  : <>
                    {hasLiked==0
                      ? <button onClick={OnLikeHandler}
                        className="u-btn u-btn-round u-button-style u-hover-palette-1-light-1 u-palette-1-base u-radius-50 u-btn-3"
                      >
                        Like
                      </button>
                      : <></>
                    }

                  </>
                }


                    </div>
                </div>

              : <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <h1>You need to be log in to like the meme</h1>
              </div>
            }

          </div>
        </div>
        {/*/blog_post*/}
        {/*/post_details*/}
      </div>
    </section>
  )

}