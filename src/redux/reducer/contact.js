import { createSlice } from '@reduxjs/toolkit'
import { getContact } from '../action/contact';

const initialState = {
  table: [],
  tableInfo: {},
  deleteModal: false,
}

const contact = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    toogleModal: (state) => {
      state.deleteModal = !state.deleteModal
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getContact.fulfilled, (state, action) => {
      state.table = action.payload.results
      state.tableInfo = action.payload.results
    })
  }
});


export default contact.reducer
