import { useState } from "react";

function useFetch() {
  const [loadingFetch, setLoadingFetch] = useState(false);

  const createAxiosRequest = (method) => async ({ axiosClient, params, data, url, headers }) => {
    const requestData = data || (params ? { params } : undefined);

    try {
      setLoadingFetch(true);
      const response = await axiosClient[method](url, requestData, headers);

      if (response.status === 200) {
        return response;
      } else {
        throw new Error(`Request failed with status: ${response.status}`);
      }
    } catch (error) {
      throw new Error(`Request failed: ${error.message}`);
    } finally {
      setLoadingFetch(false);
    }
  };

  const makeRequest = async (method, url, data, headers) => {
    const requestData = data || undefined;

    try {
      setLoadingFetch(true);
      const response = await axios[method](url, requestData, { headers });

      if (response.status === 200) {
        return response;
      } else {
        throw new Error(`Request failed with status: ${response.status}`);
      }
    } catch (error) {
      throw new Error(`Request failed: ${error.message}`);
    } finally {
      setLoadingFetch(false);
    }
  };


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
