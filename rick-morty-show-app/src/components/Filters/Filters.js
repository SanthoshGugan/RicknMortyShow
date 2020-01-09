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

    const renderMyProjects = () => {
        return (
            <div className="myProjects">
                <h3>Please check out my Projects</h3>
                <ul>
                    <li>
                        <a href="http://ec2-13-127-170-233.ap-south-1.compute.amazonaws.com:3011/" target="_blank">Uber Mock Demand Supply Engine</a>
                    </li>
                </ul>
            </div>
        );
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
            {renderMyProjects()}
        </div>
    );
}