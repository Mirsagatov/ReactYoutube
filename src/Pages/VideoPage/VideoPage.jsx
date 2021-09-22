import VideoPlayer from "../../Components/VideoPlayer/VideoPlayer";
import Comment from "../../Components/Comment/Comment";
import NextVideos from "../../Components/NextVideos/NextVideos";

import TopNavbar from "../../Components/TopNavbar/TopNavbar";

import "./VideoPage.scss";
import SecondaryNavbar from "../../Components/SecondaryNavbar/SecondaryNavbar";

function VideoPage() {
    return(
        <>
        <TopNavbar />
      <div className="video-player-main">
        <div className="video-player-main__searched-themes">
          <VideoPlayer />
          <hr/>
          < Comment />
        </div>
        <div className="next-video-player">
        <NextVideos />
        </div>
      </div>

      <div className="footer-navbar">
      <SecondaryNavbar />
      </div>
        </>
    )
}

export default VideoPage;