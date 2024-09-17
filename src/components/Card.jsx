import React from "react";

export default function Card({img, rating, reviewCount, location, title, price, openSpots})
{ 
    let badgeText
    if (openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (location === "Online") {
        badgeText = "ONLINE"
    }
    return(
        <div className="card">
            {badgeText && <p className="event-type">{badgeText}</p>}
            <img src={img}/>
            <div className="card-content">
                <div className="title">
                    <img src="/assets/star.png"/>
                    <span>{rating}</span> 
                    <div className="review">
                        <span>({reviewCount})</span> <span>· {location} </span>
                    </div>
                </div>
                <p>{title}</p>
                <p><strong>From ${price}</strong> / person</p>
            </div>
        </div>
    )
}