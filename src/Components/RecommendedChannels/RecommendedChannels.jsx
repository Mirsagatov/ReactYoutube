import "./RecommendedChannels.scss";

import FloraBenson from "../../Assets/Images/TabbedHeaderImg/FloraBenson.png";
import VioletCobb from "../../Assets/Images/TabbedHeaderImg/VioletCobb.png";
import PhillipMullins from "../../Assets/Images/TabbedHeaderImg/PhillipMullins.png";

import {NavLink} from "react-router-dom";

function RecommendedChannels() {
    return (
        <div className="recommended-channels">
            <h1 className="recommended-channels__title">Recommended channel</h1>
            <ul className="recommended-channels__list">
                <li className="recommended-channels__item">
                    <NavLink to="/channel" className="recommended-channels__item-link">
                        <img src={FloraBenson} alt="Flora Benson" className="recommended-channels__item-img" />
                        <h2 className="recommended-channels__item-title">Flora Benson</h2>
                    </NavLink>
                </li>
                <li className="recommended-channels__item">
                    <NavLink to="/channel" className="recommended-channels__item-link">
                        <img src={VioletCobb} alt="Violet Cobb" className="recommended-channels__item-img" />
                        <h2 className="recommended-channels__item-title">Violet Cobb</h2>
                    </NavLink>
                </li>
                <li className="recommended-channels__item">
                    <NavLink to="/channel" className="recommended-channels__item-link">
                        <img src={PhillipMullins} alt="Phillip Mullins" className="recommended-channels__item-img" />
                        <h2 className="recommended-channels__item-title">Phillip Mullins</h2>
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}

export default RecommendedChannels;