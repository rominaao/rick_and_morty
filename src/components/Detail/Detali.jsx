import axios from 'axios';
import { useState ,useEffect} from 'react';
import { useParams, useNavigate } from 'react-router-dom';


export default function Detail(){
    const {id}= useParams();

    const [characters, setCharacters] =useState({});

    const navigate =useNavigate();
    
    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
           if (data.name) {
              setCharacters(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacters({});
     }, [id]);

    return(
        <div >
            <div>
                {characters.name && <p><b>Name: </b>{characters.name}</p>}
                {characters.status && <p><b>Status: </b>{characters.status}</p>}
                {characters.specie && <p><b>Specie: </b>{characters.specie}</p>}
                {characters.gender && <p><b>Gender: </b>{characters.gender}</p>}
                {characters.origin && <p><b>Origin: </b>{characters.origin.name}</p>}
            </div>
            <img src={characters.image}/>
            <button onClick={() => navigate('/home')}>Volver Home</button>
        </div>
    )
}