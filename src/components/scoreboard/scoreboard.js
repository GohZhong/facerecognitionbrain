import React from 'react';
import Score from './score.js'

class Scoreboard extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            userScore: [],
            max: '',
            colour: '',
            curUser: {},
            index: ''
        }
    }
    componentDidMount(){
        fetch('https://pacific-waters-46506.herokuapp.com/score')
        .then(resp => resp.json())
        .then(score =>{
            let index = score.findIndex((x)=>{
                return x.name === this.props.userName;
            })
            const curUser = score[index];
            this.setState({
                userScore: score.slice(0,9), 
                max: score[0].entries,
                curUser: curUser,
                index: index
            })
        })
    }

    render(){
        const { userScore, max, curUser, index } = this.state;
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
                            <Score rank={index+1} score={curUser} max={max}/>
                        </div>
                        :<span></span>
                    }
                    
                </div>    
            </div>  
        )
    }
}

export default Scoreboard;