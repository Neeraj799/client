import axiosInstance from "./axiosInstance";
import { Post } from "../types/post";

export const fetchPostsAPI = async (): Promise<Post[]> => {
  const response = await axiosInstance.get<Post[]>("/posts");
  return response.data;
};
