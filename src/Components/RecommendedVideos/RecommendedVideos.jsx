import React from "react";

import "./RecommendedVideos.scss";

import LeftArrow from "../Lib/Svg/DollieBlairVideosSvg/LeftArrow";
import RightArrow from "../Lib/Svg/DollieBlairVideosSvg/RightArrow";

import {NavLink} from "react-router-dom";

function RecommendedVideos() {


    const [video, setVideo] = React.useState([]);

    React.useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/photos').then((response) =>
        response.json()).then((data) => {
            const slicedVideos =data.slice(0, 3);
            setVideo(slicedVideos);
        })
    }, []);


    return (
        <div className="recommended__videos">
            <div className="recommended__videos-header">
                <h1 className="recommended__videos-title">Recommended</h1>
                <div className="recommended__videos-move-buttons">
                    <button className="recommended__videos-backward-button">
                        <LeftArrow />
                    </button>
                    <button className="recommended__videos-forward-button">
                        <RightArrow />
                    </button>
                </div>
            </div>
            <ul className="recommended__videos-list">
                { video.length && 
                video.map((row) => (
                    <li className="recommended__videos-item" key={row.id}>
                    <NavLink to="/video" className="recommended__videos-item-link">
                        <img src={row.thumbnailUrl} alt="thumbnailUrl" className="recommended__videos-item-img" />
                        <h2 className="recommended__videos-item-title">{row.title.slice(0, 30) +'...'}</h2>
                        <ul className="recommended__videos-item__stats-list">
                            <li className="recommended__videos-item__stats-item">
                                <span className="recommended__videos-item__stats-number">{row.id + '0k'}</span>
                                <h3 className="recommended__videos-item__stats-title">views</h3>
                            </li>
                            <li className="recommended__videos-item__stats-item">
                                <span className="recommended__videos-item__stats-number">{row.id}</span>
                                <h3 className="recommended__videos-item__stats-title">months ago</h3>
                            </li>
                            <li className="recommended__videos-item__stats-item">
                                <h3 className="recommended__videos-item__stats-title">Gussie French</h3>
                            </li>
                        </ul>
                    </NavLink>
                </li>
                ))
                }
            </ul>
        </div>
    )
}

export default RecommendedVideos;