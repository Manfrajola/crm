import React, { useState } from "react";
import Navbar from "../../components/navbarUser";
import { H1, Div, H2, Input } from "./styles";

const Equipef = () => {
  const [frase, setFrase] = useState();

  return (
    <>
      <Navbar />
      <Div>
        <Div>
          <H1>Equipe F</H1>
          <Input
            type="text"
            value={frase}
            onChange={(e) => setFrase(e.target.value)}
          />
          <H2>
            <b>{frase}</b>
          </H2>
        </Div>
      </Div>
    </>
  );
};

export default Equipef;
