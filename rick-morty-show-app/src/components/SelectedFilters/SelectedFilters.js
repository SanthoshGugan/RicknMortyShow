import React from "react";

import "./SelectedFilters.css";
export const SelectedFilters = (props) => {
    return (
        <div className="selectedFilters">
           <h2>Selected Filters</h2>
            <div className="tags">
                <span className="tag">Human</span>
                <span className="tag">Human</span>
                <span className="tag">Human</span>
                <span className="tag">Human</span>
                <span className="tag">Human</span>
            </div>
            <div className="sortInput">
                <select>
                    <option value="" disabled selected hidden>Sort by ID</option>
                    <option value="Ascending">Ascending</option>
                    <option value="Descending">Descending</option>
                </select>
            </div>
        </div>
    );
}