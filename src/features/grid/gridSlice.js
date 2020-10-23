import { createSlice } from '@reduxjs/toolkit';

const gridDefault = () => {
  const rows = 5
  const cols = 5
  const array = []

  for (let row = 0; row < rows; row++) {
    array.push([])
    for (let col = 0; col < cols; col++) {
      let number = Math.floor(Math.random() * 6) + 1  
      array[row].push(number)
    }
  }

  return array
}
const array  = gridDefault();



export const gridSlice = createSlice({
    name: 'grid',
    initialState: {
      array,
    },
    reducers: {
      deleteSelected: (state, action) => {
        
      },
      lowerTheRest: (state, action) => {
        
      },
      generateNewOnes: (state, action) => {

      }
    },
  });

  

  export const selectGrid = state => state.grid.array;
  
  export const { deleteSelected, lowerTheRest, generateNewOnes} = gridSlice.actions;

  export default gridSlice.reducer;