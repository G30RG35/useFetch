import { useState } from "react";

function useFetch() {
  const [loadingFetch, setLoadingFetch] = useState(false);

  const createAxiosRequest = (method) => async ({ axiosClient, params, data, url, headers }) => {
    const requestData = data || (params ? { params } : undefined);

    try {
      setLoadingFetch(true);
      const response = await axiosClient[method](url, requestData, headers);

      if (response.status === 200) {
        return response.data;
      } else {
        throw new Error(`Request failed with status: ${response.status}`);
      }
    } catch (error) {
      throw new Error(`Request failed: ${error.message}`);
    } finally {
      setLoadingFetch(false);
    }
  };

  const makeRequest = createAxiosRequest('get');
  const putRequest = createAxiosRequest('put');
  const getRequest = createAxiosRequest('get');
  const deleteRequest = createAxiosRequest('delete');
  const postRequest = createAxiosRequest('post');

  return {
    makeRequest,
    putRequest,
    getRequest,
    deleteRequest,
    postRequest,
    loadingFetch,
  };
}

export default useFetch;
