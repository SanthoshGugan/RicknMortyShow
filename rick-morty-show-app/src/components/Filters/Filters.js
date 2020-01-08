import React from "react";

import "./Filters.css";

import {FilterItem} from "./FilterItem";

export const Filters = (props) => {
    return (
        <div className="filters">
            <div className="filterTitle">
                <h2>Filters</h2>
                <div className="filterVisibility">
                    <div className="icons">
                        <i>+</i>
                    </div>
                </div>
            </div>
            <FilterItem />  
            <FilterItem />  
            <FilterItem />  
        </div>
    );
}