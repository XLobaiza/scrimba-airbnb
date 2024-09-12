import React from "react";

export default function Card({img, rating, reviewCount, country, title, price}){
    return(
        <div className="card">
            <p className="event-type">SOLD OUT</p>
            <img src={img}/>
            <div className="card-content">
                <div className="title">
                    <img src="src/assets/star.png"/>
                    <span>{rating}</span> 
                    <div className="review">
                        <span>({reviewCount})</span> <span>· {country} </span>
                    </div>
                </div>
                <p>{title}</p>
                <p><strong>From ${price}</strong> / person</p>
            </div>
        </div>
    )
}