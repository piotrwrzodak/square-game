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
      createNewArray: (state) => {
        state.array = gridDefault();
      },
      deleteSelected: (state, action) => {
        // if in array is only one square do nothing
        if ( action.payload.length > 1) {
          // replace every square from the array by 0
          for (let i = 0; i < action.payload.length; i++) {
            state.array[action.payload[i].slice(0,1)][action.payload[i].slice(1,2)] = 0
          }
        }
      },
      lowerTheRest: (state, action) => {
        // if in array is only one square do nothing
        if ( action.payload.length > 1) {
          // iterate on every square element  
          for (let row = 4; row > -1; row--) {
            for (let col = 0; col < 5; col++) {
              // if current square is "deleted" go further
              if (state.array[row][col] === 0) {
                
                // if current square row equals 0 => generate random square
                if (row === 0) {
                  state.array[row][col] = Math.floor(Math.random() * 6) + 1  
                }

                let i = 1
    
                while (state.array[row][col] === 0 ) {
                  // if there is no square above generete new square
                  if (row - i === -1) {
                    state.array[row][col] = Math.floor(Math.random() * 6) + 1  
                  }
                  // if square at row (-i) above current square is deleted go higher
                  if (row - i > -1 ? state.array[row - i][col] === 0  : false) {
                    i++
                  }
                  // if square at row (-i) above current square is not deleted replace them
                  if (row - i > -1 ? state.array[row - i][col] !== 0 : false) {
                    state.array[row][col] = state.array[row - i][col]
                    state.array[row - i][col] = 0
                  }
                }
              }
            }
          }
        }
      },
    },
  });

  

  export const selectGrid = state => state.grid.array;
  
  export const { deleteSelected, lowerTheRest, createNewArray} = gridSlice.actions;

  export default gridSlice.reducer;