import { createSlice } from '@reduxjs/toolkit'

export interface CounterState {
    value: number
    toggle : boolean
    state : any
}

const initialState: CounterState = {
    value: 0,
    toggle : false,
    state : ""
}
export const commonSlice = createSlice({
    name: 'common',
    initialState,
    reducers: {
        changeToggle: (state) => {
            state.toggle = !state.toggle
        },
        setState: (state, {payload}) => {
            state.state = payload
        },
    },
})

export const { changeToggle, setState } = commonSlice.actions

export default commonSlice.reducer
