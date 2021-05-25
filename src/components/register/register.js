import React from 'react';
import './register.css';

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            registerEmail: '',
            registerPassword: '',
            registerName: '',
            registerColour: `${this.onNoColour()}`,
            prevId:''
        }
    }

    onNameChange = (event) => {
        this.setState({registerName: event.target.value})
    }

    onEmailChange = (event) => {
        this.setState({registerEmail: event.target.value})
    }

    onPasswordChange = (event) => {
        this.setState({registerPassword: event.target.value})
    }

    onColourChange = (event) => {
        if(this.state.prevId){
            this.state.prevId.classList.remove("selected");
        }
        event.target.classList.toggle("selected");
        this.setState({registerColour: event.target.getAttribute('data'), 
        prevId : event.target});
    }

    onNoColour = () =>{
        const colours = ['#ff0000','#ffa500','ffff00','#1eff00','#0000ff','#ffc0cb','#ce00ce'];
        const randomIndex = Math.floor(Math.random() * colours.length);
        const color = colours[randomIndex];
        return color;
    }

    onRegister = () => {
        const { registerName, registerEmail, registerPassword, registerColour } = this.state;
        if (registerName && registerEmail && registerPassword){
            fetch('https://pacific-waters-46506.herokuapp.com/register',{
                method: 'post',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    name: registerName,
                    email: registerEmail,
                    password: registerPassword,
                    colour: registerColour
                })
            })
            .then(response=> response.json())
            .then((user) => {
                if (user) {
                    this.props.loadUser(user)
                    this.props.onRouteChange('home')
                } else{
                    alert('User already exists')
                } 
            })
            .catch((err)=>alert('Oops something went wrong, Please try again', err))
        } else {
            alert('Please fill in all available fields');
        }
    }

    render() {
        return (
            <article className="br3 ba b--black-10 mv4 w-100 w-25-1 w-80-m w-90-s mw6 shadow-5 center"> 
                <main className="pa4 black-80 ">
                    <div className="measure">
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                            <legend className="f2 fw6 ph0 mh0">Register</legend>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
                                <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="name"  id="name" onChange={
                                this.onNameChange}/>
                            </div>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                                <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address" onChange={this.onEmailChange}/>
                            </div>
                            <div className="mv3">
                                <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                                <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password" onChange={this.onPasswordChange}/>
                            </div>
                            <div className='mv3'>
                                <label className="di pa1 fw6 lh-copy f5" htmlFor="color1">Pick your colour: </label>
                                <div name="color1"className="flex flex-row flex-wrap justify-center align-center">
                                    <div className='ma1 bgred circle' data="#ff0000" onClick={this.onColourChange}></div>
                                    <div className='ma1 bgorange circle' data="#ffa500" onClick={this.onColourChange}></div>
                                    <div className='ma1 bgyellow circle' data="#ffff00" onClick={this.onColourChange}></div>
                                    <div className='ma1 bggreen circle' data="#1eff00" onClick={this.onColourChange}></div>
                                    <div className='ma1 bgblue circle' data="#0000ff" onClick={this.onColourChange}></div>
                                    <div className='ma1 bgpink circle' data="#ffc0cb" onClick={this.onColourChange}></div>
                                    <div className='ma1 bgpurple circle' data="#ce00ce" onClick={this.onColourChange}></div>
                                </div>
                            </div>
                            <label className="pa0 ma0 lh-copy f6 pointer"></label>
                        </fieldset>
                        <div className="">
                            <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib pointer" type="submit" value="Register" onClick={this.onRegister}/>
                        </div>
                    </div>
                </main>
            </article>    
        )
    }
}

export default Register;