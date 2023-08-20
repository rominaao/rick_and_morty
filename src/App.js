import './App.css';
import Cards from './components/Carsd/Cards.jsx';
import Nav from './components/Nav/Nav.jsx';
import {useState} from 'react';
import axios from 'axios';

function App () {
  const [characters,setCharacters] = useState([]);
  
  function onSearch(id){
    axios (`https://rickandmortyapi.com/api/character/${id}`).then(({data}) => {
      if (data.name) {
        setCharacters([data,...characters ]);
      }
      else{
        window.alert('No hay personajes con ese ID!')
      }
    
    })
  }
  function onClose(id){
    setCharacters(characters.filter((character) => character.id !==id))
  }

  return (
    <div className='App'>
       {/*<SearchBar onSearch={(characterID) => window.alert(characterID)}/>*/}
       <Nav onSearch={onSearch}/>
       <Cards characters={characters}/>
    </div>
  );

}

export default App
