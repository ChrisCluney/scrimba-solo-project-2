import React from "react";


import Fill2 from "../images/Fill219.png";


export default function JournalEntry(props) {
    return(
        <section className="sec--entry">
            <div>
                <img src={`${props.item.imageUrl}`} alt="" className="pic--sample"/>
            </div>
            <div className="info">
                <div className="location--section">
                    <img src={Fill2} alt="" className="location--mark"/>
                    <h3 className="name-location">{props.item.location}</h3>
                    <h3 className="link">
                    
                    
                        <a href={props.item.googleMapsUrl}>View on Google Maps</a>
                    
                    </h3>
                </div>
                <div>
                    <h1 className="bold">{props.item.title}</h1>
                </div>
                <div>
                    <h3>{props.item.startDate} - {props.item.endDate}</h3>
                </div>
                <p>{props.item.description}</p>
            </div>
            <hr />
        </section>
    )
}