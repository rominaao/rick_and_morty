import SearchBar from "../SearchBar/SearchBar.jsx"

export default function Nav({onSearch}){
    return(
        <nav>
          <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Rick_and_Morty.svg/1200px-Rick_and_Morty.svg.png"
        alt=""
        width="20%"
      />
            <SearchBar onSearch={onSearch}/>
        </nav>
    )
}