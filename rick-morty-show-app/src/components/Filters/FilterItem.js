import React from "react";

import "./FilterItem.css";

const _ = require("lodash");

export const FilterItem = (props) => {
    const handleOptionChange = (index) => {
        let option = _.cloneDeep(props.options[index]);
        option.status = !option.status;
        props.handleFilterAction(props.category, option, index)
    }
    const renderOptions = (options) => {
        // console.log("Options : ", options);
        return (
            <>
                {options.map((option, index) => {
                    // console.log("current option " ,option);
                    return (
                            <li key={index}>
                                <input type="checkbox" checked={option.status} onChange={() => handleOptionChange(index)}/>
                                <span>{option.value}</span>
                            </li>
                        );
                    })}
            </>
        );
    }
    return (
        <div className="filterItem">
            <h3>{props.category}</h3>
            <ul>
                {renderOptions(props.options)}
            </ul>
        </div>
    );
}