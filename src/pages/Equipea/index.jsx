import React from 'react'
import Navbar from '../../components/navbarUser'
import { H2 } from './styles';
import { DIV } from './styles';
import { INPUT } from './styles';

class Equipea extends React.Component {
 render(){
    
    return (
        <>
            <Navbar/>
            {/*primeiro teste */}
            <br/>
            <H2>Alguém me salva</H2>
             {/*SEGUNDO teste */}
             <br/>
             
            <DIV>
                <br/><br/><br/>
                    <INPUT type="text" /> 
                <br/><br/><br/><br/><br/>
                    <INPUT type="text" />
            </DIV>
            
            
        </>
    )

 }
   
}

export default Equipea;