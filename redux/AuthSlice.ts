import { AsyncThunk, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import user from "../model/userModel";

type state={
    userInfo:user,
    loading:boolean,
    erroeMessage:string,
    successMessage:string
}

const initialState:state = {
    userInfo: {
      name: "",
      email: "",
      token: "",
    },
    loading: false,
    erroeMessage: "",
    successMessage: "",
  };

export const signup: AsyncThunk<any, void, {}> = createAsyncThunk(
  "auth/signup",
  async (user, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(
        "https://api.freerealapi.com/auth/register",
        user
      );
      if (data) {
      }
    } catch (error) {}
  }
);

export const login: AsyncThunk<any, void, {}> = createAsyncThunk(
  "auth/login",
  async (user, { rejectWithValue }) => {
    try {
      console.log(user);
      const { data } = await axios.post(
        "https://api.freerealapi.com/auth/login",
        user
      );
      console.log(data);

      if (data) {
      }
    } catch (error) {}
  }
);

const AuthSlice = createSlice({
  name: "auth",
  initialState,

  reducers: {
    loginByLocalStorage: (state, { payload }) => {
      state.userInfo = payload;
    },
  },

  extraReducers: (builder) => {
    // The `builder` callback form is used here because it provides correctly typed reducers from the action creators
    builder.addCase(signup.pending, (state, { payload }) => {

    })
    builder.addCase(signup.fulfilled, (state, { payload }) => {

    })
    builder.addCase(signup.rejected, (state, action) => {
     
    })
  },
});

export default AuthSlice.reducer;

export const { loginByLocalStorage } = AuthSlice.actions;
