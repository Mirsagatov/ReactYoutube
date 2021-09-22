import TopNavbar from '../../Components/TopNavbar/TopNavbar';
import SecondaryNavbar from '../../Components/SecondaryNavbar/SecondaryNavbar';

import TabbedHeader from "../../Components/TabbedHeader/TabbedHeader";
import ChannelHome from '../../Components/ChannelHome/ChannelHome';
import RecommendedChannels from '../../Components/RecommendedChannels/RecommendedChannels';
import MargaretPhelpsVideos from '../../Components/MargaretPhelpsVideos/MargaretPhelpsVideos';


import "./Channel.scss";

function Channel() {
    return (
        <>
        <TopNavbar />
      <div className="channel-main">
        <SecondaryNavbar />
        <div className="channel-main__searched-themes">
          <TabbedHeader />
          <div className="channel-main__introductory">
            <ChannelHome />
            <RecommendedChannels />
          </div>
          <MargaretPhelpsVideos />
        </div>
      </div>
        </>
    )
}

export default Channel;