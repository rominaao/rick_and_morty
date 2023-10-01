import style from './SearchBar.module.css';
import { useState } from 'react';

export default function SearchBar(props) {
   const [id , setId]=useState('');

   const handlechange =(event) =>{
      let {value} = event.target;
      setId(value);
   }


   return (
      <div>
         <input className={style.input} type='search' onChange={handlechange} value={id}/>
         <button className={style.button} onClick ={() =>props.onSearch(id)}>
            Agregar
         </button> 
         <button className={style.button} onClick={props.random}>
            Agragar Random
         </button>
      </div>
   );
}
