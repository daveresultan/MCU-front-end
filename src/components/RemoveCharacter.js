import axios from 'axios';
import {API_URL} from '../constants';

function deleteCharacter() {

    async function handleSubmit(e) {
        e.preventDefault();
        
        let name = e.target.removeName.value;
        
        // console.log('name: '+ name);

        try {
            await axios.delete(
                API_URL+ '/deleteMcuCharacter/'+name
            );

            alert('The character has been removed successfully.');
        }
        catch(error) {
            console.log("error:" + error);
            alert("Something went wrong, character not removed: " + error);
        }
    }

    return (
        <form onSubmit={handleSubmit}>

            <label>Remove Character by Name</label>
            <br />
            Name:
            <input type='text' name='removeName' />
            <button>SUBMIT</button>

        </form>
    );
}

export default deleteCharacter;