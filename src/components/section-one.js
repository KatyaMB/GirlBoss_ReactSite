import React from 'react';
import Name from './name_function'

// Creating section one with a function
function SectionOne() {
    return (
        <div className='section-one'>
            <img id="section-one-image" src="https://girlboss.com/cdn/shop/files/gb_radio_homepage_headshot_1024x1024.png?v=1688505438" alt="Avery Francis" />
            <Name firstName={"Avery"} lastName={"Francis"}/>
            <p id="section-one-para">"The new season of Girlboss Radio will be known for exploring the nuanced and complex lived experiences of some of the world's most impressive women. The world of work is changing faster than ever. Women everywhere are challenging legacy ways of working and defining success on their terms. I'm here for it."</p>
        </div>
    );
}

// Exporting section one
export default SectionOne;