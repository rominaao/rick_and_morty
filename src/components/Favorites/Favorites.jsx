import { connect , useDispatch} from "react-redux";
import Card from "../Card/Card";
import SContainer from "../SContainer/SContainer"
import { filterCards, orderCards } from "../../redux/Actions";
import { useRef } from "react";

const styleS = {
    marginRight: "20px",
    padding: "15px",
    borderRadius: "5px",
} 

export const Favorites = (myFavorites)=>{
    const filter = useRef(null);
    const order = useRef(null);
    const dispatch=useDispatch();



    function handelOrder(e){
        dispatch(orderCards(e.target.value))

    }
    function handelFilter(e){
        dispatch(filterCards(e.target.value))

    }
    return(
        <>
        <select style={styleS} ref={order} onChange={handelOrder}>
            <option value="">Order:</option>
            <option value="A">Acendente</option>
            <option value="D">Desendente</option>
        </select>
        <select style={styleS} ref={filter} onChange={handelFilter}>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Genderless">Genderless</option>
            <option value="unknown">unknown</option>
            <option value="">Filter</option>
        </select>
        <SContainer>
            
            {myFavorites?.map((fav) =>(
             <Card 
                id={fav.id}
                key={fav.key}
                name={fav.name}
                species={fav.species}
                status={fav.status}
                origin={fav.origin}
                gender={fav.gender}
                image={fav.image}
              />
            ))}
        </SContainer>
        </>
    )
}
export const mapStateToProps = (state) =>{
    return{
        myFavorites:state.myFavorites
    }
}
export default connect(mapStateToProps, null)(Favorites)