import { API } from "../base";

const ConnectTokenApi = API.injectEndpoints({
  endpoints: (build) => ({
    connectToken: build.query({
      query: () => `connect/token`,
    }),
  })
});