import React from 'react'
import HeroList from '../components/HeroList'

const MarvelPage = () => {
    return (
        <section className="mt-3">
            <h2>Marvel Page</h2>
            <hr />
            <HeroList publisher= {'Marvel Comics'}/>
        </section>
    )
}

export default MarvelPage