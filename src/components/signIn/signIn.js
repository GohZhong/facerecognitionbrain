import React, { useState } from 'react';

const SignIn = ({ loadUser, onRouteChange }) => {
    const [signInEmail, setsignInEmail] = useState('');
    const [signInPassword, setsignInPassword] = useState('');

    const onSubmitSignIn = () => {
        fetch('https://pacific-waters-46506.herokuapp.com/signin', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: signInEmail,
                password: signInPassword
            })
        }) 
        .then(response => response.json())
        .then(data => {
            if (data.id) {
                loadUser(data)
                onRouteChange('home')
            } else if(!data){
                alert('Incorrect email and password')
            }
        })
    }    
    return (
        <article className="br3 ba b--black-10 mv4 w-100 w-25-1 w-80-m w-90-s mw6 shadow-5 center">
            <main className="pa4 black-80">
                <div className="measure">
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                        <legend className="f2 fw6 ph0 mh0">Sign In</legend>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                            <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address" onChange={e => setsignInEmail(e.target.value)}/>
                        </div>
                        <div className="mv3">
                            <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                            <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password" onChange={e=>setsignInPassword(e.target.value)}/>
                        </div>
                        <label className="pa0 ma0 lh-copy f6 pointer"></label>
                    </fieldset>
                    <div className="">
                        <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Sign in" onClick={onSubmitSignIn}/>
                    </div>
                    <div className="lh-copy mt3">
                        <p className="f6 link dim black db pointer" onClick={()=>onRouteChange('register')}>Register here</p>
                    </div>
                </div>
            </main>
        </article>    
    )
}

export default SignIn;