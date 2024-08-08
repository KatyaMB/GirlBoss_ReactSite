// Original web page I copied: https://girlboss.com/pages/radio

// Importing all the apps and components
import './App.css';
import React from 'react';
import Navigation from './components/navigation.js';
import Header from './components/header.js'
import SectionOne from './components/section-one.js'
import SectionTwo from './components/section-two.js'
import SectionThree from './components/section-three.js'
import SectionFour from './components/section-four.js'
import Footer from './components/footer.js'
import LineBreak from './components/lineBreak.js'

//Importing props from section two//
class SectionTwoSection extends React.Component {
  render() {
    return (
      <div>
        {/* Rendering the SectionTwo component and passing props */}
        <SectionTwo
          imageUrl1="https://girlboss.com/cdn/shop/articles/gb_radio_episode_webfeature_roxienafousi_864x544.png?v=1667407634"
          imageAlt1="Roxie Nafousi"
          title1="PODCAST"
          description1="Roxie Nafousi Manifested Her Career—So Can You"
          imageUrl2="https://girlboss.com/cdn/shop/articles/gb_radio_episode_webfeature_matildadjerf_864x544.jpg?v=1669743219"
          imageAlt2="Matilda Djerf"
          title2="PODCAST"
          description2="Matilda Djerf on the Big Business of Being Matilda Djerf"
          imageUrl3="https://girlboss.com/cdn/shop/articles/gb_radio_episode_webfeature_meganoneill_864x544.jpg?v=1667931890"
          imageAlt3="Megan O’Neill"
          title3="PODCAST"
          description3="Megan O’Neill on What It’s Really Like to Work at Goop"
        />
      </div>
    );
  }
}

// Define the App function with all the components
function App() {
  return (
    <div>
      <Navigation />
      <Header />
      <SectionOne />
      <LineBreak />
      <SectionTwoSection />
      <SectionThree />
      <SectionFour />
      <Footer />
    </div>
  );
}

// Exporting the App to add to Index.js
export default App;

// Original web page I copied: https://girlboss.com/pages/radio