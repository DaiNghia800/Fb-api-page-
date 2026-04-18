const axios = require("axios");

const BASE_URL = "https://graph.facebook.com/v19.0";
const TOKEN = process.env.PAGE_ACCESS_TOKEN;

exports.getPageInfo = async (pageId) => {
  const res = await axios.get(`${BASE_URL}/${pageId}`, {
    params: { access_token: TOKEN }
  });
  return res.data;
};

exports.getPosts = async (pageId) => {
  const res = await axios.get(`${BASE_URL}/${pageId}/posts`, {
    params: { access_token: TOKEN }
  });
  return res.data;
};

exports.createPost = async (pageId, message) => {
  const res = await axios.post(`${BASE_URL}/${pageId}/feed`, null, {
    params: {
      message,
      access_token: TOKEN
    }
  });
  return res.data;
};

exports.deletePost = async (postId) => {
  const res = await axios.delete(`${BASE_URL}/${postId}`, {
    params: { access_token: TOKEN }
  });
  return res.data;
};

exports.getComments = async (postId) => {
  const res = await axios.get(`${BASE_URL}/${postId}/comments`, {
    params: { access_token: TOKEN }
  });
  return res.data;
};

exports.getLikes = async (postId) => {
  const res = await axios.get(`${BASE_URL}/${postId}/likes`, {
    params: { access_token: TOKEN }
  });
  return res.data;
};

exports.getInsights = async (pageId) => {
  const res = await axios.get(`${BASE_URL}/${pageId}/insights`, {
    params: { access_token: TOKEN }
  });
  return res.data;
};
