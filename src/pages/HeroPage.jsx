import React from 'react'
import { Navigate, useLocation, useNavigate, useParams } from 'react-router-dom'
import {getHeroById} from '../helpers/getHeroById'
import './styles/heroPage.css';
const HeroPage = () => {
   //const location= useLocation()
    const navigate =useNavigate();

    const {heroId}=useParams();
    const hero=getHeroById(heroId);

    const{
        id,
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters,
    powerstats,} = hero;

const onBackClick =()=>{
    navigate(-1);
}

    if(!hero){
        return(
        <Navigate to='/home'/>
        )
    }


  return (
    <>
    <div className="card d-flex flex-wrap">
            <div className='container d-flex flex-wrap div-detail-container'>
                <div className='w-30'>
                    <img className='card-img-top img-detail' src={`/assets/${hero.id}.jpg`} alt="" />
                </div>
                <article className='article-detail w-30'>
                    <div className="card-body">
                        <h3 className="card-title">{superhero}</h3>
                        <h5>{alter_ego}</h5>
                    </div>
                        <ul className='list-group ul-detail'>
                            <li className="list-group-item" >{characters}</li>
                            <li className="list-group-item">{first_appearance}</li>
                            <li className="list-group-item">{publisher}</li>
                            <button className="btn btn-outline-primary w-100 mt-5"
                            onClick={onBackClick}
                            > Go Back</button>
                        </ul>
                </article>
                <article className='w-30 article-power'>
                    <h3> Powerstats</h3>
                    <ul className="list-group">
                        {
                             Object.entries(hero.powerstats).map(([key, value]) => {
                                return (
                                    <li key={key} className="list-group-item">
                                        <h4>{key} </h4>
                                        <span>{value} </span>
                                    </li>
                                )
                            })
                        }
                        </ul>
                </article>
               
            </div>
        </div>


    </>

  )
}

export default HeroPage