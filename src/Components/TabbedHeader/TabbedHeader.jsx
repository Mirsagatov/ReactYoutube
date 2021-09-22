import "./TabbedHeader.scss";

import CoverChannel from "../../Assets/Images/TabbedHeaderImg/CoverChannel.png";
import MargaretPhelps from "../../Assets/Images/SecondaryNavbarImg/NoraFrancis.png";

// import LeftArrow from "../Lib/Svg/DollieBlairVideosSvg/LeftArrow";
// import RightArrow from "../Lib/Svg/DollieBlairVideosSvg/RightArrow";

import Subscribe from "../Lib/Svg/Subscribe";

function TabbedHeader() {
    return (
        <div className="tabbed-header">
            <div className="tabbed-header__banner">
                <img src={CoverChannel} alt="banner" className="tabbed-header__banner-img" />
            </div>
            
            <div className="tabbed-header__channel-header">
                <div className="tabbed-header__channel">
                    <img src={MargaretPhelps} alt="Margaret Phelps" className="tabbed-header__channel-img" />
                    <div className="tabbed-header__channel-info">
                    <h1 className="tabbed-header__channel-title">Margaret Phelps</h1>
                    <p className="tabbed-header__channel-paragraph">245K subscribed</p>
                    </div>
                </div>

                <div className="tabbed-header__subscribe">
                    <Subscribe />
                    <button type="subscribe" className="tabbed-header__subscribe-btn">Subscribe 2.3m</button>

                    {/* <div className="tabbed-header__subscribe-move-buttons">
                        <button className="tabbed-header__subscribe-backward-button">
                            <LeftArrow />
                        </button>
                        <button className="tabbed-header__subscribe-forward-button">
                            <RightArrow />
                        </button>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default TabbedHeader;