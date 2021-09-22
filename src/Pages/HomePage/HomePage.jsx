import TopNavbar from '../../Components/TopNavbar/TopNavbar';

import SecondaryNavbar from '../../Components/SecondaryNavbar/SecondaryNavbar';
import DollieBlairVideos from '../../Components/DollieBlairVideos/DollieBlairVideos';
import RecommendedVideos from '../../Components/RecommendedVideos/RecommendedVideos';
import FoodAndDrink from '../../Components/FoodAndDrink/FoodAndDrink';

import "./HomePage.scss";
function HomePage() {
    return (
        <>
        <TopNavbar/>
      <div className="home-main">
        <SecondaryNavbar />
        <div className="home-main__searched-themes">
          <DollieBlairVideos />
          <RecommendedVideos />
          <FoodAndDrink />
        </div>
      </div>
        </>
    )
}

export default HomePage;