import React from "react";

import { Ul, Li, Span, Nav, Slink } from "./styles";

class Navbar extends React.Component {
  render() {
    return (
      <Nav>
        <Ul>
          <Slink to="/home">
            <Li>
              <Span>Home</Span>
            </Li>
          </Slink>
          <Slink to="/home">
            <Li>
              <Span>Client</Span>
            </Li>
          </Slink>
          <Slink to="/home">
            <Li>
              <Span>Subject</Span>
            </Li>
          </Slink>
          <Slink to="/home">
            <Li>
              <Span>Planner</Span>
            </Li>
          </Slink>
          <Slink to="/home">
            <Li>
              <Span>Remark</Span>
            </Li>
          </Slink>
        </Ul>
      </Nav>
    );
  }
}

export default Navbar;
