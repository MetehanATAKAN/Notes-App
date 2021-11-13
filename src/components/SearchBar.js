import React,{useState} from 'react'
import {changeSearch} from "../redux/slices/notesSlice"
import {useDispatch} from "react-redux"
 function SerchBar() {
    
    const [searchValue, setsearchValue] = useState("");
    const dispatch = useDispatch();
    dispatch(changeSearch(searchValue));
    return (
        <div className="search-bar">
            <input type="text" placeholder="Search..." onChange={(e)=>setsearchValue(e.target.value)}/>
        </div>
    )
}
export default SerchBar;
