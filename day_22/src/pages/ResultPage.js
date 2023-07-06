import React, { useEffect, useState }  from 'react'
import SearchBar from '../components/SearchBar';
import ResultWrapper from '../components/ResultWrapper';
import { AnimeSearch } from '../services/AnimeAPI'

const ResultPage = () => {

  const [anime, setAnime] = useState([]);
  const [query, setQuery] = useState("");
  
  useEffect(() => {
    AnimeSearch().then((data) => {
      setAnime(data.data);
    });
  }, [])


  const handleSearchChange = (e) => {
    setQuery(e.target.value);
  }

  const handleSearchClick = () => {
    AnimeSearch(query).then((data) => {
      setAnime(data.data);
    });
  }

  return (
    <div className='main-wrapper'>
    {/* <div className='row'>
      <h1>Result Page</h1>
    </div> */}
    <div className='row'>
      <SearchBar handleSearchChange={handleSearchChange} handleSearchClick={handleSearchClick} value={query} />
    </div>
    <div className='row'>
      <ResultWrapper animeData={anime} />
    </div>
    </div>
  )
}

export default ResultPage
