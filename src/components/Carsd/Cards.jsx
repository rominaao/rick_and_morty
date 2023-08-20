import Card from "../Card/Card";
import styled from 'styled-components';


export default function Cards({characters}) {
  return (
    <div className={styled.container}>
      {characters.map(c => 
          <Card 
            key= {c.id}
            name={c.name}
            status={c.status}
            species={c.species}
            gender={c.gender}
            image={c.image}
            onClose={() => alert('Eliminar')}
        />
      )}
    </div>
  );
}
