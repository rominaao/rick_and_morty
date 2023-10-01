import axios from 'axios';
import { useState ,useEffect} from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const t = {color: 'crimson'};
const info = {textAlign:'center', fontSize: 'medium'};
const imag ={borderRadius:'15px' ,border: "2px solid darkslateblue"};
const divPrincipal = {
    color : 'bisque',
    display: 'flex',
    width: '70%',
    margin: 'auto',
    marginTop: '60px',
};
const button ={
    backgroundColor: 'rgb(175, 8, 8)',
    color: 'darkseagreen',
    border: '0px',
    borderRadius: "3px",
    fontWeight: "bold",
    fontSize: "10px",
    padding: "10px",
    marginTop: "40px",
    cursor: "pointer",
}; 


export default function Detail(){
    const {id}= useParams();

    const [characters, setCharacters] =useState({});

    const navigate =useNavigate();
    
    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(
        ({ data }) => {
           if (data.name) {
              setCharacters(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacters({});
     }, [id]);

    return(
        <>
        <div style={divPrincipal} >
            <div style={info}>
                {characters.name && <p>
                    <b style={t}>Name: </b>
                    {characters.name}</p>}
                {characters.status && <p>
                    <b style={t}>Status: </b>
                    {characters.status}</p>}
                {characters.specie && <p>
                    <b style={t}>Specie: </b>
                    {characters.specie}</p>}
                {characters.gender && <p>
                    <b style={t}>Gender: </b>
                    {characters.gender}</p>}
                {characters.origin && <p>
                    <b style={t}>Origin: </b>
                    {characters.origin.name}</p>}
            </div>
            <img style={imag} src={characters.image}/>
        </div>
            <button style={button} onClick={() => navigate('/home')}>Volver Home</button>
        </>
    )
}