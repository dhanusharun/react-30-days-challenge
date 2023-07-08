import React, { useEffect, useState }  from 'react'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

import SearchBar from '../components/SearchBar';
import ResultWrapper from '../components/ResultWrapper';
import { AnimeSearch } from '../services/AnimeAPI'

const ResultPage = () => {

  const [anime, setAnime] = useState([]);
  const [pagination, setPagination] = useState([]);
  const [query, setQuery] = useState("");
  
  useEffect(() => {
    AnimeSearch().then((data) => {
      setAnime(data.data);
      setPagination(data.pagination);
    });
  }, [])


  const handleSearchChange = (e) => {
    setQuery(e.target.value);
  }

  const handleSearchClick = () => {
    AnimeSearch(query).then((data) => {
      setAnime(data.data);
      setPagination(data.pagination);
    });
  }

  const handlePageChange = (event, page) => {
    AnimeSearch(query, page).then((data) => {
      setAnime(data.data);
      setPagination(data.pagination);
    });
  };

  return (
    <div className='main-wrapper'>
    {/* <div className='row'>
      <h1>Result Page</h1>
    </div> */}
    <div className='row'>
      <SearchBar handleSearchChange={handleSearchChange} handleSearchClick={handleSearchClick} value={query} />
    </div>
    <div className='row'>
      <ResultWrapper animeData={anime} pageName={"result"}  />
    </div>
    <div className='row justify-content-center'>
      <div className='col-10 col-sm-7 col-md-6 col-lg-4 col-xl-4'>
        <Pagination onChange={handlePageChange} count={pagination.last_visible_page} color="secondary"/>
      </div>
    </div>
    </div>
  )
}

export default ResultPage
