import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllContact = createAsyncThunk('contact/getAllContact', async ({ limit, page }) => {
  limit = parseInt(limit) || 5;
  page = parseInt(page) || 1;
  const query = new URLSearchParams({ limit, page }).toString()
  const { data } = await axios.get('http://localhost:3334/contact?' + query);
  return data;
});

export const deleteContact = createAsyncThunk('contact/deleteContact', async ({ id, cb }) => {
  const { data } = await axios.get('http://localhost:3334/contact/' + id);
  cb();
  return 0;
});
