import axios from "axios";
import { useState } from "react";

function useFetch() {
  const [loadingFetch, setLoadingFetch] = useState(false);

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

  const putRequest = (axiosClient) => createAxiosRequest('put', axiosClient);
  const getRequest = (axiosClient) => createAxiosRequest('get', axiosClient);
  const deleteRequest = (axiosClient) => createAxiosRequest('delete', axiosClient);
  const postRequest = (axiosClient) => createAxiosRequest('post', axiosClient);

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
