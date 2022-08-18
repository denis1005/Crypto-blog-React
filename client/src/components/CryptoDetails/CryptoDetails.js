/* eslint-disable react-hooks/exhaustive-deps */
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import * as cryptoServices from "../../Service/cryptoServices"
import { useNavigate } from 'react-router';

export const CryptoDetails= ()=>{
  const { cryptoId } = useParams();
  const [selected, setSelected] = useState({});
  const navigate=useNavigate()

  useEffect(() => {
    cryptoServices.getOne(cryptoId)
      .then(result => {
        setSelected(result);
      })
      .catch((err)=>{
        navigate('/404')
    })
  }, [])
   return(
     
    <>
  <section className="u-clearfix u-section-2" id="sec-51c0">
    <div className="u-clearfix u-sheet u-sheet-1">
      <h1 className="u-text u-text-default u-title u-text-1">Details</h1>
      <div className="u-list u-list-1">
        <div className="u-repeater u-repeater-1">
          <div className="u-container-style u-list-item u-repeater-item">
            <div className="u-container-layout u-similar-container u-container-layout-1">
              <span className="u-icon u-icon-circle u-text-palette-1-base u-icon-1">
                <svg
                  className="u-svg-link"
                  preserveAspectRatio="xMidYMin slice"
                  viewBox="0 0 515.556 515.556"
                  style={{}}
                >
                  <use
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    xlinkHref="#svg-4802"
                  />
                </svg>
                <svg
                  className="u-svg-content"
                  viewBox="0 0 515.556 515.556"
                  id="svg-4802"
                >
                  <path d="m0 274.226 176.549 176.886 339.007-338.672-48.67-47.997-290.337 290-128.553-128.552z" />
                </svg>
              </span>
              <p className="u-text u-text-2">
                {selected.description}{" "}
              </p>
            </div>
          </div>
          <div className="u-container-style u-list-item u-repeater-item">
            <div className="u-container-layout u-similar-container u-container-layout-2">
              <span className="u-icon u-icon-circle u-text-palette-1-base u-icon-2">
                <svg
                  className="u-svg-link"
                  preserveAspectRatio="xMidYMin slice"
                  viewBox="0 0 515.556 515.556"
                  style={{}}
                >
                  <use
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    xlinkHref="#svg-da25"
                  />
                </svg>
                <svg
                  className="u-svg-content"
                  viewBox="0 0 515.556 515.556"
                  id="svg-da25"
                >
                  <path d="m0 274.226 176.549 176.886 339.007-338.672-48.67-47.997-290.337 290-128.553-128.552z" />
                </svg>
              </span>
              <p className="u-text u-text-3">
                {selected.useCases}{" "}
              </p>
            </div>
          </div>
          <div className="u-container-style u-list-item u-repeater-item">
            <div className="u-container-layout u-similar-container u-container-layout-3">
              <span className="u-icon u-icon-circle u-text-palette-1-base u-icon-3">
                <svg
                  className="u-svg-link"
                  preserveAspectRatio="xMidYMin slice"
                  viewBox="0 0 515.556 515.556"
                  style={{}}
                >
                  <use
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    xlinkHref="#svg-4d03"
                  />
                </svg>
                <svg
                  className="u-svg-content"
                  viewBox="0 0 515.556 515.556"
                  id="svg-4d03"
                >
                  <path d="m0 274.226 176.549 176.886 339.007-338.672-48.67-47.997-290.337 290-128.553-128.552z" />
                </svg>
              </span>
              <p className="u-text u-text-4">
                {selected.founder}.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="u-clearfix u-grey-10 u-section-3" id="sec-b437">
    <div className="u-clearfix u-sheet u-valign-bottom-md u-valign-middle-lg u-valign-middle-sm u-valign-middle-xl u-valign-middle-xs u-sheet-1">
      {/*product*/}
      {/*product_options_json*/}
      {/*{"source":""}*/}
      {/*/product_options_json*/}
      {/*product_item*/}
      <div className="u-container-style u-expanded-width u-product u-product-1">
        <div className="u-container-layout u-container-layout-1">
          {/*product_image*/}
          <img
            alt=""
            className="u-image u-image-default u-product-control u-image-1"
            data-image-width={2000}
            data-image-height={1333}
            src={process.env.PUBLIC_URL + '/images/adrees.png'}
          />
          {/*/product_image*/}
          <div className="u-align-center u-container-style u-group u-shape-rectangle u-white u-group-1">
            <div className="u-container-layout u-container-layout-2">
              {/*product_content*/}
              <div className="u-product-control u-product-desc u-text u-text-1">
                {/*product_content_content*/}
                <p>
                  If you find this information interesting you can tip some sats to the lightning network address.
                </p>
                {/*/product_content_content*/}
              </div>
              {/*/product_content*/}
            </div>
          </div>
        </div>
      </div>
      {/*/product_item*/}
      {/*/product*/}
    </div>
  </section>
</>

   
   )
}