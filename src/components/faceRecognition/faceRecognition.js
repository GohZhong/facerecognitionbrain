import React from 'react';
import BoundingBox from './boundingBox';
import './faceRecognition.css';

const FaceRecognition = ({url, peoples}) => {
    return (
        <div className="center ma">
            <div className='absolute mt2'>
                <img id='inputImage' src={url} alt='' width='500px' height='auto'>
                </img>   
                {
                    peoples.map((people, i)=>{
                        return(
                            <BoundingBox key={i} people={people}/>
                        )
                    })
                }
            </div>    
        </div>
    )
}

export default FaceRecognition;