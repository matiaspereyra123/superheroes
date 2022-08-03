import React from 'react'
import { Link } from 'react-router-dom'

export const HeroCard =({hero})=>{

  return(
   

      <div className="card mb-3 m1-1 w-25" style={{width:'18rem'}}>
  <img src={`/assets/${hero.id}.jpg`} className="card-img-top" alt={hero.superhero}/>
  <div className="card-body">
    <h5 className="card-title">{hero.superhero}</h5>
    <p className="card-text">{hero.publisher}</p>
      <Link to={`/hero/${hero.id}`} className="btn btn-outline-success w-100">Details</Link>
  </div>
</div>
 



  )
}
  

  

export default HeroCard



  