import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: `http://localhost:1337/`,
  timeout: 3000
});


const setAuthHeader = (req) => {
  const token = req ? getCookieFromReq(req, 'jwt') : Cookies.getJSON('jwt');
  if (token) {
    return { headers: {'authorization': `Bearer ${token}`}};
  }

  return undefined;
}

const rejectPromise = (resError) => {
  let error = {};

  if (resError && resError.response && resError.response.data) {
    error = resError.response.data;
  } else {
    error = resError;
  }

  return Promise.reject(error);
}


export const getSecretData = async (req) => {
  const url = '/secret';

  return await axiosInstance.get(url, setAuthHeader(req)).then(response => response.data);
}


// ------------ BLOG ACTIONS --------------

export const getPosts = async (page) => {
  return await axiosInstance.get(`/posts?_start=${page*5}&_limit=5`).then(response => response.data);
}

export const getBlogBySlug = async (slug) => {
  return await axiosInstance.get(`/posts?slug=${slug}`).then(response => response.data[0]);
}
export const coutPosts = async () => {
  return await axiosInstance.get(`/posts/count`).then(response => response.data);
}

export const creatContact = async (contactData) => {
  return await axiosInstance.post('/contacts', contactData)
    .then(response => response)
    .catch(error => rejectPromise(error))
}












