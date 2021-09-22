
import React from "react";

import "./DollieBlairVideos.scss";

import DollieBlair from "../../Assets/Images/SecondaryNavbarImg/GussieSingleton.png";

import LeftArrow from "../Lib/Svg/DollieBlairVideosSvg/LeftArrow";
import RightArrow from "../Lib/Svg/DollieBlairVideosSvg/RightArrow";


import {NavLink} from "react-router-dom";

function DollieBlairVideos() {


    const [video, setVideo] = React.useState([]);

    const [loading, setLoading] =React.useState(true);

    React.useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/photos').then((response) =>
        response.json()).then((data) => {
            const slicedVideos =data.slice(0, 5);
            setVideo(slicedVideos);
            setLoading(false);
        })
    }, []);

    return(
        <div className="dollie-blair__videos">
            <div className="dollie-blair__videos-header">
            <NavLink to="/channel" className="dollie-blair__videos-link">
                <img src={DollieBlair} alt="Dollie Blair" className="dollie-blair__videos-img" />
                <h1 className="dollie-blair__videos-title">Dollie Blair</h1>
            </NavLink>
            <div className="dollie-blair__videos-move-buttons">
                <button className="dollie-blair__videos-backward-button">
                    <LeftArrow />
                </button>
                <button className="dollie-blair__videos-forward-button">
                    <RightArrow />
                </button>
            </div>
            </div>
            <ul className="dollie-blair__videos-list">
                {loading && <div>Loading ...</div>}

                { video.length && 
                video.map((row) => (
                    <li className="dollie-blair__videos-item" key={row.id}>
                    <NavLink to="/video" className="dollie-blair__videos-item-link">
                        <img src={row.thumbnailUrl} alt="thumbnailUrl" className="dollie-blair__videos-item-img" />
                        <h2 className="dollie-blair__videos-item-title">{row.title.slice(0, 20) +'...'}</h2>
                        <ul className="dollie-blair__videos-item__stats-list">
                            <li className="dollie-blair__videos-item__stats-item">
                                <span className="dollie-blair__videos-item__stats-number">{row.id + '0k'}</span>
                                <h3 className="dollie-blair__videos-item__stats-title">views</h3>
                            </li>
                            <li className="dollie-blair__videos-item__stats-item">
                                <span className="dollie-blair__videos-item__stats-number">{row.id}</span>
                                <h3 className="dollie-blair__videos-item__stats-title">days ago</h3>
                            </li>
                            <li className="dollie-blair__videos-item__stats-item">
                                <h3 className="dollie-blair__videos-item__stats-title">Dollie Blair</h3>
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

export default DollieBlairVideos;