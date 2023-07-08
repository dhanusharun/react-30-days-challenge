import React from 'react'
import axios from 'axios'

const baseURL = "https://api.jikan.moe/v4/";
const animeEndpoint = "anime";
const charchterEndpoint = "characters"

export const AnimeSearch = (query, page) => {
    return new Promise (async (resolve, reject) => {
        var url = baseURL+animeEndpoint;
        
        if (query !== undefined && query !== null){
            url = url + "?q=" + query;

            if (page !== undefined && page !== null){
                url = url + "&page=" + page;
            }

        }
        else
        {
            if (page !== undefined && page !== null){
                url = url + "?page=" + page;
            }
        }
        
        await axios.get(url)
            .then((response) => {
                if (response.status === 200){
                    resolve(response.data);
                }   
            })
            .catch((err) => {
                console.log("API Calling error " + err);
                reject(err);
            })
    })
}

export const CharacterSearch = (query) => {
    return new Promise (async (resolve, reject) => {
        var url = `${baseURL+animeEndpoint}/${query}/${charchterEndpoint}`;
                
        await axios.get(url)
            .then((response) => {
                if (response.status === 200){
                    resolve(response.data);
                }   
            })
            .catch((err) => {
                console.log("API Calling error " + err);
                reject(err);
            })
    })
}

export const AnimeAPI = () => {
  return (
    <div>
      
    </div>
  )
}

