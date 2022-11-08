import React from 'react';
import "./projectSection.css"

function projectSection(props) {
    return (
        <div className='projectContainer'>
            <h1>{props.name}</h1>
        </div>
    );
}

export default projectSection;