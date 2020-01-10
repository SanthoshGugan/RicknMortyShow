import React from "react";

import "./SelectedFilters.css";
export const SelectedFilters = (props) => {

    const renderTags = () => {
        return (
            <>
                {props.tags.map((tag, index) => {
                    return <span className="tag" key={index}>{tag.value} <span className="close" onClick={() => props.onTagClose(tag.category, tag.value)}>X</span></span>;
                })}
            </>
        );
    }

    
    const renderPagination = () => {
        if(props.rangeEnd === 0 || props.cardListLength === 0)
            return <div className="pagination"></div>;
        return (
            <div className="pagination">
                <button className="no-btn" onClick={() => props.onRangeChange("prev")} disabled={props.rangeStart === 0}>
                    <i class="fa fa-chevron-left"></i>
                </button>
                <div>Showing </div>
                <b>{props.rangeStart +1}</b>
                <div className="to"> to </div>
                <b>{props.rangeEnd + 1}</b>
                <div> of total</div>
                <div className="hypen">-</div>
                <b>{props.totalCount}</b>

                <button className="no-btn" onClick={() => props.onRangeChange("next")} disabled={props.rangeEnd+1 ===props.cardListLength}>
                <i class="fa fa-chevron-right"></i>
                </button>
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
                <select onChange={sortChange} defaultValue="Sort by ID">
                    {/* <option value="" disabled selected hidden>Sort by ID</option> */}
                    <option value="Ascending">Ascending</option>
                    <option value="Descending">Descending</option>
                </select>
            </div>
        </div>
    );
}