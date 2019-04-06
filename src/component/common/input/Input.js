import React from 'react';

import './Input.css';


// inputRef = React.createRef()








const input = (props) => {

    const handleFocus = (props) =>{ 
        document.getElementById(props.name).focus();
    }

    
    return (
        <div className="Inputbox">

            <div  className="input-label">
                <input    type={props.type}
                          onClick={props.clicked} 
                          placeholder=" "
                          onChange={props.changed}
                          name={props.name}
                          required
                          maxLength={props.max}
                          style={{color:props.color, marginBottom:5}}  
                          id={props.name}
                          value={props.val}
                          />



                <span className="span-label"   onClick={()=> handleFocus(props)}>{props.placeholder }</span>
               {props.error ? (  <span className="input-error-text bounceIn" >{props.error}</span> ) : (null)}
            </div>


        </div>
    )
}




export default input;

 
  


/*
example using 

      <Input 
            type={'text'} 
            name={'email'}
            placeholder={'Email'}
            changed={this.changedHandler}
            error={this.state.forgetEmailError}
        />


*/