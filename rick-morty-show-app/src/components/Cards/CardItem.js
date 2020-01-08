import React from "react";

import "./CardItem.css";

export const CardItem = (props) => {
    return (
        <div class="cardItem">
            <div className="imageWrapper">
                <img src="https://rickandmortyapi.com/api/character/avatar/3.jpeg" />
                <div className="imageOverlay">
                    <div className="characterName">Eli's Girlfriend</div>
                    <div className="characterMeta">id : 118 - created 2 years ago</div>
                </div>
            </div>
            <div className="characterInfo">
                <ul>
                    <li>
                        <span className="heading">STATUS</span>
                        <span className="value">Alive</span>
                    </li>
                    <li>
                        <span className="heading">STATUS</span>
                        <span className="value">Alive</span>
                    </li>
                    <li>
                        <span className="heading">STATUS</span>
                        <span className="value">Alive</span>
                    </li>
                    <li>
                        <span className="heading">STATUS</span>
                        <span className="value">Alive</span>
                    </li>
                    <li>
                        <span className="heading">STATUS</span>
                        <span className="value">Alive</span>
                    </li>
                    <li>
                        <span className="heading">STATUS</span>
                        <span className="value">Alive</span>
                    </li>
                </ul>
            </div>

        </div>
    );
}