
import React from "react";

import "./MargaretPhelpsVideos.scss";



import LeftArrow from "../Lib/Svg/DollieBlairVideosSvg/LeftArrow";
import RightArrow from "../Lib/Svg/DollieBlairVideosSvg/RightArrow";

import {NavLink} from "react-router-dom";

function MargaretPhelpsVideos() {


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
        <div className="mergaret-phelps__videos">
            <div className="mergaret-phelps__videos-header">
            
               
            <h1 className="mergaret-phelps__videos-title">Margaret Phelps videos</h1>
            
            <div className="mergaret-phelps__videos-move-buttons">
                <button className="mergaret-phelps__videos-backward-button">
                    <LeftArrow />
                </button>
                <button className="mergaret-phelps__videos-forward-button">
                    <RightArrow />
                </button>
            </div>
            </div>
            <ul className="mergaret-phelps__videos-list">

            {loading && <div>Loading ...</div>}
                { video.length && 
                video.map((row) => (
                    <li className="mergaret-phelps__videos-item" key={row.id}>
                    <NavLink to="/video" className="mergaret-phelps__videos-item-link">
                        <img src={row.thumbnailUrl} alt="thumbnailUrl" className="mergaret-phelps__videos-item-img" />
                        <h2 className="mergaret-phelps__videos-item-title">{row.title.slice(0, 20) +'...'}</h2>
                        <ul className="mergaret-phelps__videos-item__stats-list">
                            <li className="mergaret-phelps__videos-item__stats-item">
                                <span className="mergaret-phelps__videos-item__stats-number">{row.id + '0k'}</span>
                                <h3 className="mergaret-phelps__videos-item__stats-title">views</h3>
                            </li>
                            <li className="mergaret-phelps__videos-item__stats-item">
                                <span className="mergaret-phelps__videos-item__stats-number">{row.id}</span>
                                <h3 className="mergaret-phelps__videos-item__stats-title">days ago</h3>
                            </li>
                            <li className="mergaret-phelps__videos-item__stats-item">
                                <h3 className="mergaret-phelps__videos-item__stats-title">Dollie Blair</h3>
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

export default MargaretPhelpsVideos;