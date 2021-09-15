import React, { useState } from "react";



export default function Textform(props) {
    let [text, setText] = useState('')

    const handleUpClick = () => {
        let newText = text.toUpperCase()
        setText(newText)
    }
    const handleonchange = (e) => {
        setText(e.target.value)
    }
    const handleLowClick = () => {
        let newText = text.toLowerCase()
        setText(newText)
    }
    const handleClearClick = () => {
        let newText = " "
        setText(newText)
    }




    return (
        <>
            <div className='container' >
                <h1>Enter The Text To Analyse</h1>
                <div className="mb-3">
                    <textarea
                        onChange={handleonchange}
                        value={text}
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        rows="8"
                    ></textarea>
                </div>
                <button onClick={handleUpClick} className="btn btn-primary mx-2">Convert To Upper Case</button>

                <button onClick={handleLowClick} className="btn btn-primary mx-2">Convert To Lower Case</button>

                <button onClick={handleClearClick} className="btn btn-primary">Clear</button>



            </div>
            <div className="container my-5 mx-2">
                <h2>Your Text Summary</h2>
                <p> {text.split(' ').length} words And {text.length} Character</p>
                <p> {0.008 * text.split(' ').length} Minutes Read</p>
                <h2>Preview</h2>
                <p>

                    {text}
                </p>
            </div>
        </>
    );
}
