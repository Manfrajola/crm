import React from "react";
import Navbar from "../../components/navbar";

class Home extends React.Component {
  render() {
    return (
      <>
        <Navbar
          ul1="/home"
          name1="Home"
          ul2="/home"
          name2="Abaut"
          ul3="/home"
          name3="Contact"
        />
        <h1>Let's go!</h1>
      </>
    );
  }
}

export default Home;
