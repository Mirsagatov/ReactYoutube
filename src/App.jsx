import './App.scss';


import HomePage from "./Pages/HomePage/HomePage";
import Channel from './Pages/Channel/Channel';
import VideoPage from "./Pages/VideoPage/VideoPage"

import {Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className="container">

      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/channel" component={Channel} exact />
        <Route path="/video" component={VideoPage} exact />
      </Switch>
    </div>

  );
}

export default App;
