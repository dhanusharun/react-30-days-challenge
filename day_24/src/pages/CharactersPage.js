import React, { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";
import ResultWrapper from "../components/ResultWrapper";
import { CharacterSearch } from '../services/AnimeAPI'
import { useParams } from "react-router";

const CharactersPage = () => {

  const { mal_id } = useParams();
  console.log(mal_id)
  const [anime, setAnime] = useState([]);
  const [query, setQuery] = useState(mal_id);

  useEffect(() => {
    CharacterSearch(mal_id).then((data) => {
      setAnime(data.data);
    });
  }, []);

  const handleSearchChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearchClick = () => {
    CharacterSearch(query).then((data) => {
      setAnime(data.data);
    });
  };

  return (
    <div>
      <div className="main-wrapper">
        {/* <div className='row'>
      <h1>Result Page</h1>
    </div> */}
        <div className="row">
          <SearchBar
            handleSearchChange={handleSearchChange}
            handleSearchClick={handleSearchClick}
            value={query}
          />
        </div>
        <div className="row">
          <ResultWrapper animeData={anime} pageName={"character"} />
        </div>
      </div>
    </div>
  );
};

export default CharactersPage;
