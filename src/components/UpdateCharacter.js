// import useAxios from "../hooks/useAxios";

// function UpdateMcuHero() {

//     async function handleSubmit(e) {
//         e.preventDefault();
        
//         let name = e.target.newName.value;
//         let debut = e.target.debut.value;
//         let debutYear = e.target.debutYear.value;

//         console.log('name: '+ name + ', debut: ' + debut + ', debut year: ' + debutYear);

//         try {
//             await axios.put(
//                 'http://localhost:3001/api/updateMcuCharacter',
//                 {
//                     name,
//                     debut,
//                     debutYear
//                 }
//             );

//             alert('The character has been updated successfully.');
//         }
//         catch(e) {
//             console.log("error:" + e);
//             alert("Something went wrong, character not updated");
//         }
//     }

//     return (
//         <>
//             <form onSubmit={handleSubmit}>
    
//                 <label>Let's update an MCU Hero:</label>
//                 <br />
//                 Name:
//                 <input type='text' name='newName' />
//                 <br />
//                 Debut:
//                 <input type='text' name='debut' />
//                 <br />
//                 Debut Year:
//                 <input type='number' name='debutYear' />
    
//                 <button>SUBMIT</button>
    
    
//             </form>
            
//         </>
//         )
// }

// export default UpdateMcuHero;