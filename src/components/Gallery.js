import { API_URL } from '../constants';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import useAxios from './hooks/useAxios';
import { Link } from 'react-router-dom';

function Gallery() {

    const [setUrl, data, loading, setLoading, error] = useAxios();

  useEffect(
    () => {
      setUrl(API_URL + "/allCharacters");
      setLoading(true);
    }, []);

    return (
        <>
        <h1>Gallery</h1>
        {console.log(data)}
        {
            (!loading && data) ?
            data.payload.map(
                (mcuHero) => (
                    <li >
                      
                      {/* <Link to={`/getOneCharacter/${mcuHero.name}`}> */}
                      
                      <Link to={
                        {
                        pathname: `/getOneCharacter/${mcuHero.name}`,
                        state: 'hello world'
                        }
                      }>
                      {mcuHero.name}
                    </Link>
                    </li>
                )
            )
            // <h1>All Good</h1>
            :
            <h1>loading...</h1>
        }    
      </>
    );
}

export default Gallery;