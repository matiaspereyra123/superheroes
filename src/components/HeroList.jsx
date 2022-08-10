import React from 'react'
import {getHeroesByPublisher} from '../helpers/getHeroesByPublisher'
import HeroCard from './HeroCard'

function HeroList({publisher}) {


const heroes = getHeroesByPublisher(publisher);
return (
    <div className='row ml-auto mr-auto'>
        {
            heroes.map((hero) => {
                return (
                  
                    <HeroCard key={hero.id}hero={hero} />
                )
            })
        }
    </div>
)
}

export default HeroList