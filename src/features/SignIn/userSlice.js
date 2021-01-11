const { createSlice } = require("@reduxjs/toolkit");

const initialUser = localStorage.getItem("user")
  ? localStorage.getItem("user")
  : [];
const getSignIn = localStorage.getItem("isCheck") ? true : false;

const users = createSlice({
  name: "user",
  initialState: {
    isCheckSignIn: getSignIn,
    initialUser,
  },
  reducers: {
    checkSignIn: (state, action) => {
      state.isCheckSignIn = action.payload;
    },
    User: (state, action) => {
      state.initialUser = action.payload;
    },
    loadUserList: (state, action) => {
      state = action.payload;
      return state;
    },
    removeUser: (state, action) => {
      const removeUserId = action.payload;
      return state.filter((user) => user.id != removeUserId);
    }
  },
});

const { reducer, actions } = users;

export const { checkSignIn, User, loadUserList, removeUser } = actions;
export default reducer;
