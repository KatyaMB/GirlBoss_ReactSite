import React from 'react';

// Passing props through a functional component
function Name(props) {
    return (
        <h1 
        id="section-one-heading"
        >Meet {props.firstName} {props.lastName}, builder of better workplaces, founder of Bloom and all-around believer that work should work for everyone.
        </h1>
    )
}

export default Name;