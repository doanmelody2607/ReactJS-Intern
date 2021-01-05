import { createSlice } from "@reduxjs/toolkit";

// JSON.parse(localStorage.getItem('list_photos'))
// const listPhoto = [JSON.parse(localStorage.getItem("list_photos"))];
const initialProducts = [];

const products = createSlice({
  name: "products",
  initialState: {
    initialProducts,
  },

  reducers: {
    
    // loadPhotoList: (state, action) => {
    //   state = action.payload;
    //   return state;
    // },
    // addPhoto: (state, action) => {
    //   state.push(action.payload);
    // },
    // removePhoto: (state, action) => {
    //   const removePhotoId = action.payload;
    //   return state.filter((photo) => photo.id != removePhotoId);
    // },
    // updatePhoto: (state, action) => {
    //   const newPhoto = action.payload;
    //   const photoIndex = state.findIndex((photo) => photo.id === newPhoto.id);
    //   if (photoIndex >= 0) {
    //     state[photoIndex] = newPhoto;
    //   }
    // },
  },
});

const { reducer, actions } = products;


export default reducer;
