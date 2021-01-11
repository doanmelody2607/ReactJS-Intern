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
        console.log("new Cả1",newCar.id )
        console.log("new Cả",car.id )
        return  car.id === +newCar.id;
      });
      console.log("cvcss",carIndex);
      if (carIndex >= 0) {
        state[carIndex] = newCar;
        console.log("cvcss");
      }
    },
  },
});

const { reducer, actions } = products;
export const { loadCarList, removeCar,updateCars, addCar } = actions;
// export const { loadPhotoList, addPhoto, removePhoto, updatePhoto } = actions;
export default reducer;
