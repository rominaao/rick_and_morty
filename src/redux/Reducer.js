import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./actions";

const inicialState ={
    myFavorites :[],
    allCharacters :[],
}
const rootReducer =(state = inicialState,{type, payload}) =>{
    switch (type){
        case ADD_FAV:
            const  addFavorites =[...state.allCharacters, payload]
            return{
                ...state,
                 myFavorites:[...addFavorites],
                allCharacters: [...addFavorites]
            }
        
        case REMOVE_FAV:
            const deleteFavorites = state.myFavorites.filter((character) =>
                 character.id !== parseInt(payload)
            );
            return{
                ...state,
                myFavorites:[...deleteFavorites],
                allCharacters :[...deleteFavorites],
            };
        case FILTER:
            return{
                ...state,
                myFavorites:state.allCharacters.filter((character)=>character.gender === payload)
            }           

        case ORDER:
            let orderFav;
            if (payload === "A") {
                orderFav = state.myFavorites.sort((a, b) => ( a.id > b.id ? 1:-1));
            }
            else{
                orderFav = state.myFavorites.sort((a, b) => ( a.id < b.id ? 1:-1));
            }
            return{
                ...state,
                myFavorites:[...orderFav],
            };

        default:
            return{...state};
    }
}
export default rootReducer;