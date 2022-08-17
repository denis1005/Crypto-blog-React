/* eslint-disable react-hooks/exhaustive-deps */
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import * as memeServices from "../../Service/memeServices"

export const MemeDetails=()=>{

    const { memeId } = useParams();
    const [selected, setSelected] = useState({});
  
    useEffect(() => {
      memeServices.getOne(memeId)
        .then(result => {
          setSelected(result);
          console.log(result)
        });
    }, [])

    return(
    <section className="u-align-center u-clearfix u-section-1" id="sec-fff7">
  <div className="u-clearfix u-sheet u-valign-middle-md u-valign-middle-sm u-valign-middle-xs u-sheet-1">
    {/*post_details*/}
    {/*post_details_options_json*/}
    {/*{"source":""}*/}
    {/*/post_details_options_json*/}
    {/*blog_post*/}
    <div className="u-container-style u-expanded-width u-post-details u-post-details-1">
      <div className="u-container-layout u-container-layout-1">
        {/*blog_post_image*/}
        <img
          alt=""
          className="u-blog-control u-expanded-width u-hover-feature u-image u-image-default u-image-1"
          src={selected.imgUrl}
        />
        {/*/blog_post_image*/}
        {/*blog_post_header*/}
        <h2 className="u-blog-control u-text u-text-1">
          <a className="u-post-header-link" href="blog/post-5.html">
            {/*blog_post_header_content*/}{selected.title}
            {/*/blog_post_header_content*/}
          </a>
        </h2>
        {/*/blog_post_header*/}
        <h3
          className="u-text u-text-2"
          data-animation-name="counter"
          data-animation-event="scroll"
          data-animation-duration={3000}
        >
          Likes:0
        </h3>
      
        {/*blog_post_content*/}
       
        {/*/blog_post_content*/}
        <a
          href="https://nicepage.com/k/aesthetic-website-templates"
          className="u-btn u-btn-round u-button-style u-hover-palette-1-light-1 u-palette-1-base u-radius-50 u-btn-2"
        >
          Edit
        </a>
        <a
          href="https://nicepage.com/website-mockup"
          className="u-btn u-btn-round u-button-style u-hover-palette-1-light-1 u-palette-1-base u-radius-50 u-btn-3"
        >
          Delete
        </a>

        <a
          href="https://nicepage.com/website-mockup"
          className="u-btn u-btn-round u-button-style u-hover-palette-1-light-1 u-palette-1-base u-radius-50 u-btn-3"
        >
          Like
        </a>
      </div>
    </div>
    {/*/blog_post*/}
    {/*/post_details*/}
  </div>
</section>
    )

}