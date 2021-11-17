import React from "react";
import Navbar from "./Components/Navbar";
import "./style.css";
import Travel from "./Components/Travel";
import Data from "./Components/Data";
export default function App() {
const travel = Data.map( item => 
  <Travel 
  title ={item.title}
  date ={item.date}
  description ={item.description}
  coverImg={item.coverImg}
  location={item.location}
  />
  )
  return(
    <div>
    <Navbar />
    {travel}
  </div>
  )
  
}