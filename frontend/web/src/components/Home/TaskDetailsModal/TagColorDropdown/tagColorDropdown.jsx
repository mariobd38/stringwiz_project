// import { useEffect, useState } from "react";

import "./tagColorDropdown.css";

export const TagColorDropdown = (props) => {
    const { isDropdownOnRightSide,tagColorDropdownOpen} = props;

    return (
        <div className="d-flex">
            <span
                className={`tcd-dropdown tcd-tag-options-dropdown ${tagColorDropdownOpen ? "open" : "" }`}
            >
                
                <div className={`tcd-model-dropdown-menu ${isDropdownOnRightSide ? 'tag-color-right' : 'tag-color-left'}`}
                
                >
                    <li>1</li>
                    <li>1</li>
                    <li>1</li>
                </div>
            </span>
        </div>
    );
};