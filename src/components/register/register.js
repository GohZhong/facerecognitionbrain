import React ,{ useState } from 'react';
import './register.css';

const Register = ({loadUser, onRouteChange})=> {
    const onNoColour = () =>{
        const colours = ['#ff0000','#ffa500','ffff00','#1eff00','#0000ff','#ffc0cb','#ce00ce'];
        const randomIndex = Math.floor(Math.random() * colours.length);
        const color = colours[randomIndex];
        return color;
    }
    const [registerEmail, setregisterEmail] = useState('');
    const [registerPassword, setregisterPassword] = useState('');
    const [registerName, setregisterName] = useState('');
    const [prevId, setprevId] = useState('');
    const [registerColour, setregisterColour] = useState(onNoColour);
    
    const onColourChange = (event) => {
        if(prevId){
            prevId.classList.remove("selected");
        }
        event.target.classList.toggle("selected");
        setregisterColour(event.target.getAttribute('data'));
        setprevId(event.target);
    }
    
    
    const onRegister = () => {
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
                    loadUser(user)
                    onRouteChange('home')
                } else{
                    alert('User already exists')
                } 
            })
            .catch((err)=>alert('Oops something went wrong, Please try again', err))
        } else {
            alert('Please fill in all available fields');
        }
    }

    return (
        <article className="br3 ba b--black-10 mv4 w-100 w-25-1 w-80-m w-90-s mw6 shadow-5 center"> 
            <main className="pa4 black-80 ">
                <div className="measure">
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                        <legend className="f2 fw6 ph0 mh0">Register</legend>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
                            <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="name"  id="name" onChange={(e)=>setregisterName(e.target.value)}/>
                        </div>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                            <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address" onChange={(e)=>setregisterEmail(e.target.value)}/>
                        </div>
                        <div className="mv3">
                            <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                            <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password" onChange={(e)=>setregisterPassword(e.target.value)}/>
                        </div>
                        <div className='mv3'>
                            <label className="di pa1 fw6 lh-copy f5" htmlFor="color1">Pick your colour: </label>
                            <div name="color1"className="flex flex-row flex-wrap justify-center align-center">
                                <div className='ma1 bgred circle' data="#ff0000" onClick={onColourChange}></div>
                                <div className='ma1 bgorange circle' data="#ffa500" onClick={onColourChange}></div>
                                <div className='ma1 bgyellow circle' data="#ffff00" onClick={onColourChange}></div>
                                <div className='ma1 bggreen circle' data="#1eff00" onClick={onColourChange}></div>
                                <div className='ma1 bgblue circle' data="#0000ff" onClick={onColourChange}></div>
                                <div className='ma1 bgpink circle' data="#ffc0cb" onClick={onColourChange}></div>
                                <div className='ma1 bgpurple circle' data="#ce00ce" onClick={onColourChange}></div>
                            </div>
                        </div>
                        <label className="pa0 ma0 lh-copy f6 pointer"></label>
                    </fieldset>
                    <div className="">
                        <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib pointer" type="submit" value="Register" onClick={onRegister}/>
                    </div>
                </div>
            </main>
        </article>    
    )
}

export default Register;