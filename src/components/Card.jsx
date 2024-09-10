import React from "react";

export default function Card(){
    return(
        <div className="card">
            <p className="event-type">SOLD OUT</p>
            <img src="src/assets/zaferesUSA.png"/>
            <div className="card-content">
                <div className="title">
                    <img src="src/assets/star.png"/>
                    <span>5.0</span> 
                    <div className="review">
                        <span>(6)</span> <span>· USA </span>
                    </div>
                </div>
                <p>Life lessons with Katie Zaferes</p>
                <p><strong>From $136</strong> / person</p>
            </div>
        </div>
    )
}