import { axiosInstance as axios } from "./axiosInstance";

const ALL_PRODUCTS = () => `/product/all`;

const FAVORITE_PRODUCTS = () => `/favorite/all`;

const AUTHENTICATE = () => `/authenticate`

const REGISTER_CUSTOMER = () => `/customer/create`

const ADD_ORDER_PRODUCT = () => '/orderProduct/create'

const GET_FULL_CUSTOMER_PROFILE = (username) => `/customer/profile/${username}`

const CHECKOUT_ORDER = () => `/order/create`



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

export const addProductToCart = (bodyParam, jwt) => {
  return axios.post(ADD_ORDER_PRODUCT(), bodyParam , {params: {
    "Authorization": `Bearer ${jwt}`
  }})
}

export const getFullCustomerProfile = (username, jwt) => {
  return axios.get(GET_FULL_CUSTOMER_PROFILE(username), {
    params: {
      "Authorization": `Bearer ${jwt}`
    }
  });
}

export const checkOutOrder = (bodyParam, jwt) => {
  return axios.post(CHECKOUT_ORDER(), bodyParam , {params: {
    "Authorization": `Bearer ${jwt}`
  }})
}

