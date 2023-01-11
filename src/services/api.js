import { axiosInstance as axios } from "./axiosInstance";

const ALL_PRODUCTS = () => `/product/all`;

const FAVORITE_PRODUCTS = () => `/favorite/all`;

const AUTHENTICATE = () => `/authenticate`

const REGISTER_CUSTOMER = () => `/customer/create`

const ADD_ORDER_PRODUCT = () => '/orderProduct/create'

const GET_CUSTOMER = () => '/customer/username/'

export const getAllProducts = () => {
  return axios.get(ALL_PRODUCTS());
}

export const getFavoriteProducts = () => {
  return axios.get(FAVORITE_PRODUCTS());
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
export const getCustomerByUsername = (username, params ) => {
  return axios.get(GET_CUSTOMER()+username,{params})
}
