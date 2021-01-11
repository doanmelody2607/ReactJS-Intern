import { createSlice } from "@reduxjs/toolkit";

// JSON.parse(localStorage.getItem('list_photos'))
// const listPhoto = [JSON.parse(localStorage.getItem("list_photos"))];
const initialProducts = [];

const products = createSlice({
  name: "products",
  initialState: initialProducts,
  reducers: {
    loadCarList: (state, action) => {
      state = action.payload;
      return state;
    },
    // addPhoto: (state, action) => {
    //   state.push(action.payload);
    // },
    removeCar: (state, action) => {
      const removeCarId = action.payload;
      return state.filter((car) => car.id != removeCarId);

    },
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

export const { loadCarList, removeCar, searchCar } = actions;

// export const { loadPhotoList, addPhoto, removePhoto, updatePhoto } = actions;
export default reducer;
