import React from 'react';

const Navigation = ({ onRouteChange, isSignedIn, route, onButtonSubmit }) => {
    if (isSignedIn) {
        return (
            <nav style={{display:'flex', justifyContent:'flex-end'}}>
                { route === 'home'
                ? <p className='f3 link dim black underline pa3 pointer' onClick={() => onRouteChange('scoreboard')}>Scoreboard</p>
                : <p className='f3 link dim black underline pa3 pointer' onClick={() =>onRouteChange('home')}>Home</p>
                }    
                <p className='f3 link dim black underline pa3 pointer' onClick={() => onRouteChange('signout')}>Sign Out</p>
            </nav>
        );
    } else {
        return (
            <div>
                <nav style={{display:'flex', justifyContent:'flex-end'}}>
                    <p className='f3 link dim black underline pa3 pointer' onClick={() => onRouteChange('signin')}>Sign in</p>
                    <p className='f3 link dim black underline pa3 pointer' onClick={() => onRouteChange('register')}>Register</p>
                </nav>
            </div>
        );
    }
}

export default Navigation;