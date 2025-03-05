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
            console.log(error.message);
            return rejectWithValue(error.response.data);
        }
    }
)

export const updateProfile = createAsyncThunk("auth/updateProfile",
    async (image,{rejectWithValue})=>{
        console.log(image)
        try {
            const response = await axiosInstance.put("/auth/update-profile",image)
            console.log("update",response.data);
            return response.data
        } catch (error) {
            console.log(error)
            return rejectWithValue(error)
        }
})

export const logoutUser = createAsyncThunk(
    "auth/logoutUser",
    async (_,{rejectWithValue})=>{
        try {
            await axiosInstance.post("/auth/logout");
            return null;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }

)

const initialState = {
    user: null,
    isAuthenticated: false,
    isLoading: false,
    error: null
  };

const authSlice = createSlice({ 
    name:"auth",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(signupUser.pending, (state) => {
            state.isLoading = true;
            state.error = null;
        })
        .addCase(signupUser.fulfilled,(state,action)=>{
            state.isLoading = false;
            state.isAuthenticated = true;
            state.user = action.payload.user;
        })
        .addCase(signupUser.rejected,(state,action)=>{
            state.isLoading = false;
            state.error = action.payload;
        })
        .addCase(loginUser.pending, (state) => {
            state.isLoading = true;
            state.error = null;
        })
        .addCase(loginUser.fulfilled, (state,action) => {
            state.isLoading = false;
            state.isAuthenticated = true;
            state.user = action.payload.user;
        })
        .addCase(loginUser.rejected, (state,action) => {
            state.isLoading = false;
            state.error = action.payload;
        })
        .addCase(checkAuth.fulfilled,(state,action)=>{
            state.isLoading = false;
            state.isAuthenticated = true;
            state.user = action.payload;
        })
        .addCase(logoutUser.fulfilled,(state)=>{
            state.isAuthenticated = false;
            state.user = null;
        })
    }
    
})

export default authSlice.reducer;