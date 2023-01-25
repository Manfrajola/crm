import {React, useState} from 'react'
import Navbar from "../../components/navbarUser"

import { H1, Div, Div2, Div3, Div4 } from "./styles";

const Equipeb = () => {
  const[message, setMessage] = useState('');

  const handleMessage = (e) => {
    setMessage(e.target.value);

  }

  return (
    <>
    <Navbar />
      <H1>Vamos</H1>
      <Div>
        <label>Digite Algo:</label>
        <Div2>
          <Div4>
          <input
            type="text"
            id="message"
            name="message"
            onChange={handleMessage}
            value={message}>
          </input>
          </Div4>
          <Div3>
            <span>{message}</span>
          </Div3>
        </Div2>
      </Div>
    </>
  )
}

export default Equipeb;