import React, {useState} from 'react'


export default function Textform(props) {
    const handleUpClick = () => {
        // console.log("UpperCase was clicked"+ text);
        // setText("You have clicked on handleUpClick"); //qki text useState me h aur setText usko update krne ka function h
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase", "success");
    }
    const handlelowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase", "success");

    }
    const handleclearClick = () => {
        let newText = "";
        setText(newText);
        props.showAlert("Cleared", "success");

    }
    const handlefirstletClick = () => {
        const arr = text.split(" ");
        for (let i = 0; i < arr.length; i++) {
            arr[i]= arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
        }
        const newText = arr.join(" ");
        setText(newText);
        props.showAlert("Converted first letters to UpperCase", "success");

    }
    
    const handleSpeak = () =>{
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
        props.showAlert("Spoken", "success");

    }

    const copyText =() =>{
        navigator.clipboard.writeText(text);
        props.showAlert("Copied", "success");
    }

    const handleOnChange = (event) => {
        // console.log("On Changed");
        setText(event.target.value); //event h us textbox me type krna usko target krke uski value jo text h wo set hojaegi to hum text box me likh skte h ab
    }
    const [text,setText] = useState('');// hum chahte hn text area ki value ho wo text , aur usko badalne ke liye use hoga setText function
    // text = "new text"; // wrong way to change the state 
    //correct way to change the state 
    // setText("new text");
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
    <h1>{props.heading}</h1>
<div className="mb-3">
<textarea className="form-control" value = {text} onChange= {handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white',
color: props.mode==='light'? 'black':'white'}} id="myBox" rows="8"></textarea>
</div>
<button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
<button className="btn btn-primary mx-2" onClick={handlelowClick}>Convert to LowerCase</button>
<button className="btn btn-primary mx-2" onClick={handlefirstletClick}>Convert first letter to UpperCase</button>
<button type='submit' className="btn btn-primary mx-2" onClick={handleSpeak}>Speak</button>
<button type='submit' className="btn btn-primary mx-2" onClick={copyText}>Copy</button>
<button className="btn btn-primary mx-2" onClick={handleclearClick}>Clear text</button>
</div>
<div className="container my-3"  style={{color: props.mode==='dark'?'white':'black'}}>
    <h2>Your text summary</h2>
    <p>{text.split(" ").length-1} words and {text.length} characters</p>
    <p>{0.008* (text.split(" ").length-1)} Minutes read </p>
    <h2>Preview</h2>
    <p>{text.length>0?text:"Enter something in the textbox to preview here"}</p>
</div>

</>
  )
}
