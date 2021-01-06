import { configureStore } from '@reduxjs/toolkit';
import productReducer from 'features/Product/productSlice'
import userReducer from 'features/SignIn/userSlice'
const rootReducer = {
  products: productReducer,
  user: userReducer
}
export default configureStore({
  reducer: rootReducer,
});
