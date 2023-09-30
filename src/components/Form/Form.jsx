import { useState } from "react";
import Validate from './Validate';

export default function Form(props){
   
    const [userData, setUserData] = useState({
        email: "",
        password:""
    })
    const [errors,setErrors] =useState({
        email: "",
        password:""
    })

    function handleChange(e) {
        setUserData({ ...userData, [e.target.name]: e.target.value });
        setErrors(Validate({ ...userData, [e.target.name]: e.target.value }));
        
    }
    function handleSubmit(e){
        e.preventDefault();
        props.login(userData);
    }
    
  return(
  <div>
    <form onSubmit={handleSubmit}>
      <label htmlFor="">Email:</label>
      <input
        type="text"
        name="email"
        value={userData.email}
        onChange={handleChange}
      />
      <p>{errors.email}</p>

      <label htmlFor="">Password:</label>
      <input
        type="Password"
        name="password"
        value={userData.password}
        onChange={handleChange}
      />
      <p>{errors.password}</p>
      <button type="submit">
        SUBMIT
      </button>
    </form>
  </div>
 )
}