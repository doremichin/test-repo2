import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
    list : any
}

const initialState: CounterState = {
    list : []
}
export const photoSlice = createSlice({
    name: 'photo',
    initialState,
    reducers: {
        setPhotos: (state, {payload}) => {
            state.list = payload
        },
    },
})

export const { setPhotos } = photoSlice.actions

export default photoSlice.reducer
