import { createSlice } from '@reduxjs/toolkit'
import { createContact, getAllContact } from '../action/contact';

const initialState = {
  table: [],
  tableInfo: {},
  deleteModal: false,
  search: '',
  sort: 'ASC',
  errorMsg: null,
  successMsg: null,
}

const contact = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    toggleModal: (state) => {
      state.deleteModal = !state.deleteModal
    },
    searchName: (state, action) => {
      state.search = action.payload
    },
    sortingColomn: (state) => {
      state.sort = 'DESC'
    },
    sortingContact: (state, action) => {
      state.table = action.payload
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
    builder.addCase(createContact.pending, (state) => {
      state.errorMsg = null;
      state.successMsg = null;
    });
    builder.addCase(createContact.fulfilled, (state, action) => {
      state.errorMsg = action.payload?.errorMsg;
      state.successMsg = action.payload?.successMsg;
    });
  }
});

export { getAllContact, createContact };

export const { toggleModal, searchName, sortingColomn, sortingContact } = contact.actions;

export default contact.reducer
