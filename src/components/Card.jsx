import React from "react";

export default function Card(props)
{ 
    let badgeText
    if (props.item.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.item.location === "Online") {
        badgeText = "ONLINE"
    }
    return(
        <div className="card">
            {badgeText && <p className="event-type">{badgeText}</p>}
            <img src={props.item.coverImg}/>
            <div className="card-content">
                <div className="title">
                    <img src="/assets/star.png"/>
                    <span>{props.item.stats.rating}</span> 
                    <div className="review">
                        <span>({props.item.stats.reviewCount})</span> <span>·{props.item.location}</span>
                    </div>
                </div>
                <p>{props.item.title}</p>
                <p><strong>From ${props.item.price}</strong> / person</p>
            </div>
        </div>
    )
}