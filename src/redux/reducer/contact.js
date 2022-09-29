import { createSlice } from '@reduxjs/toolkit'
import { getAllContact } from '../action/contact';

const initialState = {
  table: [],
  tableInfo: {},
  deleteModal: false,
}

const contact = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    toggleModal: (state) => {
      state.deleteModal = !state.deleteModal
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getAllContact.pending, (state) => {
      state.table = []
      state.tableInfo = {}
    });
    builder.addCase(getAllContact.fulfilled, (state, action) => {
      state.table = action.payload.results
      state.tableInfo = action.payload.pageInfo
    })
  }
});

export const { toggleModal } = contact.actions;

export default contact.reducer
