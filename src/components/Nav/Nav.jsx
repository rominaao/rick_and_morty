import SearchBar from "../SearchBar/SearchBar.jsx";
import style from './Nav.module.css'
import {Link} from 'react-router-dom'

export default function Nav({onSearch,logout}){
    return(
        <nav>
          <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Rick_and_Morty.svg/1200px-Rick_and_Morty.svg.png"
        alt=""
        width="20%"
      />
            <Link to='/home' className={style.Link}>Home</Link>
            <Link to='/abuot' className={style.Link}>About</Link>
            <Link to='/favorite' className={style.Link}>
              <button>Favorites</button>
            </Link>
            <button className={style.Link} onClick={logout}></button>
            <SearchBar onSearch={onSearch}/>
        </nav>
    )
}