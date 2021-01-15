import axiosClient from "./axiosClient";

const productsApi = {
  getAll: (params) => {
    const url = "/listcars";
    return axiosClient.get(url,{params} );
  },
  get: (id) => {
    const url = `/listcars/${id}`;
    return axiosClient.get(url);
  },
  post: (values) => {
    const url = "/listcars";
    return axiosClient.post(url, values);
  },
  delete: (id) => {
    const url = `/listcars/${id}`;
    return axiosClient.delete(url);
  },
  put: (id, values) => {
    const url = `listcars/${id}`;
    return axiosClient.put(url, values);
  },
};
export default productsApi;
