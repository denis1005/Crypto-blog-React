/* eslint-disable jsx-a11y/alt-text */
import {Link} from 'react-router-dom'

export const CryptoCard=({data})=>{
    return(
        <div className="u-container-style u-list-item u-repeater-item u-video-cover u-white u-list-item-2">
  <div className="u-container-layout u-similar-container u-valign-top u-container-layout-2">
    <h3 className="u-text u-text-default u-text-3">{data.name}</h3>
    <div className="u-border-4 u-border-palette-3-base u-expanded-width u-line u-line-horizontal u-line-2" />
    <img
      src={data.imgUrl}
      alt=""
      className="u-expanded-width-lg u-expanded-width-md u-expanded-width-sm u-expanded-width-xs u-image u-image-default u-image-2"
      data-image-width={2000}
      data-image-height={1333}
      
    />
    <p className="u-text u-text-default u-text-4">
         {data.description}
    </p>
    <Link to={`/cards/details/${data._id}`} className="u-btn u-button-style u-palette-3-base u-btn-2">
      Details
    </Link>
  </div>
</div>

        
    )
}