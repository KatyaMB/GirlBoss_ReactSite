import React from 'react';


//Creating a button function with a click handle
function SectionThree() {
  const handleClick = () => {
    window.location.href = 'https://ak5l9ne3mt1.typeform.com/to/WDymwoPK?typeform-source=girlboss.com';
  };

  // Returning the html components of the section
  return (
    <div className="section-three-styling">
      <h2 id="section-three-heading"> Who’s your dream Girlboss Radio guest?</h2>
      <p> Drop their name here and we might just make it happen.</p>
      <button className="section-three-button" onClick={handleClick}>SUGGEST A GUEST</button>
    </div>
  );
}

// Exporting the whole of section three
export default SectionThree;