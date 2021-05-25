import React from 'react';

const Score = ({ rank, score, max })=> {
    const length = (Number(score.entries)/Number(max))*50;
    const nameSlice= () =>{
        const scoreName = String(score.name)
        if (scoreName.length > 8){
            return (scoreName.slice(0,8) + '...');
        } else {
            return scoreName;
        }
    } 
    return(
        <div className='inline-flex flex-row flex-wrap shadow-5 br3 w-80 ma2 ma2-m ma2-l ma2-ns pa1-ns pa1-m pa0-l bg-white'>
            <h1 className=' br pa2' style={{'margin':'auto 0'}}>{`#${rank}`}</h1>
            <h1 className='' style={{'margin':'auto 1em'}}>{nameSlice()}</h1>
            <div className='br4 self-end' style={{'margin':'auto 1em auto auto', 'padding':`0 0 0 ${length}%`,'backgroundColor':`${score.colour}`}}>
                <h1 className='' style={{'margin':'auto 1em auto auto'}}>{score.entries}</h1>
            </div>    
        </div>
    )
}

export default Score;