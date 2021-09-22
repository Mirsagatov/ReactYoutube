import "./SecondaryNavbar.scss";

import Home from "../Lib/Svg/SecondaryNavbarSvg/Home";
import Trending from "../Lib/Svg/SecondaryNavbarSvg/Trending";
import Subscriptions from "../Lib/Svg/SecondaryNavbarSvg/Subscriptions";

import Library from "../Lib/Svg/SecondaryNavbarSvg/Library";
import History from "../Lib/Svg/SecondaryNavbarSvg/History";
import WatchLater from "../Lib/Svg/SecondaryNavbarSvg/WatchLater";
import Favourities from "../Lib/Svg/SecondaryNavbarSvg/Favourities";
import LikedVideos from "../Lib/Svg/SecondaryNavbarSvg/LikedVideos";
import Music from "../Lib/Svg/SecondaryNavbarSvg/Music";
import Games from "../Lib/Svg/SecondaryNavbarSvg/Games";

import GussieSingleton from "../../Assets/Images/SecondaryNavbarImg/GussieSingleton.png";
import BellaBriggs from "../../Assets/Images/SecondaryNavbarImg/BellaBriggs.png";
import EmmaHanson from "../../Assets/Images/SecondaryNavbarImg/EmmaHanson.png";
import EuniceCartez from "../../Assets/Images/SecondaryNavbarImg/EuniceCartez.png";
import LeahBerry from "../../Assets/Images/SecondaryNavbarImg/LeahBerry.png";
import NoraFrancis from "../../Assets/Images/SecondaryNavbarImg/NoraFrancis.png";

import Setting from "../Lib/Svg/SecondaryNavbarSvg/Setting";

import {NavLink} from "react-router-dom";

function SecondaryNavbar() {
    return (
    <div className="secondary-navbar">
        <ul className="secondary-navbar__primary-list">
            <li className="secondary-navbar__primary-item">
                <NavLink to="/" className="secondary-navbar__primary-item-link">
                    <Home />
                    <h2 className="secondary-navbar__primary-item-title">Home</h2>
                </NavLink>
            </li>
            <li className="secondary-navbar__primary-item">
                <NavLink to="/channel" className="secondary-navbar__primary-item-link">
                    <Trending />
                    <h2 className="secondary-navbar__primary-item-title">Trending</h2>
                </NavLink>
            </li>
            <li className="secondary-navbar__primary-item">
                <NavLink to="/channel" className="secondary-navbar__primary-item-link">
                    <Subscriptions />
                    <h2 className="secondary-navbar__primary-item-title">Subscriptions</h2>
                </NavLink>
            </li>

            <li className="secondary-navbar__primary-item">
                <NavLink to="/channel" className="secondary-navbar__primary-item-link">
                    <Library />
                    <h2 className="secondary-navbar__primary-item-title">Library</h2>
                </NavLink>
            </li>
        </ul>
        
        <ul className="secondary-navbar__secondary-list">
            <li className="secondary-navbar__secondary-item">
                <a href="#" className="secondary-navbar__secondary-item-link">
                    <Library />
                    <h2 className="secondary-navbar__secondary-item-title">Library</h2>
                </a>
            </li>
            <li className="secondary-navbar-secondary-item">
                <a href="#" className="secondary-navbar__secondary-item-link">
                    <History />
                    <h2 className="secondary-navbar__secondary-item-title">History</h2>
                </a>
            </li>
            <li className="secondary-navbar-secondary-item">
                <a href="#" className="secondary-navbar__secondary-item-link">
                    <WatchLater />
                    <h2 className="secondary-navbar__secondary-item-title">Watch later</h2>
                </a>
            </li>
            <li className="secondary-navbar-secondary-item">
                <a href="#" className="secondary-navbar__secondary-item-link">
                    <Favourities />
                    <h2 className="secondary-navbar__secondary-item-title">Favourities</h2>
                </a>
            </li>
            <li className="secondary-navbar-secondary-item">
                <a href="#" className="secondary-navbar__secondary-item-link">
                    <LikedVideos />
                    <h2 className="secondary-navbar__secondary-item-title">Liked videos</h2>
                </a>
            </li>
            <li className="secondary-navbar-secondary-item">
                <a href="#" className="secondary-navbar__secondary-item-link">
                    <Music />
                    <h2 className="secondary-navbar__secondary-item-title">Music</h2>
                </a>
            </li>
            <li className="secondary-navbar-secondary-item">
                <a href="#" className="secondary-navbar__secondary-item-link">
                    <Games />
                    <h2 className="secondary-navbar__secondary-item-title">Games</h2>
                </a>
            </li>
            <li className="secondary-navbar-secondary-item">
                
                <input className="show-more__accordion-input" type="checkbox" id="title1" />
                <label className="show-more__accordion-label">Show more</label>

                
                <div className="show-more__accordion-content">
                <div className="show-more__accordion-item">
                    <Library />
                    <h2 className="show-more__accordion-title">Saved videos</h2>
                </div>
                </div>
            </li>
        </ul>
    
        <div className="secondary-navbar__subscriptions">
            <h1 className="secondary-navbar__subscriptions-title">Subscriptions</h1>
            <ul className="secondary-navbar__subscriptions-list">
                <li className="secondary-navbar__subscriptions-item">
                    <NavLink to="/channel" className="secondary-navbar__subscriptions-item-link">
                    <img src={GussieSingleton} className="secondary-navbar__subscriptions-item-img" alt="Gussie Singleton" />
                        <h2 className="secondary-navbar__subscriptions-item-title">Gussie Singleton</h2>
                    </NavLink>
                </li>
                <li className="secondary-navbar__subscriptions-item">
                    <NavLink to="/channel" className="secondary-navbar__subscriptions-item-link">
                    <img src={NoraFrancis} className="secondary-navbar__subscriptions-item-img" alt="Nora Francis" />
                        <h2 className="secondary-navbar__subscriptions-item-title">Nora Francis</h2>
                    </NavLink>
                </li>
                <li className="secondary-navbar__subscriptions-item">
                    <NavLink to="/channel" className="secondary-navbar__subscriptions-item-link">
                    <img src={BellaBriggs} className="secondary-navbar__subscriptions-item-img" alt="Bella Bridges" />
                        <h2 className="secondary-navbar__subscriptions-item-title">Belle Briggs</h2>
                    </NavLink>
                </li>
                <li className="secondary-navbar__subscriptions-item">
                    <NavLink to="/channel" className="secondary-navbar__subscriptions-item-link">
                    <img src={EuniceCartez} className="secondary-navbar__subscriptions-item-img" alt="Eunice Cartez" />
                        <h2 className="secondary-navbar__subscriptions-item-title">Eunice Cortez</h2>
                    </NavLink>
                </li>
                <li className="secondary-navbar__subscriptions-item">
                    <NavLink to="/channel" className="secondary-navbar__subscriptions-item-link">
                    <img src={EmmaHanson} className="secondary-navbar__subscriptions-item-img" alt="Emma Hanson" />
                        <h2 className="secondary-navbar__subscriptions-item-title">Emma Hanson</h2>
                    </NavLink>
                </li>
                <li className="secondary-navbar__subscriptions-item">
                    <NavLink to="/channel" className="secondary-navbar__subscriptions-item-link">
                        <img src={LeahBerry} className="secondary-navbar__subscriptions-item-img" alt="Leah Berry" />
                        <h2 className="secondary-navbar__subscriptions-item-title">Leah Berry</h2>
                    </NavLink>
                </li>
            </ul>
        </div>
    
        <a href="#" className="secondary-navbar__setting-link">
            <Setting />
            <h2 className="secondary-navbar__setting-title">Setting</h2>
        </a>
    </div>
    )
}
export default SecondaryNavbar;