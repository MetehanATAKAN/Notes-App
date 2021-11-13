import React,{useState} from 'react'
import {addNotes,changeColor} from "../redux/slices/notesSlice"
import {useDispatch} from "react-redux"

function Textarea() {

    const dispatch = useDispatch();
    const [textAreaValue, settextAreaValue] = useState("");
    
    const textareaData =(data)=> {  
      settextAreaValue(data);
    }

    const addClick=()=> {
        if (textAreaValue!=="") {
            dispatch(addNotes(textAreaValue));
            settextAreaValue("");
        }      
    }

    const notesColor=(color)=> {
        dispatch(changeColor(color));
    }
    
    return (
        
        <div className="textarea">
            <textarea
            value={textAreaValue}
            autoFocus  
            name="textarea" 
            cols="30" 
            rows="15" 
            placeholder="Enter your note here..." 
            onChange={(e)=>textareaData(e.target.value)}></textarea>
            <div className="textarea-footer">
                <div className="colorButtons">
                    <button className="pink" onClick={(e)=>notesColor(e.target.className)}></button>
                    <button className="purple" onClick={(e)=>notesColor(e.target.className)}></button>
                    <button className="yellow" onClick={(e)=>notesColor(e.target.className)}></button>
                    <button className="blue" onClick={(e)=>notesColor(e.target.className)}></button>
                    <button className="green" onClick={(e)=>notesColor(e.target.className)}></button>
                </div>            
                <div className="addButton">
                <button onClick={()=>addClick()} >ADD</button>
                </div>
            </div>
        </div>       
        
    )
}
export default Textarea;