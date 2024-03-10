import React, {useState} from 'react'


export default function Textform(props) {

  const handleUpClick =()=>{
    //console.log("Uppercase ws clicked"+ text);
    let newText=text.toUpperCase(); 
    setText(newText);
    props.showAlert("Converted to uppercase!","success");
  }
  const handleLoClick=()=>
  {
    let newText=text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase!","success");
  }
  const handleClearClick=() =>
  {
    let newText='';
    setText(newText);
    props.showAlert("Text cleared!","success");
  }
  const handleOnChange =(event)=>{
   // console.log("on change");
    setText(event.target.value)
  }
  
  const[text, setText] =useState('');
// setText("new text");

  return (
    <>
    <div className="continer" style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
    <div className="mb-3">
    <label for="mybox" className="form-label"></label>  
    <textarea className="form-control"value={text} onChange={handleOnChange} styele={{backgroundColor: props.mode==='dark'?'gray':'white'}} id="mybox" rows="8 "></textarea>
  </div>
  <button disabled={text.length===0}className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
  <button disabled={text.length===0}className="btn btn-primary mx-2 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
  <button disabled={text.length===0}className="btn btn-primary mx-2 my-1" onClick={handleClearClick}>Text Clear</button>
  
  </div>
  <div className="container my-3 "style={{color: props.mode==='dark'?'white':'black'}}>
    <h1>your text summary</h1>
    <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and{text.length} characters</p>
    <p>{0.008* text.split(" ").filter((element)=>{return element.length!==0}).length} showing words read times</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:"Enter something in the textbox above to preview it here "}</p>
  </div>
  </>
  )
}
