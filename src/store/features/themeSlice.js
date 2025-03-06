import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
    name:"theme",
    initialState:{theme: localStorage.getItem("chat-theme") || "dark"},
    reducers:{
        setTheme:(state,action)=>{
            
            state.theme  = action.payload;
            localStorage.setItem("chat-theme",state.theme);
            
        }
    }
})

export default themeSlice.reducer;
export const {setTheme} = themeSlice.actions;