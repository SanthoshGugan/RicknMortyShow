import React from "react";
import DateFormatter from "../../utils/DateFormatter";

import "./CardItem.css";

export const CardItem = (props) => {
    const cardItem = props.card;
    const dateFormatter = new DateFormatter();
    return (
        <div className="cardItem">
            <div className="imageWrapper">
                <img src={cardItem.image} alt={cardItem.origin.name}/>
                <div className="imageOverlay">
                    <div className="characterName">{cardItem.name}</div>
                    <div className="characterMeta">id : {cardItem.id} - created {dateFormatter.dateToText(cardItem.created)}</div>
                </div>
            </div>
            <div className="characterInfo">
                <ul>
                    <li key={cardItem.id +"status"}>
                        <span className="heading">STATUS</span>
                        <span className="value">{cardItem.status}</span>
                    </li>
                    <li key={cardItem.id +"SPECIES"}>
                        <span className="heading">SPECIES</span>
                        <span className="value">{cardItem.species}</span>
                    </li>
                    <li key={cardItem.id +"GENDER"}>
                        <span className="heading">GENDER</span>
                        <span className="value">{cardItem.gender}</span>
                    </li>
                    <li key={cardItem.id +"ORIGIN"}>
                        <span className="heading">ORIGIN</span>
                        <span className="value">{cardItem.origin.name}</span>
                    </li>
                    <li key={cardItem.id +"LAST LOCATION"}>
                        <span className="heading">LAST LOCATION</span>
                        <span className="value">{cardItem.location.name}</span>
                    </li>
                </ul>
            </div>

        </div>
    );
}