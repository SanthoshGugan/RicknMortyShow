import React from "react";

import "./Filters.css";

import {FilterItem} from "./FilterItem";
export const Filters = (props) => {
    const renderFilterItems = () => {
        if(!props.isFiltersVisible)
            return <></>;

        return (
            <>
                {
                Object.keys(props.filters).map(filter => {
                    return <FilterItem category={filter} options={props.filters[filter]} handleFilterAction = {props.onFilterClick} />;
                })}

            </>
        );
    }

    const renderFilterVisibiltyButton = (isFilterVisible) => {
        if(!isFilterVisible){
            return <i>+</i>
        }
        return <i>-</i>
    }
    return (
        <div className="filters">
            <div className="filterTitle">
                <h2>Filters</h2>
                <div className="filterVisibility">
                    <div className="icons" onClick={() => props.onFilterVisibilityToggle()}>
                        {renderFilterVisibiltyButton(props.isFiltersVisible)}
                    </div>
                </div>
            </div>
            {renderFilterItems()}  
        </div>
    );
}