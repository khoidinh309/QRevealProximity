import { API } from "../base";

const userApi = API.injectEndpoints({
  endpoints: (build) => ({
    getUser: build.query({
      query: (id) => `users/${id}`,
    }),
  }),
  overrideExisting: true,
});