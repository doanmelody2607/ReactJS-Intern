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
    addCar: (state, action) => {
      state.push(action.payload);
    },
    removeCar: (state, action) => {
      const removeCarId = action.payload;
      return state.filter((car) => car.id != removeCarId);
    },
    updateCars: (state, action) => {
      const newCar = action.payload;
      
      const carIndex = state.findIndex((car) =>{
        return  car.id === newCar.id;
      });
      if (carIndex >= 0) {
        state[carIndex] = newCar;
      }
    },
  },
});

const { reducer, actions } = products;
export const { loadCarList, removeCar,updateCars, addCar } = actions;
// export const { loadPhotoList, addPhoto, removePhoto, updatePhoto } = actions;
export default reducer;
