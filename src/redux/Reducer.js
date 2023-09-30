const inicialState ={
    myFavorites :[],
    allCharacters :[],
}
const rootReducer =(state = inicialState,{type, payload}) =>{
    switch (type){
        case 'ADD_FAV':
            const  addFavorites =[...state.myFavorites, payload]
            return{
                ...state,
                 myFavorites:[...addFavorites],
                allCharacters: [...addFavorites]
            }
        
        case 'REMOVE_FAV':
            let co = state.myFavorites.filter((character) =>{
                return character.id !== parseInt(payload);
            })
            return{myFavorites:co};
        case 'FILTER':
            return{
                ...state,
                myFavorites:state.allCharacters.filter((character)=>character.gender === payload)
            }           

        case 'ORDER':
            let orderFav;
            if (payload === "A") {
                orderFav = state.myFavorites.sort((a, b)=> a.id > b.id ? 1:-1 );
            }
            else{
                orderFav = state.myFavorites.sort((a, b)=> a.id < b.id ? 1:-1 );
            }
            return{
                ...state,
                myFavorites:[...orderFav],
            }

        default:
            return{...state};
    }
}
export default rootReducer;