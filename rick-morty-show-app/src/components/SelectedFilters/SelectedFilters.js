import React from "react";

import "./SelectedFilters.css";
export const SelectedFilters = (props) => {

    const renderTags = () => {
        return (
            <>
                {props.tags.map(tag => {
                    return <span className="tag">{tag.value} <span className="close" onClick={() => props.onTagClose(tag.category, tag.value)}>X</span></span>;
                })}
            </>
        );
    }

    const sortChange = (event) => {
        let option = event.target.value;
        if(option === "Ascending")
            props.onSortChange(true);
        else
            props.onSortChange(false);
    }
    return (
        <div className="selectedFilters">
           <h2>Selected Filters</h2>
            <div className="tags">
                {renderTags()}
            </div>
            <div className="sortInput">
                <select onChange={sortChange}>
                    <option value="" disabled selected hidden>Sort by ID</option>
                    <option value="Ascending">Ascending</option>
                    <option value="Descending">Descending</option>
                </select>
            </div>
        </div>
    );
}