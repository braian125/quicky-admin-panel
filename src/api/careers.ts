import request from "./../utils/request";

export const getCareers = (params: any) =>
  request({
    url: "/api/v1/careers",
    method: "get",
    params,
  });

export const createCareer = (data: any) =>
  request({
    url: "/api/v1/careers",
    method: "post",
    data,
  });

export const getCareer = (id: number, params: any) =>
  request({
    url: `/api/v1/careers/${id}`,
    method: "get",
    params,
  });

export const updateCareer = (id: number, data: any) =>
  request({
    url: `/api/v1/careers/${id}`,
    method: "put",
    data,
  });
