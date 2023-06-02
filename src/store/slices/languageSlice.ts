import { createSlice } from "@reduxjs/toolkit";
import { languageType } from "../../types";

type languageStateType = {
    language: languageType
}


const initialState: languageStateType = {
    language: 'eng'
}

const languageSlice = createSlice({
    name: 'languageSlice',
    initialState,
    reducers: {
        changeLanguage: (state, {payload}: {payload: languageType}) => {
            state.language = payload
        }
    }
})

export default languageSlice.reducer
export const {changeLanguage} = languageSlice.actions