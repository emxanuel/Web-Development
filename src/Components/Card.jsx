import React from "react";

function Card(props){
    return (
        <div className="card">
            <h1 className="name">{props.name}</h1>
            <img className="image" src={props.img} alt="card"/>
            <p className="tel">{props.tel}</p>
            <p className="email">{props.email}</p>
        </div>
    )
}

export default Card