import axios from "axios";

const API_URL = "http://localhost:3000/api"; // Make sure the port matches your backend server

const register = (userData) => {
  return axios.post(`${API_URL}/users/register`, userData);
};

const login = (userData) => {
  return axios.post(`${API_URL}/users/login`, userData);
};

const submitData = (data, token) => {
  return axios.post(`${API_URL}/data`, data, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

const getData = (token) => {
  return axios.get(`${API_URL}/data`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

const getUsers = (token) => {
  return axios.get(`${API_URL}/users`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

const createPost = (post, token) => {
  return axios.post(`${API_URL}/posts`, post, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
    },
  });
};

const getPosts = () => {
  return axios.get(`${API_URL}/posts`);
};

// Add this function to handle contact form submission
const submitContactForm = (formData) => {
  return axios.post(`${API_URL}/contact`, formData);
};

export {
  register,
  login,
  submitData,
  getData,
  getUsers,
  createPost,
  getPosts,
  submitContactForm,
};
