import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getContact = createAsyncThunk('/contact/getData', async ({ limit, page }) => {
  limit = parseInt(limit) || 5
  page = parseInt(page) || 1

  const query = new URLSearchParams({ limit, page }).toString()
  const { data } = await axios.get('http://localhost:3334/contact' + query)
  return data;
})
