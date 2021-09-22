import "./TopNavbar.scss";
import MenuYoutube from "../Lib/Svg/MenuYoutube";
import YoutubeHome from "../Lib/Svg/YoutubeHome";
import Search from "../Lib/Svg/Search";

import Create from "../Lib/Svg/Create";
import YoutubeApps from "../Lib/Svg/YoutubeApps";
import Notifications from "../Lib/Svg/Notifications";
import UserPicture from "../../Assets/Images/UserPicture.png";


import {NavLink} from "react-router-dom";

function TopNavbar() {
    return (
        <nav className="top-navbar">
            <div className="top-navbar__youtube-accesses">
                <div className="top-navbar__youtube-home">
                    <NavLink to="/" className="top-navbar__youtube-menu-link">
                        <MenuYoutube />
                    </NavLink>

                    <NavLink to="/" className="top-navbar__youtube-home-link">
                        <YoutubeHome />
                    </NavLink>
                </div>

                <div className="top-navbar__youtube-seach">
                    <input type="text" name="search" placeholder="Search" className="top-navbar__search-input" />
                    <a href="#" className="top-navbar__youtube-search-link">
                        <Search />
                    </a>
                </div>
            </div>

            <div className="top-navbar__youtube-essentials">
                <ul className="top-navbar__essentials-list">
                    <li className="top-navbar__essentials-item">
                        <a href="#" className="top-navbar__essentials-link">
                            <Create className="create" />
                        </a>
                    </li>
                    <li className="top-navbar__essentials-item">
                        <a href="#" className="top-navbar__essentials-link">
                            <YoutubeApps className="youtubeapps" />
                        </a>
                    </li>
                    <li className="top-navbar__essentials-item">
                        <a href="#" className="top-navbar__essentials-link">
                            <Notifications className="notifications" />
                        </a>
                    </li>
                    <li className="top-navbar__essentials-item">
                        <NavLink to="/channel" className="top-navbar__essentials-link">
                            <img width="40px" height="40px" src={UserPicture} alt="User Picture" className="top-navbar__essentials-userpicture" /> 
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default TopNavbar;