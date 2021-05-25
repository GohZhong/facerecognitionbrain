import React from 'react';

const About = () => {
    return(
        <main className="pa3 pa5-ns">
            <h2 className="f3 lh-copy measure b">
                Hi!! Welcome to my first WebApp
            </h2>
            <div className="f3 lh-copy measure times flex flex-column flex-start">
                <span className="underline f4 lh-copy measure">Instructions:</span>
                <p className="f4 lh-copy measure">If you are new, register for an account and you will be brought to the main page<br/>
                    <span className='f6 lh-copy measure'>*Note: Please be civilised people on putting names</span><br/>
                    <span className='f6 lh-copy measure'>Wouldn't want to remove any users but I will if civil duty calls for it  :)</span>
                </p>
                <p className="f4 lh-copy measure">The goal of this somewhat useless but fun game is to obtain as much entries of detected faces as possible. In the top right corner, click on the scoreboard tab and it will show you the leaderboard and your rank</p>
                <p className="f4 lh-copy measure">Insert an image URL from the web and watch as the power of machine learning highlights every face within the picture and increases your score<br/>
                    <span className='f7 lh-copy measure i'>(*Psst psst multiple faces at in one image also count towards your score)</span>
                </p>
                <p className="f4 lh-copy measure">Once you're logged out, you can always sign in with your registered credentials, and don't worry, your progress is saved</p>
                <p className="f4 lh-copy measure">I hope you enjoy this, don't hesitate to drop any feedback or feature requests to me. Have fun!!</p>
            </div>
            <h4 className="f4 lh-copy measure b">Contact me @ gohzhong@gmail.com</h4>
            <h5 className="f5 lh-copy measure">Feel free to share this to your friends</h5>
        </main>
    )
}

export default About;