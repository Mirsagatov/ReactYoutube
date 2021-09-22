import "./ChannelHome.scss";

import Search from "../Lib/Svg/Search";
import VideoCoverPage from "../../Assets/Images/TabbedHeaderImg/FirstVideoCoverPage.png";

import {NavLink} from "react-router-dom";

function ChannelHome() {
    return (
        <div className="channel-home">
            <nav className="channel-navbar">
                <ul className="channel-navbar-list">
                    <li className="channel-navbar-item">
                        <NavLink to="/channel" className="channel-navbar-item-link">
                            Home
                            </NavLink>
                            </li>
                    <li className="channel-navbar-item">
                        <NavLink to="/channel" className="channel-navbar-item-link">
                            Videos
                            </NavLink>
                            </li>
                    <li className="channel-navbar-item">
                        <NavLink to="/channel" className="channel-navbar-item-link">
                            Playlists
                            </NavLink>
                            </li>
                    <li className="channel-navbar-item">
                        <NavLink to="/channel" className="channel-navbar-item-link">
                            Channels
                            </NavLink>
                            </li>
                    <li className="channel-navbar-item">
                        <NavLink to="/channel" className="channel-navbar-item-link">
                            Discussion
                            </NavLink>
                            </li>
                    <li className="channel-navbar-item">
                        <NavLink to="/channel" className="channel-navbar-item-link">
                            About
                            </NavLink>
                            </li>
                    <li className="channel-navbar-item">
                        <button type="click" className="channel-navbar-item-btn">
                            <Search />
                        </button>
                        <input placeholder="Search" type="text" name="search" className="channel-navbar-item-search" />
                            </li>
                    
                </ul>
            </nav>
            <NavLink to="/video" className="channel-home__video-info">
                <div className="channel-home__video">
                    <img src={VideoCoverPage} alt="video cover page" className="channel-home-video-img" />
                </div>
                <div className="channel-home__info">
                    <h1 className="channel-home__info-title">Choosing The Best Audio Player Software For Your Computer</h1>
                    <p className="channel-home__info-content">Your cheap internet-based banner advertising will become one of the sought for ads there are. Today, the world of Internet advertising is rapidly evolving beyond banner ads and intrusive pop-ups. Bayles A common medium for advertising on the Internet is the use of banner ads. </p>
                    <ul className="channel-home__info-stats-list">
                        <li className="channel-home__info-stats-item">11k views</li>
                        <li className="channel-home__info-stats-item">6 months ago</li>
                    </ul>
                    
                </div>
            </NavLink>
        </div>
    )
}

export default ChannelHome;