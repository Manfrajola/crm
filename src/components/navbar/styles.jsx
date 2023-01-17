import { Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
  width: 100vw;
  height: 3rem;
  background-image: linear-gradient(125deg, #de0b27 65%, #f21ec8 35%, #7e4602);
  display: flex;
  flex-direction: row-reverse;
  box-shadow: 0 2px 15px rgb(0, 0, 0, 0.5);
`;
export const Ul = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;
export const Li = styled.li`
  padding: 0px;
  margin: 0px;
  float: left;
`;
export const Slink = styled(Link)`
  padding: 0;
  margin: 0;
`;
export const Span = styled.samp`
  display: block;
  color: #000;
  padding: 8px 16px;
  text-decoration: none;
  :hover {
    background-color: #cf9610;
    padding: 13px 16px;
  }
`;
