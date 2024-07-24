import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


interface ToDoState{
    name: any
    status: string
    error: string | null

}

const initialState: ToDoState = {
    name: null,
    status: 'idle',
    error: null
}

export const fetchCountry = createAsyncThunk(
    'countries/ fetchCountry',
    async () => {
        const res = await fetch (' https://restcountries.com/v3.1/all')
        // const data = await res.json()

        return res
    }


)

const countrySlice =  createSlice({
    name: "countries",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchCountry.fulfilled, (state, action) => {
            state.name = action.payload
        })
    }
})

export default countrySlice.reducer