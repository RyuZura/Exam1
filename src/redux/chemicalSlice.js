import { createSlice } from '@reduxjs/toolkit';


const defaultChemicals = [
  { id: 1, name: 'Hydrochloric Acid', formula: 'HCl' },
  { id: 2, name: 'Sodium Chloride', formula: 'NaCl' },
  { id: 3, name: 'Sulfuric Acid', formula: 'H2SO4' },
  { id: 4, name: 'Ammonia', formula: 'NH3' },
  { id: 5, name: 'Ethanol', formula: 'C2H5OH' }
];


const initialState = JSON.parse(localStorage.getItem('chemicals')) || defaultChemicals;

const chemicalSlice = createSlice({
  name: 'chemicals',
  initialState,
  reducers: {
    addChemical: (state, action) => {
      state.push(action.payload);
      localStorage.setItem('chemicals', JSON.stringify(state));
    },
    removeChemical: (state, action) => {
      const updatedState = state.filter(chemical => chemical.id !== action.payload);
      localStorage.setItem('chemicals', JSON.stringify(updatedState));
      return updatedState;
    },
    updateChemical: (state, action) => {
      const { id, name, formula } = action.payload;
      const updatedState = state.map(chemical =>
        chemical.id === id ? { ...chemical, name, formula } : chemical
      );
      localStorage.setItem('chemicals', JSON.stringify(updatedState));
      return updatedState;
    }
  }
});

export const { addChemical, removeChemical, updateChemical } = chemicalSlice.actions;
export default chemicalSlice.reducer;
