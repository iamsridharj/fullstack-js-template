import axios, { AxiosRequestConfig, AxiosInstance } from 'axios';

const baseURL = "http://localhost:8000";

const axiosWrapper: AxiosInstance = axios.create({
    baseURL: baseURL,
    headers: {
        'Content-Type': 'application/json',
    },
});

interface BackendResponse<T> {
  status: string;
  data: T;
}

const get = async <T>(url: string, params: Record<string, any> = {}, config: AxiosRequestConfig = {}): Promise<BackendResponse<T>> => {
  try {
    const response = await axiosWrapper.get<BackendResponse<T>>(url, { params, ...config });
    return response.data;
  } catch (error) {
    throw error;
  }
};

const post = async <T>(url: string, data: any = {}, config: AxiosRequestConfig = {}): Promise<BackendResponse<T>> => {
  try {
    const response = await axiosWrapper.post<BackendResponse<T>>(url, data, { ...config });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export { axiosWrapper, get, post };
