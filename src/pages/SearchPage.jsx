
import { useState } from 'react'
import { useLocation,useNavigate } from 'react-router-dom';
import queryString from 'query-string';
import { getHeroesByName } from '../helpers/getHeroesByName'
import HeroCard from '../components/HeroCard';



const SearchPage = () => {
  const location=useLocation();
  const navigate=useNavigate();
 const {q}=queryString.parse(location.search);
const[searchInputText,setSearchInputText]= useState(q)
  const onInputChange=(event)=>{
    setSearchInputText(event.target.value)
  }

const onFormSubmit=(event)=>{
    event.preventDefault();
      if(searchInputText.trim().length<3)return;
    navigate(`?q=${searchInputText}`);
   
}

const heroes=getHeroesByName(q);

  return (
    <div className="mt-5">
      <div className="row">
      <div className="col-5">
        <h4 className="mb-3">Search a hero

        </h4>
        <form onSubmit={onFormSubmit}>
          <input 
          type="text"
          placeholder="Search a hero"
          className="form-control"
          name="searchText"
          value={searchInputText}
          onChange={onInputChange}
          />
          <button className="btn btn-dark w100 mt-3">Search</button>
        </form>
        
      </div>
      <div className="col-7">
        <h4 className="text-center">Results</h4>
      {
        heroes.length>0?
        heroes.map(hero=>{
          return <HeroCard key={hero.id} hero={hero}/>
      })
        :
          <div className="'alert alert-danger">
            there is not a hero with the name <b>{q}</b>
          </div>
      }

      </div>

      </div>

    </div>
   
  )
}

export default SearchPage