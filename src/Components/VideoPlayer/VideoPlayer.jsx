import "./VideoPlayer.scss";

import Like from "../Lib/Svg/VideoPlayerSvg/Like";
import Dislike from "../Lib/Svg/VideoPlayerSvg/Dislike";
import Share from "../Lib/Svg/VideoPlayerSvg/Share";
import More from "../Lib/Svg/VideoPlayerSvg/More";

function VideoPlayer() {
    return (
        <div className="video-player">
            <iframe id="video" width="560" height="315" src="https://www.youtube.com/embed/6lt2JfJdGSY" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            <h1 className="video-player__title">Dude You Re Getting A Telescope </h1>
            <div className="video-player__stats">
                <h2 className="video-player__stats-title">123k views</h2>
                <ul className="video-player__stats-list">
                    <li className="video-player__stats-item">
                        <Like />
                        <h2 className="video-player__stats-item-title">123k</h2>
                    </li>
                    <li className="video-player__stats-item">
                        <Dislike />
                    <h2 className="video-player__stats-item-title">435k</h2>
                    </li>
                    <li className="video-player__stats-item">
                        <Share />
                    <h2 className="video-player__stats-item-title">Share</h2>
                    </li>
                    <li className="video-player__stats-item">
                        <More />
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default VideoPlayer;