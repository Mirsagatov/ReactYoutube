
import React from "react";

import "./FoodAndDrink.scss";

import FoodDrink from "../../Assets/Images/FoodAndDrinkImg/FoodDrink.png";

import LeftArrow from "../Lib/Svg/DollieBlairVideosSvg/LeftArrow";
import RightArrow from "../Lib/Svg/DollieBlairVideosSvg/RightArrow";

import {NavLink} from "react-router-dom";

import Loading from "../Lib/Svg/Loading";

function FoodAndDrink() {


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
        <div className="food-drink__videos">
            <div className="food-drink__videos-header">
            <NavLink to="/channel" className="food-drink__videos-link">
                <img src={FoodDrink} alt="Dollie Blair" className="food-drink__videos-img" />
                <h1 className="food-drink__videos-title">Food & Drink</h1>
                <p className="food-drink__videos-content">Recommended channel for you</p>
            </NavLink>
            <button type="subscribe" className="food-drink__videos-subscribe-button">
            Subscribe 2.3m
            </button>
            <div className="food-drink__videos-move-buttons">
                <button className="food-drink__videos-backward-button">
                    <LeftArrow />
                </button>
                <button className="food-drink__videos-forward-button">
                    <RightArrow />
                </button>
            </div>
            </div>
            <ul className="food-drink__videos-list">

            {loading && <p>Loading ...</p>}

                { video.length && 
                video.map((row) => (
                    <li className="food-drink__videos-item" key={row.id}>
                    <NavLink to="/video" className="food-drink__videos-item-link">
                        <img src={row.thumbnailUrl} alt="thumbnailUrl" className="food-drink__videos-item-img" />
                        <h2 className="food-drink__videos-item-title">{row.title.slice(0, 20) +'...'}</h2>
                        <ul className="food-drink__videos-item__stats-list">
                            <li className="food-drink__videos-item__stats-item">
                                <span className="food-drink__videos-item__stats-number">{row.id + '0k'}</span>
                                <h3 className="food-drink__videos-item__stats-title">views</h3>
                            </li>
                            <li className="food-drink__videos-item__stats-item">
                                <span className="food-drink__videos-item__stats-number">{row.id}</span>
                                <h3 className="food-drink__videos-item__stats-title">months ago</h3>
                            </li>
                            <li className="food-drink__videos-item__stats-item">
                                <h3 className="food-drink__videos-item__stats-title">Food & Drink</h3>
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

export default FoodAndDrink;