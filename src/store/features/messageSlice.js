import axiosInstance from "../../utils/axiosInstance";
import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";

export const getUsers = createAsyncThunk(
    "message/getUser",
    async (_,{rejectWithValue})=>{
        try {
            const response = await axiosInstance.get("/msg/users");
            return response.data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
        
    }
)

export const getMsgs = createAsyncThunk(
    "message/getMsgs",
    async (userId,{rejectWithValue})=>{
        try {
            const response = await axiosInstance.get(`/msg/${userId} `);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
)

export const sendMsgs = createAsyncThunk(
    "message/sendMsgs",
    async ({id,text,image},{rejectWithValue})=>{
        try {
            const response = await axiosInstance.post(`message/sendMessage/${id} `,{text,image});
            return response.data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
)

const messageSlice = createSlice({
    name:"messageSlice",
    initialState:{},
    reducer:{},
    extraReducers:builder=>{
        builder
        .addCase((state,action)=>{
            
        })
        .addCase((state,action)=>{

        })
        .addCase((state,action)=>{

        })
        .addCase((state,action)=>{

        })
        .addCase((state,action)=>{

        })
        .addCase((state,action)=>{

        })
    }
})