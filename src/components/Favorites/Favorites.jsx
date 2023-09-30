import { connect , useDispatch} from "react-redux";
import Card from "../Card/Card";
import { filterCards, orderCards } from "../../redux/Actions";
import { useRef } from "react";

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
        <select ref={order} onChange={handelOrder}>
            <option value="">Order:</option>
            <option value="A">Acendente</option>
            <option value="D">Desendente</option>
        </select>
        <select ref={filter} onChange={handelFilter}>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Genderless">Genderless</option>
            <option value="unknown">unknown</option>
            <option value="">Filter</option>
        </select>
        <div>
            
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
        </div>
        </>
    )
}
export const mapStateToProps = (state) =>{
    return{
        myFavorites:state.myFavorites
    }
}
export default connect(mapStateToProps, null)(Favorites)