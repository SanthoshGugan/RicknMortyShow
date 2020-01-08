import React from "react";

import "./FilterItem.css";

export const FilterItem = (props) => {
    return (
        <div className="filterItem">
            <h3>Species</h3>
            <ul>
                <li key="1">
                    <input type="checkbox" />
                    <span>Human</span>
                </li>
                <li key="2">
                    <input type="checkbox" />
                    <span>Mythology</span>
                </li>
                <li key="3">
                    <input type="checkbox" />
                    <span>Other Species</span>
                </li>
            </ul>
        </div>
    );
}