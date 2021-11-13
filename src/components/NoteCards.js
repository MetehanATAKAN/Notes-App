import React from 'react'
import {useSelector,useDispatch} from "react-redux"
import {TiDelete} from "react-icons/ti"
import {deleteNote} from "../redux/slices/notesSlice"

function NoteCards() {

    const state = useSelector(state => state.notes.notesData);
    const searchState = useSelector(state => state.notes.searchBarValue);
    const dispatch = useDispatch();
    return (
    <>
    <div className="noteCards">
    {
        state.filter(val=>{
            
            if(searchState==="") {
                return val
            }
            else if(val.content.toLowerCase().includes(searchState.toLowerCase())) {
                return val
            }
            else {
                return ""
            }
        }).map(item=> 
            <div className={item.color} key={item.id}>
            <div className="note-header" onClick={(e)=>dispatch(deleteNote(item.id))}><TiDelete/></div>
            <textarea value={item.content} className="notes-textarea" name="textarea2"  cols="30" rows="10" disabled></textarea>
            </div>
            )
    }
        </div>
    </>
    )
}
export default NoteCards;