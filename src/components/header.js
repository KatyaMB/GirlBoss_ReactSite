import React from 'react';
import Spotify from '../images/Spotify.png';
import Podcast from '../images/Podcasts.png';

// Creating a header with a function
function Header() {
    return (
        <div className="header-section">
            <img id="header-logo" src="https://girlboss.com/cdn/shop/files/Girlboss_Radio_Avery_Logo_Blk_428607e6-258b-4af2-a4ae-7cf86fd3509e_930x654.png?v=1677704703" alt='background'/>
            <p id="header-para"><strong>That’s right, Girlboss Radio is back!</strong> We have a new host, a refreshed format and a renewed mission to bring you vulnerable, raw convos with majorly successful women.Tune into our interviews with boundary-pushing leaders, doers and thinkers who are redefining success on their own terms. With 23+ million downloads to date, it's a must-listen.</p>
            <img id="header-podcast" src={Podcast} alt="Podcast" />
            <img id="header-spotify" src={Spotify} alt="Spotify" />

        </div>
  
    );
  }

  // Exporting the header
  export default Header;