import './App.css';
import Cards from './components/Carsd/Cards.jsx';
import Nav from './components/Nav/Nav.jsx';
import About from './components/About/About.jsx';
import Detail from './components/Detail/Detali.jsx';
import  Form  from './components/Form/Form.jsx';
import Error from './components/Errors/Error'
import Favorites from './components/Favorites/Favorites.jsx';
import {useState, useEffect} from 'react';
import axios from 'axios';
import {Route ,Routes, useLocation, useNavigate} from 'react-router-dom';

function App () {
  const [characters,setCharacters] = useState([]);  
  const navigate = useNavigate(); 
  const [access, setAccess] = useState(false); 
  const EMAIL = "mail@gmail.com";
  const PASSWORD = "hola123";

  function login(userData) {
    if (userData.password === PASSWORD && userData.username === EMAIL) {
        setAccess(true);
        navigate('/home');
    }
  }
  function logout(){
    setAccess(false);
  }

  useEffect(() => {
     !access && navigate('/');
  }, [access]);
  
  function onSearch(id){
    axios (`https://rickandmortyapi.com/api/character/${id}`)
    .then(({data}) => {
      if (data.name) {
        setCharacters([data,...characters ]);
      }
      else{
        window.alert('No hay personajes con ese ID!')
      }
    
    })
  }
 
  function random() {
    let randomId = Math.ceil(Math.random() * 826);
    onSearch(randomId);
  }

  function onClose(id){
    setCharacters(characters.filter((character) => character.id !==id))
  }
  const locations = useLocation();
  
  return (
    <div className='App'>
       {/*<SearchBar onSearch={(characterID) => window.alert(characterID)}/>*/}
       
       {locations.pathname !== '/'&&(
          <Nav onSearch={onSearch} random={random} logout ={logout}/>
       )}

       <Routes>
        <Route path="/" element={<Form login={login} />}></Route>
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </div>
  );
}

export default App
