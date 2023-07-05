import React from 'react'
import SearchBar from '../components/SearchBar';
import ResultWrapper from '../components/ResultWrapper';

const ResultPage = () => {
  return (
    <div className='main-wrapper'>
    <div className='row'>
      <h1>Result Page</h1>
    </div>
    <div className='row'>
      <SearchBar />
    </div>
    <div className='row'>
      <ResultWrapper />
    </div>
    </div>
  )
}

export default ResultPage
