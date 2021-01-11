import axiosClient from "./axiosClient";

const usersApi = {
  get: (params) => {
      console.log("paramsApi: ", params);
    const url = "/user";
    return axiosClient.get(url,{params});
  },
};
export default usersApi;

// const photoApi = {
//     getAll: (params) => {
//       const url = "/photos";
//       return axiosClient.get(url, { params });
//     },
//     get: (id) => {
//       const url = `/photos/${id}`;
//       return axiosClient.get(url);
//     },
//     post: (values) => {
//       const url = "/photos";
//       return axiosClient.post(url, values).then((response) => {
//         console.log(response);
//       });
//     },
//     delete: (id) => {
//       const url = `/photos/${id}`;
//       return axiosClient.delete(url);
//     },
//     put: (id, values) => {
//         const url = `photos/${id}`;
//         return axiosClient.put(url, values);
//     }
//   };
//   export default photoApi;
