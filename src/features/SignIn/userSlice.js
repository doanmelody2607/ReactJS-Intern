const { createSlice } = require("@reduxjs/toolkit");

const initialUser = localStorage.getItem('user') ?  localStorage.getItem('user') : [];
const getSignIn = localStorage.getItem('isCheck') ? true : false;

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
    User: (state, action) =>{
        state.initialUser = action.payload;
     
    }
  },
});

const { reducer, actions } = users;

export const { checkSignIn,User } = actions;
export default reducer;
