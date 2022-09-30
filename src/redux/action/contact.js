import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import qs from "qs";

export const createContact = createAsyncThunk('contact/createContact', async (request) => {
  const result = {};
  try {
    const send = qs.stringify(request);
    const { data } = await axios.post('https://fw9-lesson1-backend-rho.vercel.app/contact', send, {
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
  const { data } = await axios.get('https://fw9-lesson1-backend-rho.vercel.app/contact?' + query);
  return data;
});

export const getContactById = createAsyncThunk('contact/getContactById', async (id) => {
  const result = {};
  try {
    const { data } = await axios.get('https://fw9-lesson1-backend-rho.vercel.app/contact/' + id);
    return data;
  }
  catch (e) {
    result.message = e.response.data?.message;
    return result;
  }
});

export const deleteContact = createAsyncThunk('contact/deleteContact', async ({ id, cb }) => {
  const { data } = await axios.get('https://fw9-lesson1-backend-rho.vercel.app/contact/' + id);
  cb();
  return 0;
});

export const editContact = createAsyncThunk('contact/editContact', async ({ id, request }) => {
  const result = {};
  try {
    const send = qs.stringify(request)
    const { data } = await axios.patch('https://fw9-lesson1-backend-rho.vercel.app/contact/' + id, send, {
      headers: { 'content-type': 'application/x-www-form-urlencoded' }
    });
    result.successMsg = data.message;
    return result;
  }
  catch (e) {
    result.message = e.response.data?.message;
    return result;
  }
});
