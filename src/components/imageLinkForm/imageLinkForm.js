import React from 'react';

class ImageLinkForm extends React.Component {
    componentDidMount(){
        this.onKeyUp = this.onKeyUp.bind(this);
    }
    
    onKeyUp(event){
        const {buttonSubmit, clearInput} = this.props;
        if (event.charCode === 13) {
            buttonSubmit();
            clearInput();
        }
    }    

    render(){
        const {inputChange, buttonSubmit, clearInput} = this.props;
        const objectstyle = {
            div: {
                'backgroundColor': '#fff',
                'backgroundImage': 'linear-gradient(90deg, transparent 79px, #abced4 79px, #abced4 81px, transparent 81px),linear-gradient(#eee .1em, transparent .1em)',
                'backgroundSize': '100% 1.2em',
            }
        }
        return (
            <div>
                <p className='f3'>
                    {`Insert an image URL and watch the faces get highlighted. Compete with others for the highest score`}
                </p>
                <div className="flex center">
                    <div className='pa3 br3 shadow-5 w-90 center' style={objectstyle.div}>
                        <input id='input' type='text' className='f4 pa2 w-70 w-60-m w-50-s center' placeholder="Insert image URL here..."onChange={inputChange} onKeyPress={this.onKeyUp}></input>
                        
                        <button id='submit' className='w-20 w-30-m w-50-s grow f4 f5-m f6-s link pa2 ph3 dib white bg-light-purple' onClick={()=>{buttonSubmit(); clearInput();}}>Detect</button>
                    </div>    
                </div>
            </div>
        );
    }    
}

export default ImageLinkForm;
