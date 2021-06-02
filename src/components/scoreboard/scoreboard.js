import React, { useState, useEffect } from 'react';
import Score from './score.js'

const Scoreboard = ({userName})=> {

    const [userScore, setuserScore] = useState([]);
    const [max, setmax] = useState('');
    const [currentUser, setcurUser] = useState({});
    const [index, setindex] = useState('');

    useEffect(()=>{
        // setInterval(()=>{
            console.log('Refreshing...')
            fetch('https://pacific-waters-46506.herokuapp.com/score')
            .then(resp => resp.json())
            .then(score =>{
                let index = score.findIndex((x)=>{
                    return x.name === userName;
                })
                const currentUser = score[index];
                setuserScore(score.slice(0,9));
                setmax(score[0].entries);
                setcurUser(currentUser);
                setindex(index);
            })
        // }, 5000)
    },[userName])    
            
    return(
        <div>
            <h1 className='white f2 underline'>Scoreboard</h1>
            <div className='flex flex-column flex-wrap content-center'>
                {
                    userScore.map((score, i)=>{
                        return (
                            <Score key={i} rank={i+1} score={score} max={max}/>
                        )
                    })
                }
            </div>
            <div>
                { index > 8
                    ?<div className='flex flex-column flex-wrap content-center'>
                        <span className="w-auto ">----</span>
                        <Score rank={index+1} score={currentUser} max={max}/>
                    </div>
                    :<span></span>
                }
            </div>    
        </div>  
    )
}

export default Scoreboard;