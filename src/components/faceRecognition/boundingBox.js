import React from 'react';

const BoundingBox = ({boundingBox, people}) => {
    const faceLocation= (people)=> {
        const clarifaiFace = people.region_info.bounding_box;
        const image = document.getElementById('inputImage');
        const width = Number(image.width);
        const height = Number(image.height);
        const top_row= height*(clarifaiFace.top_row)
        const left_col= width*(clarifaiFace.left_col);
        const bottom_row= height*(1-clarifaiFace.bottom_row);
        const right_col= width*(1-clarifaiFace.right_col);
        return(
            <div className='bounding-box'style={{top: top_row, bottom: bottom_row, left: left_col, right:right_col}}></div>
        )
    }
    return (
        faceLocation(people)
    )
}

export default BoundingBox;