import React from 'react';
import './App.css';
import FeatureContainer from './Components/Features/FeatureContainer';
import RestaurantsInPocket from './Components/restaurantsInPocket/RestaurantsInPocket';
import Jumbo from './Components/Jumbo/Jumbo';
import Footer from './Components/Footer/Footer';
function App() {
  return (
    <div>
    <Jumbo/>
    <FeatureContainer/>
    <RestaurantsInPocket/>
    <Footer/>
    </div>
  );
}

export default App;
