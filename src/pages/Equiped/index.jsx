import React,{ useState } from "react" ;
import Navbar from "../../components/navbarUser";

import {H1} from "./styles";
import { Span } from "./styles";
//import{Div2} from "./styles";

function Equiped() {

    const [text,setText] = useState()

    const reflectedMessage = (e) => {
        setText(e.target.value);
    
      }
    



    return (

      <>
        <Navbar />
        <H1>Equiped</H1>
      
    
        <input type="text" id="textMessage" name="textMessage"
          onChange={reflectedMessage} value={text}/>

            <Span>{text}</Span>
        
        
      </>
    );
}

export default Equiped;

//<Div2 className="divText2"></Div2>