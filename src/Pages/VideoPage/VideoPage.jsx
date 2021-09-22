import VideoPlayer from "../../Components/VideoPlayer/VideoPlayer";
import Comment from "../../Components/Comment/Comment";
import NextVideos from "../../Components/NextVideos/NextVideos";

import TopNavbar from "../../Components/TopNavbar/TopNavbar";

import "./VideoPage.scss";

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
        <NextVideos />
      </div>
        </>
    )
}

export default VideoPage;