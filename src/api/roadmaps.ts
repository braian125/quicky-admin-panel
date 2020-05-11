import request from "./../utils/request";

export const createRoadmap = (data: any) =>
  request({
    url: "/api/v1/roadmaps",
    method: "post",
    data,
  });
