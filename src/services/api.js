import { axiosInstance as axios } from "./axiosInstance";

const ALL_PRODUCTS = () => `/product/all`;

const FAVORITE_PRODUCTS = () => `/favorite/all`;

const AUTHENTICATE = () => `/authenticate`

const REGISTER_CUSTOMER = () => `/customer/create`

const ADD_ORDER_PRODUCT = () => '/orderProduct/create'

const REMOVE_ORDER_PRODUCT = (productId) => `/orderProduct/${productId}/delete`

const GET_FULL_CUSTOMER_PROFILE = (username) => `/customer/profile/${username}`

const GET_OPEN_ORDER = (customerId) => `/order/${customerId}/open`

const CHECKOUT_ORDER = (orderId) => `/order/${orderId}/update`





export const getAllProducts = async () => {
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
  return axios.post(ADD_ORDER_PRODUCT(), bodyParam, 
  {params: {
    "Authorization": `Bearer ${jwt}`
  }})
}
export const removeProductFromCart = (productId,jwt) => {
  return axios.delete(REMOVE_ORDER_PRODUCT(productId), 
  {params: {
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

export const getOpenOrder = (customerId, jwt) => {
  return axios.get(GET_OPEN_ORDER(customerId), {
    params: {
      "Authorization": `Bearer ${jwt}`
    }
  });
}

export const checkOutOrder = (orderId,bodyParam, jwt) => {
  return axios.put(CHECKOUT_ORDER(orderId), bodyParam, {params: {
    "Authorization": `Bearer ${jwt}`
  }})
}

