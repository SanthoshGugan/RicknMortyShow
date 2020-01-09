import React from "react";

import "./Filters.css";

import {FilterItem} from "./FilterItem";
export const Filters = (props) => {
    const renderFilterItems = () => {
        return (
            <>
                {
                Object.keys(props.filters).map(filter => {
                    return <FilterItem category={filter} options={props.filters[filter]} handleFilterAction = {props.onFilterClick} />;
                })}

            </>
        );
    }
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
            {renderFilterItems()}  
        </div>
    );
}