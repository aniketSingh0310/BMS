import { axiosInstance } from "./axios";


export const AddTheatre = async (payload) => {
  try {
    const response = await axiosInstance.post(
      "/users/theatres/add-theatre",
      payload
    );
    return response.data;
  } catch (error) {
    return error.response;
  }
};

// get all theatres by owner
export const GetAllTheatresByOwner = async (payload) => {
  try {
    const response = await axiosInstance.post(
      "/users/theatres/get-all-theatres-by-owner",
      payload
    );
    return response.data;
  } catch (error) {
    return error.response;
  }
};

export const UpdateTheatre = async (payload) => {
  try {
    const response = await axiosInstance.post(
      "/users/theatres/update-theatre",
      payload
    );
    return response.data;
  } catch (error) {
    return error.response;
  }
};

export const DeleteTheatre = async (payload) => {
  try {
    const response = await axiosInstance.post(
      "/users/theatres/delete-theatre",
      payload
    );
    return response.data;
  } catch (error) {
    return error.response;
  }
};

//get all theatres
export const GetAllTheatres = async () => {
  try {
    const response = await axiosInstance.get(
      "/users/theatres/get-all-theatres"
    );
    return response.data;
  } catch (error) {
    return error.response;
  }
};

export const AddShow = async (payload) => {
  try {
    const response = await axiosInstance.post(
      "/users/theatres/add-shows",
      payload
    );
    return response.data;
  } catch (error) {
    return error.response;
  }
};

export const GetAllShowsByTheatre = async (payload) => {
  try {
    const response = await axiosInstance.post(
      "/users/theatres/get-all-shows-by-theatre",
      payload
    );
    return response.data;
  } catch (error) {
    return error.response;
  }
};

export const DeleteShow = async (payload) => {
  try {
    const response = await axiosInstance.post(
      "/users/theatres/delete-show",
      payload
    );
    return response.data;
  } catch (error) {
    return error.response;
  }
};

export const GetAllTheatresByMovie = async (payload) => {
  try {
    const response = await axiosInstance.post(
      "/users/theatres/getAllTheatresByMovie",
      payload
    );
    return response.data;
  } catch (error) {
    return error.response;
  }
};

export const GetShowById = async (payload) => {
  try {
    const response = await axiosInstance.post(
      "/users/theatres/getShowById",
      payload
    );
    return response.data;
  } catch (error) {
    return error.response;
  }
};