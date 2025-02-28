import {createSlice,createAsyncThunk} from "@reduxjs/toolkit"
import axiosInstance from "../../utils/axiosInstance"

export const signupUser = createAsyncThunk(
    "auth/signupUser",
    async (userData,{rejectWithValue} )=>{
        try {
            const response = await axiosInstance.post("/auth/signup",userData);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
)

export const loginUser = createAsyncThunk(
    "auth/loginUser",
    async (userData,{rejectWithValue})=>{
        try {
            const response = await axiosInstance.post("/auth/login",userData);
            return response.data
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
)

export const checkAuth = createAsyncThunk(
    "auth/checkAuth",
    async (userData,{rejectWithValue})=>{
        try {
            const response = await axiosInstance.get("/auth/check");
            return response.data
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
)

export const logoutUser = createAsyncThunk(
    "auth/logoutUser",
    async ({rejectWithValue})=>{
        try {
            await axiosInstance.post("/auth/logout");
            return null;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }

)

const initialState = {
    username:null,
    loading:false,
    error:null
}

const authSlice = createSlice({ 
    name:"auth",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(signupUser.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(signupUser.fulfilled,(state,action)=>{
            state.user = action.payload.user;
            state.loading = false;
            state.error = null;
        })
        .addCase(signupUser.rejected,(state,action)=>{
            state.user = null;
            state.loading = false;
            state.error = action.payload.error;
        })
        .addCase(loginUser.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(loginUser.fulfilled, (state,action) => {
            state.user = action.payload.user
            state.loading = false;
            state.error = null;
        })
        .addCase(loginUser.rejected, (state,action) => {
            state.loading = false;
            state.error = action.payload.error;
        })
        .addCase(checkAuth.fulfilled,(state,action)=>{
            state.user = action.payload.user;
        })
        .addCase(logoutUser.fulfilled,(state)=>{
            state.user = null;
        })
    }
    
})

export default authSlice.reducer;