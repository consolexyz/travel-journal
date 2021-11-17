import React from "react";

export default function Travel(props){
    return(
    <div className = " travel-container">
        <div className = 'travel-sub-container'>
        <div className= 'travel'>
            <img src ={`/assets/images/${props.coverImg}`} alt = "travel-image"  className = "travel-image"/>
        </div>
        <div>
            <img src ="/assets/images/location-icon.png"  alt ='Location icon' /><span className = "travel-location">{props.location}</span><span className = "travel-link"><a href = "#">View on Google Maps</a></span>
            <h2 className = "travel-title">{props.title}</h2>
            <p className ="travel-date"> {props.date}</p>
            <p className = "travel-description">{props.description}</p>
        </div>
        </div>
    </div>
    )
}