import axios from "axios";

export const http = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
  baseURL: process.env.REACT_APP_API,
});

/**
 *
 * @returns - Cancel token source
 */
export const getCancelToken = () => axios.CancelToken.source();

/**
 *
 * @param error
 * @returns - A boolean value
 */
export const isCancelError = (error: unknown) => axios.isCancel(error);
