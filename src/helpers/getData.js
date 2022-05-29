export const getData = (url, method, headers = {}) => {
  return fetch(url, {
    method,
    headers
  });
};
