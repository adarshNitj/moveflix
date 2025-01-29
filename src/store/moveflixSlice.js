import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    bannerData : [],
    imageURL : ""
}

export const moveflixSlice = createSlice({
    name : 'moveflix',
    initialState,
    reducers : {
        setBannerData : (state,action)=>{
            state.bannerData = action.payload
        },
        setImageURL : (state,action) =>{
            state.imageURL = action.payload
        }
    }
})

export const { setBannerData, setImageURL } = moveflixSlice.actions


export default moveflixSlice.reducer
