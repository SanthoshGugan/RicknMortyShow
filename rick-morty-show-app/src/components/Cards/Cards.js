import React from "react";

import {CardItem} from "./CardItem";
import "./Cards.css";
export const Cards = (props) => {
    const renderCardItem = (cardList)=>{
        if(!cardList.length)
            return <div className="noCards">No Cards</div>
        return (
            <>
                {cardList.map(cardItem => {
                    return <CardItem card={cardItem} />;
                })}
            </>
        );
    }
    return (
        <div className="cards">
            {renderCardItem(props.cardList)}
        </div>
    );
}