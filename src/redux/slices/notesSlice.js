import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";
export const notesSlice=createSlice({
    name:"notes",
    initialState:{
        notesData:[
            {
                id:nanoid(),
                color:"pink",
                content:"mete"
            },
            {
                id:nanoid(),
                color:"purple",
                content:"ali"
            },
            {
                id:nanoid(),
                color:"yellow",
                content:"mehmet"
            },
            {
                id:nanoid(),
                color:"blue",
                content:"beyza"
            }
        ],
        notesColor:"pink",
        searchBarValue:null,
    },  
    reducers:{
        addNotes:(state,action) =>{
            let note={id:nanoid(),color:state.notesColor,content:action.payload};
            console.log(state.notesColor);
            state.notesData.push(note);
        },
        changeColor:(state,action)=> {
           state.notesColor=action.payload;
        },
        changeSearch:(state,action)=> {
            state.searchBarValue=action.payload;
        },
        deleteNote:(state,action)=> {
            window.alert("Notu Silmek İstediğinize Emin Misiniz?");
           let id=action.payload;
           let updateState= state.notesData.filter(item=>item.id!==id );
           state.notesData=updateState;
        }
    }
})

export const {addNotes,changeColor,changeSearch,deleteNote}=notesSlice.actions;
export default notesSlice.reducer;