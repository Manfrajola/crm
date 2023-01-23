import React from "react";
import {useState} from "react";
import styles from './styles';
import Navbar from "../../components/navbarUser/index";

  

  function Equipec (){
    const [value, setValue] = useState();

        const handleChange = (e) =>{
          setValue(e.target.value);}
        return(
          <>
          <Navbar> 
            
          </Navbar>
          <body>
            <div>
              <div style={styles.triangulo}>  
              <p>{value}</p>
              </div>
            <input style={styles.input} 
            type="text" 
            value={value} 
            onChange={handleChange} 
            className="estilo-input">
            </input>
             </div>
             </body>
             </>
        );
  }
     export default Equipec;

