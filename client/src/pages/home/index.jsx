import React from "react";
import Featured from "../../components/featured";
import Navbar from "../../components/navbar";
import List from "../../components/list";
import "./index.scss"

function Home() {
  return (
    <div className="home">
      <Navbar/>
      <Featured type="movie"/>
      <List/>
      <List/>
      <List/>
      <List/>
    </div>
  );
}

export default Home;
