import Card from "../Card/Card";
import SContainer from "../SContainer/SContainer"


export default function Cards(props) {
  const {characters, onClose} =props;
  return (
    <SContainer>
      {characters.length ===0 ?(
        <p style={{color: 'rgb(244, 246, 248)', fontSize: "50px"}}>
          NECESITAS PERSONAJES
        </p>
      ):
      (characters.map((c) => (
          <Card 
            key= {c.id}
            id={c.id}
            name={c.name}
            status={c.status}
            species={c.species}
            gender={c.gender}
            image={c.image}
            onClose={() => props.onClose(c.id)}
        />
      ))
      )}
    </SContainer>
  );
}
