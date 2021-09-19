import React from 'react';
import './App.css';
import FeatureContainer from './Components/Features/FeatureContainer';
import RestaurantsInPocket from './Components/restaurantsInPocket/RestaurantsInPocket';
//import BottomFooter from './Components/Footer/BottomFooter';
import Jumbo from './Components/Jumbo/Jumbo';
function App() {
  return (
    <div>
    <Jumbo/>
    <FeatureContainer/>
    <RestaurantsInPocket/>
    </div>
  );
}

export default App;
