import { AsyncThunk, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getCookie, setCookie, removeCookie } from "typescript-cookie";
import axios from "axios";
import { AnyMessageParams } from "yup/lib/types";
import userType from "../model/userModel";
import user from "../model/userModel";

type ServerError = string;

type state = {
  userInfo: user;
  loading: boolean;
  erroeMessage: string;
  successMessage: string;
};

const initialState: state = {
  userInfo: {
    name: "",
    email: "",
    token: "",
  },
  loading: false,
  erroeMessage: "",
  successMessage: "",
};

export const signup= createAsyncThunk("auth/signup", async (user:user, { rejectWithValue }) => {
  try {
    const { data } = await axios.post(
      "https://api.freerealapi.com/auth/register",
      user
    );
    setCookie("userInfo", JSON.stringify({ ...user, token: data.token }));
    return { ...user, token: data.token };
  } catch (error: any) {
    return rejectWithValue(error.response.data.message);
  }
});

export const login=createAsyncThunk("auth/login", async (user:user, { rejectWithValue}) => {
  try {
    console.log(user);
    const { data } = await axios.post(
      "https://api.freerealapi.com/auth/login",
      user
    );
    setCookie("userInfo", JSON.stringify({ ...user, token: data.token }));
    return { ...user, token: data.token };
  } catch (error: any) {
    return rejectWithValue(error?.response.data.message);
  }
});

const AuthSlice = createSlice({
  name: "auth",
  initialState,

  reducers: {
    loginByCookies: (state, { payload }) => {
      state.userInfo.name = payload.name;
      state.userInfo.email = payload.email;
      state.userInfo.token = payload.token;
      state.successMessage = "you signedup";
    },
    logoutUser: (state) => {
      removeCookie("userInfo");
      state.userInfo.name = "";
      state.userInfo.email = "";
      state.userInfo.token = "";
      state.userInfo.password = "";
      state.successMessage = "";
      state.erroeMessage = "";
    },
  },

  extraReducers: (builder) => {
    builder.addCase(signup.pending, (state, { payload }) => {
      state.loading = true;
    });
    builder.addCase(signup.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.successMessage = "you success fully signedup";
      state.userInfo = payload;
    });
    builder.addCase(signup.rejected, (state, {payload}) => {
      state.loading = false;
      state.erroeMessage= "your email already is exist";
    });
    builder.addCase(login.pending, (state, { payload }) => {
      state.loading = true;
    });
    builder.addCase(login.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.successMessage = "you success fully logedin";
      state.userInfo = payload;
    });
    builder.addCase(login.rejected, (state, action) => {
      state.loading = false;
      state.erroeMessage = "you should singup ";
    });
  },
});

export default AuthSlice.reducer;

export const { loginByCookies, logoutUser } = AuthSlice.actions;
