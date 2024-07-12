import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../store'
interface DataState {
    value: number
  }
  const initialState: DataState = {
    value: 0,
  }
export const dataSlicer = createSlice({
  name: 'data',
  initialState: initialState,
  reducers: {
    increment: state => {
      state.value += 1
    },
    decrement: state => {
      state.value -= 1
    },
    incrementByAmount: (state,  action: PayloadAction<number>) => {
      state.value += action.payload
    }
  }
})

export const { increment, decrement, incrementByAmount } = dataSlicer.actions

export const selectCount = (state: RootState) => state.data.value

export default dataSlicer.reducer