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

    
    const renderPagination = () => {
        return (
            <div className="pagination">
                <button className="no-btn" onClick={() => props.onRangeChange("prev")}>Prev </button>
                <div>Showing </div>
                {/* <input type="number" className="rangeStart" value={props.rangeStart} onChange={(e) => props.onRangeChange(e.target.value,props.rangeEnd,1)}/> */}
                <b>{props.rangeStart+1}</b>
                <div> to </div>
                {/* <input type="number" className="rangeEnd" value={props.rangeEnd} onChange={(e) => props.onRangeChange(props.rangeStart, e.target.value,2)} /> */}
                <b>{props.rangeEnd+1}</b>
                <div> of total</div>
                <b>{props.totalCount}</b>

                <button className="no-btn" onClick={() => props.onRangeChange("next")}>Next </button>
            </div>
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
                {renderPagination()}
                <select onChange={sortChange}>
                    <option value="" disabled selected hidden>Sort by ID</option>
                    <option value="Ascending">Ascending</option>
                    <option value="Descending">Descending</option>
                </select>
            </div>
        </div>
    );
}