import React from 'react';

const Navigation = ({ onRouteChange, isSignedIn, route, onButtonSubmit }) => {
    if (isSignedIn) {
        return (
            <nav style={{display:'flex', justifyContent:'flex-end'}}>
                <p className="link dim black dib br-100 h2 w2 mr3 pointer" style={{margin: 'auto 1% auto 0'}} onClick={()=> onRouteChange('about')}>
                        <svg viewBox="0 0 32 32">
                            <path d="M23.424,10.827c0,3.956-4.533,5.478-5.507,6.907c-0.729,1.063-0.485,2.557-2.495,2.557c-1.309,0-1.946-1.064-1.946-2.039c0-3.623,5.323-4.442,5.323-7.425c0-1.643-1.096-2.616-2.921-2.616c-3.895,0-2.373,4.016-5.323,4.016c-1.066,0-1.979-0.639-1.979-1.855c0-2.983,3.407-5.628,7.119-5.628C19.59,4.742,23.424,6.536,23.424,10.827z M15.545,22.268c-1.369,0-2.496,1.125-2.496,2.496c0,1.369,1.127,2.494,2.496,2.494c1.367,0,2.494-1.125,2.494-2.494C18.039,23.393,16.912,22.268,15.545,22.268z M32,16c0,8.822-7.178,16-16,16C7.178,32,0,24.822,0,16S7.178,0,16,0C24.822,0,32,7.177,32,16z M29,16c0-7.168-5.832-13-13-13S3,8.832,3,16s5.832,13,13,13S29,23.168,29,16z"/>
                        </svg>
                    </p>
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
                    <p className="link dim black dib br-100 h2 w2 mr3 pointer" style={{margin: 'auto 1% auto 0'}} onClick={()=> onRouteChange('about')}>
                        <svg viewBox="0 0 32 32">
                            <path d="M23.424,10.827c0,3.956-4.533,5.478-5.507,6.907c-0.729,1.063-0.485,2.557-2.495,2.557c-1.309,0-1.946-1.064-1.946-2.039c0-3.623,5.323-4.442,5.323-7.425c0-1.643-1.096-2.616-2.921-2.616c-3.895,0-2.373,4.016-5.323,4.016c-1.066,0-1.979-0.639-1.979-1.855c0-2.983,3.407-5.628,7.119-5.628C19.59,4.742,23.424,6.536,23.424,10.827z M15.545,22.268c-1.369,0-2.496,1.125-2.496,2.496c0,1.369,1.127,2.494,2.496,2.494c1.367,0,2.494-1.125,2.494-2.494C18.039,23.393,16.912,22.268,15.545,22.268z M32,16c0,8.822-7.178,16-16,16C7.178,32,0,24.822,0,16S7.178,0,16,0C24.822,0,32,7.177,32,16z M29,16c0-7.168-5.832-13-13-13S3,8.832,3,16s5.832,13,13,13S29,23.168,29,16z"/>
                        </svg>
                    </p>
                    <p className='f3 link dim black underline pa3 pointer' onClick={() => onRouteChange('signin')}>Sign in</p>
                    <p className='f3 link dim black underline pa3 pointer' onClick={() => onRouteChange('register')}>Register</p>
                </nav>
            </div>
        );
    }
}

export default Navigation;