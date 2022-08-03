import React from 'react'
import {getHeroesByPublisher} from '../helpers/getHeroesByPublisher'
import HeroCard from './HeroCard'

function HeroList({publisher}) {


const heroes = getHeroesByPublisher(publisher);
return (
    <div className='heroes-container d-flex flex-wrap'>
        {
            heroes.map((hero) => {
                return (
                  
                    <HeroCard hero={hero} />
                )
            })
        }
    </div>
)
}

export default HeroList