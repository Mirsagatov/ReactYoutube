
import React from "react";

import "./NextVideos.scss";


import {NavLink} from "react-router-dom";


function NextVideos() {


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
        <div className="next__videos">
            <div className="next__videos-header">
             <h1 className="next__videos-title">Next</h1>
            
            <div className="next__videos-autoplay">
                <h2 className="next__videos-autoplay-title">AUTOPLAY</h2>
            <label className="switch">
              <input type="checkbox" />
              <span className="slider round"></span>
            </label>
                
            </div>
            </div>
            <ul className="next__videos-list">

            {loading && <div>Loading ...</div>}
                { video.length && 
                video.map((row) => (
                    <li className="next__videos-item" key={row.id}>
                    <NavLink to="/channel" className="next__videos-item-link">
                        <img src={row.thumbnailUrl} alt="thumbnailUrl" className="next__videos-item-img" />
                        <h2 className="next__videos-item-title">{row.title.slice(0, 20) +'...'}</h2>
                        <ul className="next__videos-item__stats-list">
                            <li className="next__videos-item__stats-item">
                                <span className="next__videos-item__stats-number">{row.id + '0k'}</span>
                                <h3 className="next__videos-item__stats-title">views</h3>
                            </li>
                            <li className="next__videos-item__stats-item">
                                <span className="next__videos-item__stats-number">{row.id}</span>
                                <h3 className="next__videos-item__stats-title">days ago</h3>
                            </li>
                            <li className="next__videos-item__stats-item">
                                <h3 className="next__videos-item__stats-title">Dollie Blair</h3>
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

export default NextVideos;