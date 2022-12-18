// Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class. 
// useState is a React Hook

import React, {useState} from 'react'

export default function TextForm(props) {

  const handleUpClick=()=>{
    console.log('Uppercase clicked');
    let newText=text.toUpperCase();
    setText(newText);
  }

  const handleLoClick=()=>{
    console.log('Lowercase clicked');
    let newText=text.toLowerCase();
    setText(newText);
  }

  const handleCopy=()=>{
    console.log('copy clicked');
    navigator.clipboard.writeText(text);
    props.showAlert("Copied to clipboard","success");
  }

  const handleOnChange=(event)=>{
    console.log('Onchange fired');
    setText(event.target.value); // if the text is changed, 'text' will be updated with the new text
  }

  const [text, setText] = useState('');
  // We can update 'text' only using Updation function.. 
  // setText('hello how are u');
  
  return (
    <>
    <div style={{color: props.mode==='light'?'black':'white'}}>
        <div className="mb-3">
          <h3 className="my-3">{props.head}</h3>
        {/* <label for="myBox" className="form-label">{props.head}</label> */}
        <textarea className="form-control" id="myBox" rows="6" value={text} onChange={handleOnChange} style={{color: props.mode==='light'?'black':'white', backgroundColor: props.mode==='light'?'white':'#0a2246'}}></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to uppercase</button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to lowercase</button>
        <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy text</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='light'?'black':'white'}}>
      <h2>Text Summary</h2>
      {text.split(" ").length} words and {text.length} characters
    </div>
    </>
  )
};
