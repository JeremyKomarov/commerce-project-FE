import { axiosInstance as axios } from "./axiosInstance";

const ALL_PRODUCTS = () => `/product/all`;

const AUTHENTICATE = () => `/authenticate`

const REGISTER_CUSTOMER = () => `/customer/create`

export const getAllProducts = () => {
  return axios.get(ALL_PRODUCTS());
}

export const authenticate = (params) => {
  return axios.post(AUTHENTICATE(), params);
}

export const register = (params) => {
  return axios.post(REGISTER_CUSTOMER(), params)
}


asdsad