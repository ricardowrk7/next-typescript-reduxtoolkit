import {
  AsyncThunk,
  createAsyncThunk,
  createSlice,
 
} from "@reduxjs/toolkit";
import { getCookie, setCookie } from 'typescript-cookie'
import axios from "axios";
import { AnyMessageParams } from "yup/lib/types";
import userType from "../model/userModel";
import user from "../model/userModel";

type ServerError=string

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

export const signup: AsyncThunk<
  any,
  user,
  {
    rejectValue: ServerError;
  }
> = createAsyncThunk("auth/signup", async (user, { rejectWithValue }) => {
  try {
    const { data } = await axios.post(
      "https://api.freerealapi.com/auth/register",
      user
    );
    setCookie('userInfo', JSON.stringify({...user,token:data.token}))
    return {...user,token:data.token}
   
  } catch (error: any) {
    return rejectWithValue(error.response.data.message);
  }
});

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
    loginByCookies: (state, { payload }) => {
      state.userInfo.name=payload.name
      state.userInfo.email=payload.email
      state.userInfo.token=payload.token
      state.successMessage="you signedup"
    },
  },

  extraReducers: (builder) => {
    builder.addCase(signup.pending, (state, { payload }) => {
      state.loading = true;
    });
    builder.addCase(signup.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.successMessage="you success fully signedup"
      state.userInfo=payload
      
    });
    builder.addCase(signup.rejected, (state, action) => {
      state.loading = false;
      state.erroeMessage = action.payload!;
    });
  },
});

export default AuthSlice.reducer;

export const { loginByCookies } = AuthSlice.actions;
