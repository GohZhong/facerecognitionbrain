import { Component } from 'react';
import './App.css';

import Navigation from '../components/navigation/navigation.js';
import Logo from '../components/logo/logo.js';
import ImageLinkForm from '../components/imageLinkForm/imageLinkForm.js';
import Rank from '../components/rank/rank.js';
import FaceRecognition from '../components/faceRecognition/faceRecognition.js'; 
import SignIn from '../components/signIn/signIn.js';
import Register from '../components/register/register.js';
import Scoreboard from '../components/scoreboard/scoreboard.js';
import Footer from '../components/footer/footer.js';
import About from '../components/about/about.js';

import Particles from 'react-particles-js';

class App extends Component {
  constructor(){
    super();
    this.state= {
      input: '',
      imageUrl: '',
      peoples: [],  //test variable
      route: 'signin',
      isSignedIn: false,
      user: {
        id: '',
        name: '',
        email: '',
        password: '',
        entries: 0,
        joined: ''
      }
    }
  }

  loadUser = (userData) => {
    const { id,name, email, password, entries, joined } = userData;
    this.setState({
      user: {
        id: id,
        name: name,
        email: email,
        password: password,
        entries: entries,
        joined: joined
      }
    })
  }

  // componentDidMount(){
  //   fetch('https://pacific-waters-46506.herokuapp.com/')
  //   .then(response => response.json())
  //   .then((data)=>console.log(data))
  // }

  onRouteChange = (route) => {
    if (route === 'signout') {
      this.setState({isSignedIn: false})
    } else if (route ==='home'){
      this.setState({isSignedIn: true})
    }
    this.setState({route: route, input: '', imageUrl: '', peoples: []});
  }

  displayFaceBox = (boxData) => {
    this.setState({box: boxData})
  }

  onInputChange = (event) =>{
    this.setState({input: event.target.value});
  }

  clearInput=() =>{
    document.getElementById('input').value="";
  }

  onButtonSubmit = () => {
    if(this.state.input){
      this.setState({imageUrl: this.state.input});
      fetch('https://pacific-waters-46506.herokuapp.com/imageurl',{
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          input: this.state.input
        })
      })
      .then(response=> response.json())
      .then(resp => {
        console.log('response: ', resp);
        this.setState({peoples:  resp.outputs[0].data.regions})  //new
        if(resp) {
          fetch('https://pacific-waters-46506.herokuapp.com/image',{
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              id: this.state.user.id,
              counter: this.state.peoples.length
            })
          })
          .then(response=> response.json())
          .then((count)=>{
            this.setState(Object.assign(this.state.user, {entries: count}))  
            //Object.assign() changes the state of a specific key(in this case, entries: count), without object assign, user will only contain entries after change of state
          })
          .catch(err=> console.log('Error updating score', err))
        }
      })
      .then(()=>this.setState({input:''}))
      .catch(() => alert('Please insert valid image URL'));
    } else {
      alert('Please insert valid image URL')
    } 
  }
  
  render() {
    const particleStyle = {
      Particles: {
        'position':'fixed',
        'zIndex':'-1',
        'top':'0',
        'bottom':'0',
        'left':'0',
        'right':'0',
      }
    }
    const particlesParameters = {
      particles: {
        line_linked: {
          shadow: {
            enable: true,
            color: '#3CA901',
            blur: 5
          }
        },
        number: {
          value: 30,
          density: {
            enable: true,
            value_area: 1000
          }
        } 
      }
    }

    let { isSignedIn, route, imageUrl,  peoples, user } = this.state;
    return( 
      <div className="App">
        <Particles params={particlesParameters} style={particleStyle.Particles}/> 
        <Navigation route={route} isSignedIn={isSignedIn} onRouteChange={this.onRouteChange}/>
        { route === 'home' 
        ? <div>
            <Logo/>
            <Rank userName={user.name} userEntries={user.entries}/>
            <ImageLinkForm inputChange={this.onInputChange} buttonSubmit={this.onButtonSubmit} clearInput={this.clearInput}/>
            <FaceRecognition peoples={peoples} url={imageUrl}/>  {/*new*/}  
          </div>
        : ( route === 'about'
          ? <About/>
          : ( route === 'scoreboard'
            ? <Scoreboard userName={user.name}/>
            : ( route === 'signin' || route === 'signout'
              ?<SignIn loadUser={this.loadUser}onRouteChange={this.onRouteChange}/>
              :<Register loadUser={this.loadUser} onRouteChange={this.onRouteChange}/> 
              )
            )          
          )
        }
        <Footer/>
      </div>
    )
  }
}

export default App;
