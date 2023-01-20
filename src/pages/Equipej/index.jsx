import React from 'react'
import { useState } from 'react';
import Navbar from "../../components/navbarUser"

import { H1, Button} from "./styles";

const Equipej = () => {

  const [name, setName] = useState();
  
  return (
    <>
    <Navbar/>
    <header>
        <div className="container">
            <Button>enviar</Button>
            <H1>Hello {name}</H1>
            <input type="text" value={name} onChange={e=>setName(e.target.value)} />
        </div>
    </header>
    </>
  )
}

export default Equipej;