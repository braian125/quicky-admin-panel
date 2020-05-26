import request from "./../utils/request";

export const getProducts = (params: any) =>
  request({
    url: "/api/v1/products",
    method: "get",
    params,
  });

export const createProduct = (data: any) =>
  request({
    url: "/api/v1/products",
    method: "post",
    data,
  });

export const getProduct = (id: string, params: any) =>
  request({
    url: `/api/v1/products/${id}`,
    method: "get",
    params,
  });

export const updateProduct = (id: number, data: any) =>
  request({
    url: `/api/v1/products/${id}`,
    method: "put",
    data,
  });
