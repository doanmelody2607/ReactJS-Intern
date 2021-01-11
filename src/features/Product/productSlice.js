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
<<<<<<< HEAD
    },
=======
    }
>>>>>>> 89da79cc1ebf8fbb25ac7082ada46068c1b4ab34
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
<<<<<<< HEAD
export const { loadCarList, removeCar } = actions;
=======
export const { loadCarList, removeCar, searchCar } = actions;
>>>>>>> 89da79cc1ebf8fbb25ac7082ada46068c1b4ab34
// export const { loadPhotoList, addPhoto, removePhoto, updatePhoto } = actions;
export default reducer;
