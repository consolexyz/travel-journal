import React from "react";

export default function Travel(props){
    return(
    <div className = " travel-container">
        <div className="travel-image">
            <img src ={`/assets/images/${props.coverImg}`} alt = "travel-image"  className = "travel-image"/>
        </div>
        <div>
            <img src ="/assets/images/location-icon.png"  alt ='Location icon' /><span>{props.location}</span><span><a href>View on Google Maps</a></span>
            <h2>{props.title}</h2>
            <p>{props.date}</p>
            <p>{props.description}</p>
        </div>
    </div>
    )
}