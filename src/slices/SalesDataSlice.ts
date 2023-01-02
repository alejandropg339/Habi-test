import { createSlice } from '@reduxjs/toolkit';

export const initialStateSales = {
    fullName: '',
    email: '',
    address: '',
    floor: '',
    zones: { have: false, socialZones: {bbq: false, living: false, park: false} },
    parking: { have: false, type: 'Cubierto' },
    value: 0,
    picture: null,
    elevator: false,
    step: 0,
    path: '',
    finished: false
  }


export const salesDataSlice = createSlice({
    name: 'salesData',
    initialState: initialStateSales,
    reducers:{
        setSalesProperty: (state: any, {payload}) =>{
            console.log(payload);
            state[payload.name] = payload.value;
        },
        incrementStep:(state) => {
            state.step +=1;
        },
        decrementStep:(state) => {
            state.step -=1;
        },
        keepPath:(state, {payload}) => {
            state.path = payload.path; ;
        },
        restForm: (state) => {
            state = initialStateSales;
        }
    }
})

export const { 
    setSalesProperty,
    incrementStep,
    decrementStep,
    keepPath
 } = salesDataSlice.actions;