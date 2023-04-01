import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import type { RootState } from '~/store';
import CredentialsType from '~/types/CredentialsType';
import TokenType from '~/types/TokenType';
import UserType from '~/types/UserType';
import { addTokenToHeader } from '~/utils/api';
import storage from '~/utils/storage';
import showAlert from '~/utils/swal';

export type UserSliceType = UserType & {
  // loading: boolean;
  token: TokenType;
};

const initialState: UserSliceType = {
  loggedIn: false,
  firstName: '',
  lastName: '',
  token: {
    access_token: '',
    expires_in: 0,
    token_type: '',
  },
};

// THUNKS
export const logIn = createAsyncThunk(
  'user/logIn',
  async ({ username, password }: CredentialsType) => {
    const response = await axios.post<TokenType>('/login', {
      username,
      password,
    });
    return response.data;
  }
);

// SLICE
export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: { payload: UserSliceType }) => {
      const user = action.payload;
      addTokenToHeader(user.token.access_token);
      return user;
    },
    logOut: () => {
      storage.deleteUser();
      showAlert('Logged out successfully!', 'success');
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(logIn.fulfilled, (state, action) => {
      const user: UserSliceType = {
        firstName: 'Dummy',
        lastName: 'User',
        loggedIn: true,
        token: {
          expires_in: action.payload.expires_in,
          token_type: action.payload.token_type,
          access_token: action.payload.access_token,
        },
      };
      storage.persistUser(user);
      showAlert('Logged in successfully!', 'success');
      return user;
    });
    // NOTE: Pending and rejected should be handled as well
  },
});

// SELECTORS
export const selectUser = (state: RootState) => state.user;

export const { logOut, setUser } = userSlice.actions;

export default userSlice.reducer;
