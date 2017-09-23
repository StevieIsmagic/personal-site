import axios from 'axios';

export const GET_POSTS = "GET_POSTS";
export const NEW_POST = "NEW_POST";
export const UPDATE_POST = "UPDATE_POST";
export const DELETE_POST = "DELETE_POST";

export const getPosts = () => {
  const promise = axios.get('http://localhost:8080/');
  return {
		type: GET_POSTS,
		payload: promise  
	};
};
