import React from "react";

import {CardItem} from "./CardItem";
import "./Cards.css";
export const Cards = (props) => {
    return (
        <div className="cards">
            <CardItem />
            <CardItem />
            <CardItem />
            <CardItem />
            <CardItem />
            <CardItem />
            <CardItem />
            <CardItem />
        </div>
    );
}