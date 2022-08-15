import {Link} from 'react-router-dom'

export const CryptoCard=({data})=>{
    return(
      <div className="card" style={{width: '18rem'}}>
      <img src={data.imgUrl} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{data.name}</h5>
        <p className="card-text">{data.description}</p>
        <Link to={`/cards/details/${data._id}`} className="btn btn-primary">Details</Link>
      </div>
    </div>
    )
}