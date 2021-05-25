import React from 'react';
import Tilt from 'react-tilt'; 
import logo from './logo.svg';

const Logo = () => {
    return (
        <div className='ma4 mt0'>
            <Tilt className="Tilt br2 shadow-2" options={{ max : 30 }} style={{ height: 150, width: 150 }}>
                <div className="Tilt-inner" style={{padding: '10px'}}> 
                    <img src={logo} alt='Brain Logo'/>
                </div>
            </Tilt>        
        </div>
    )
}

export default Logo;