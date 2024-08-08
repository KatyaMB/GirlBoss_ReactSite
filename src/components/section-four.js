import React from 'react';
import Spotify from '../images/Spotify.png';
import Podcast from '../images/Podcasts.png';



// Creating section four with function
function SectionFour() {
    return (
        <div className='section-four'>
            <img id="section-four-image" src="https://girlboss.com/cdn/shop/files/gb_radio_web_cover_art_1024x1024.png?v=1705957820" alt='background'/>
            <p id="section-four-para">🎧 Listen Now</p>
            <img id="section-four-podcast" src={Podcast} alt="Podcast" />
            <img id="section-four-spotify" src={Spotify} alt="Spotify" />
            <a id="web-link" href="https://girlboss.com/pages/radio">Original website</a>
        
        </div>
  
    );
  }

// Exporting section four
export default SectionFour;