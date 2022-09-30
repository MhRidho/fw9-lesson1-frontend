import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import qs from "qs";

export const createContact = createAsyncThunk('contact/createContact', async (request) => {
  const result = {};
  try {
    const send = qs.stringify(request);
    const { data } = await axios.post('http://localhost:3334/contact', send, {
      headers: {
        'content-type': 'application/x-www-form-urlencoded'
      }
    });
    result.successMsg = data.message;
    return result;
  }
  catch (e) {
    result.errorMsg = e.response.data.message;
    return result;
  }
});

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
