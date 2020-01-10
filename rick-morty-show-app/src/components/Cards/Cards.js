import React from "react";

import {CardItem} from "./CardItem";
import "./Cards.css";
export const Cards = (props) => {
    const renderCardItem = (cardList)=>{
        if(!cardList.length)
            return <div className="noCards">No Cards</div>
        return (
            <>
                {cardList.map((cardItem, index) => {
                    return <CardItem card={cardItem} key={index}/>;
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