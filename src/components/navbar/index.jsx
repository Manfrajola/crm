import React from "react";

import { Ul, Li, Span, Nav, Slink } from "./styles";

class Navbar extends React.Component {
  render() {
    return (
      <Nav>
        <Ul>
          <Slink to={this.props.ul1} style={{ textDecoration: "none" }}>
            <Li>
              <Span>{this.props.name1}</Span>
            </Li>
          </Slink>
          <Slink to={this.props.ul2} style={{ textDecoration: "none" }}>
            <Li>
              <Span>{this.props.name2}</Span>
            </Li>
          </Slink>
          <Slink to={this.props.ul3} style={{ textDecoration: "none" }}>
            <Li>
              <Span>{this.props.name3}</Span>
            </Li>
          </Slink>
        </Ul>
      </Nav>
    );
  }
}

export default Navbar;
