/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/iframe-has-title */

import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router';
import { CryptoCard } from './CryptoCard'
import * as cryptoServices from "../../Service/cryptoServices"


export const Home = () => {
  const [crypto, setCrypto] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    cryptoServices
      .getAll()
      .then(result => {
        setCrypto(result);
      })
      .catch((err) => {
        navigate('/404')
      })
  }, [])

  return (
    <>

      <section className="u-clearfix u-grey-10 u-section-1" id="sec-8fdd">
        <h1 className="text-center">Crypto Dictionary</h1>
        <div className="u-clearfix u-sheet u-valign-middle u-sheet-1">
          <div className="u-expanded-width u-list u-list-1">
            <div className="u-repeater u-repeater-1">

              {crypto.map(x => <CryptoCard key={x._id} data={x} />)}


            </div>
          </div>
        </div>
      </section>
      <section className="u-clearfix u-section-2" id="sec-49d8">
        <div className="u-clearfix u-sheet u-sheet-1">
          <div className="u-expanded-width u-video u-video-1">
            <div className="embed-responsive embed-responsive-1">
              <iframe
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%"
                }}
                className="embed-responsive-item"
                src="https://www.youtube.com/embed/1YyAzVmP9xQ?mute=0&showinfo=0&controls=0&start=0"
                frameBorder={0}
                allowFullScreen=""
              />
            </div>
          </div>
        </div>
      </section>

    </>


  )
}