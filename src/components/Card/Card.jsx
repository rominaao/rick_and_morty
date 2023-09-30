import styled from "styled-components";
import { Link } from "react-router-dom";
import { addFav, removeFav } from "../../redux/Actions";
import { connect } from "react-redux";
import { useState, useEffect } from "react";

const DivCard = styled.div`
  display: inline-block;
  background-color: rgba(72, 61, 139, 0.7);
  border-radius: 10px;
  overflow: hidden;
  margin: 10px 10px;
  max-width: 18.8rem;
`;
const Button = styled.button`
  background-color: chocolate;
  margin: 10px, 10px, 0px, 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const styleS = {
  display: "inline-block",
  fontSize: "16px",
  color: "blueviolet",
  marginRight: "15px",
  marginTop: "-10px",
};

const styleG = {
  display: "inline-block",
  fontSize: "16px",
  color: "lightcoral",
  marginTop: "-10px",
};

export function Card(props, addFav, removeFav, myFavorites) {
  //style={{display: 'flex', justifyContent:'space-between'}}
  const [isFav, setIsFav] = useState(false);

  const handelFavorite = () => {
    if (isFav) {
      setIsFav(false);
      removeFav(props.id);
    } else {
      setIsFav(true);
      addFav(props);
    }
  };
  
  useEffect(() => {
    myFavorites?.forEach((fav) => {
       if (fav.id === props.id) {
          setIsFav(true);
       }
    });
 }, [myFavorites, props.id]);

  return (
    <DivCard>
      {isFav ? (
        <button onClick={handelFavorite}>❤️</button>
      ) : (
        <button onClick={handelFavorite}>🤍</button>
      )}
      <Button onClick={props.onClose}>X</Button>
      <Link
        to={`/detail/${props.id}`}
        style={{ textDecoration: "none", color: "white" }}
      >
        <h2>{props.name}</h2>
      </Link>
      <h4>{props.status}</h4>
      <h4 style={styleS}>{props.species}</h4>
      <h4 style={styleG}>{props.gender}</h4>
      <img style={{ display: "block" }} src={props.image} alt="" />
    </DivCard>
  );
}
export const mapDispachToProps = (dispatch) => {
  return {
    addFav: (character) => {
      dispatch(addFav(character));
    },

    removeFav: (id) => {
      dispatch(removeFav(id));
    },
  };
};
export const mapStateToProps = (state) =>{
  return{
    myFavorites : state.myFavorites
  }
}
export default connect(null, mapDispachToProps)(Card);
