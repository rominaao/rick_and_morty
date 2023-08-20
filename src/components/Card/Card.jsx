import styled from 'styled-components';

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
`

const styleS ={
    display : "inline-block",
    fontSize : '16px',
    color : 'blueviolet',
    marginRight: '15px',
    marginTop: '-10px'

}

const styleG ={
   display : "inline-block",
   fontSize : '16px',
   color : 'lightcoral',
   marginTop: '-10px'

}

export default function Card(props) {
   //style={{display: 'flex', justifyContent:'space-between'}}
   return (
      <DivCard>
         <Button onClick={props.onClose}>X</Button>
         <h2 style={{textDecoration: 'none', color: 'white',}}>{props.name}</h2>
         <h4 >{props.status}</h4>
         <h4 style={styleS}>{props.species}</h4>
         <h4 style={styleG}>{props.gender}</h4>
         <img style={{display :'block'}} src={props.image} alt="" /> 
      </DivCard>
   );
}
