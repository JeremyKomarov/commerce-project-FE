import { axiosInstance as axios } from "./axiosInstance";

const ALL_PRODUCTS = () => `/product/all`;

const AUTHENTICATE = () => `/authenticate`

const REGISTER_CUSTOMER = () => `/customer/create`

const ADD_ORDER_PRODUCT = () => '/orderProduct/create'

export const getAllProducts = () => {
  return axios.get(ALL_PRODUCTS());
}

export const authenticate = (params) => {
  return axios.post(AUTHENTICATE(), params);
}

export const register = (params) => {
  return axios.post(REGISTER_CUSTOMER(), params)
}

export const addProductToCart = (params) => {
  return axios.post(ADD_ORDER_PRODUCT(), params)
}
