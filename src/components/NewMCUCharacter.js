import axios from 'axios';
import { Outlet, Link } from 'react-router-dom';

const newMCUCharacter = () => {

    async function handleSubmit(e) {
        e.preventDefault();
        
        let name = e.target.newName.value;
        let debut = e.target.debut.value;
        let debutYear = e.target.debutYear.value;

        console.log('name: '+ name + ', debut: ' + debut + ', debut year: ' + debutYear);

        try {
            await axios.post(
                'http://localhost:3001/api/createMCUCharacter',
                {
                    name,
                    debut,
                    debutYear
                }
            );

            alert('The character has been inserted successfully.');
        }
        catch(e) {
            console.log("error:" + e);
            alert("Something went wrong, character not inserted");
        }
    }

    return (
        <>
        <form onSubmit={handleSubmit}>

            <label>Add a new MCU Hero!</label>
            <br />
            Name:
            <input type='text' name='newName' />
            <br />
            Debut:
            <input type='text' name='debut' />
            <br />
            Debut Year:
            <input type='number' name='debutYear' />

            <button>SUBMIT</button>


        </form>
        
        <Outlet />
        </>
    )
}

export default newMCUCharacter;