import { API_URL } from '../constants';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import useAxios from './hooks/useAxios';


function McuHero() {
    
    const { name } = useParams();

    const [setUrl, data, loading, setLoading, error] = useAxios();

    useEffect(
        () => {
          setUrl(API_URL + "/getOneCharacter/" + name);
          console.log(API_URL + "/getOneCharacter/" + name);
          setLoading(true);
        }, []);

        return (
            <>
            <h1> Hero: { name }</h1>
            {
                (!loading && data) ?
                <>
                    <h2>Movie debut: {data.payload[0].debut}</h2>
                    <br/>
                    <h3> Debut year: {data.payload[0].debutYear}</h3>
                </>
                :
                <h1>loading...</h1>
            }    
          </>
        );

}

export default McuHero;