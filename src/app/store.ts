import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../features/Counter/model/counterSlice'
import todoReducer from '../features/Data/model/dataSlice'
import countryReducer from '../features/HomeWork/model/homeWorkSlice'

const store = configureStore({
    reducer: {
        counter: counterReducer,
        todo: todoReducer,
        country: countryReducer

    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch =  typeof store.dispatch

export default store