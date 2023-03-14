import axios from 'axios';
import { Outlet } from 'react-router-dom';
import { API_URL } from '../constants';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import useAxios from './hooks/useAxios';

const GetOneCharacter = () => {
  
  const { name } = useParams();

  const [setUrl, data, loading, setLoading, error] = useAxios();

  useEffect(
      () => {
        setUrl(API_URL + "/getOneCharacter/" + name);
        setLoading(true);
      }, []);

    async function handleSubmit(e) {
        e.preventDefault();
        
        let name = e.target.heroName.value;
        
        try {
            await axios.find(
                'http://localhost:3001/api/getOneCharacter',
                {
                    name,
                    // debut,
                    // debutYear
                }
            );
            alert('The character has been inserted successfully.');
        }
        catch(e) {
            console.log("error:" + e);
            alert("Something went wrong, character not found");
        }
    }

    return (
        <>
        <form onSubmit={handleSubmit}>

            <label>Get One Hero's Details!</label>
            <br />
            <br />
            Name:
            <input type='text' name='heroName' />
            <br />
            <br />
            <button>SUBMIT</button>

        </form>
        
        <>
            <h1> Hero: { name }</h1>
            {
                (loading && data) ?
                <>
                    <h2>Movie debut: {data.payload[0].debut}</h2>
                    <br/>
                    <h3> Debut year: {data.payload[0].debutYear}</h3>
                </>
                :
                <p><em>"Hero details will potentially go here"</em></p>
            }    
          </>

        <Outlet />
        </>
    )
}

export default GetOneCharacter;