import React from "react";
import "../style/Home.css";
import "../style/Works.css";
import Navbar from "../components/navbar";
import Card from "../components/cards";




class Works extends React.Component {
  render() {
    return (
      <>
        <Navbar />
        <main className="main-work">
          {/* {it?.map()} */}
          <Card />
        </main>
      </>
    );
  }
}

export default Works;
