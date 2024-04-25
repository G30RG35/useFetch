import { useState } from "react";
import { useAxiosConfig } from "../helpers";

function useFetch() {
  const { axiosAuth, axios } = useAxiosConfig();
  const [loadingFetch, setLoadingFetch] = useState(false);

  async function makeRequest({
    method,
    isAuth = true,
    params,
    data,
    url,
    headers,
  }) {
    const axiosClient = isAuth ? axiosAuth : axios;

    const datos = data ? data : params ? { params } : undefined;

    debugger;
    try {
      setLoadingFetch(true);
      console.log({ params });
      const resp = await axiosClient[method](url, datos, headers);
      // const resp = await axiosClient[method](url, data, params, headers);

      if (resp.status === 200) {
        return resp;
      }
    } catch (error) {
      console.log(error);
      switch (error?.response?.status) {
        case 400:
          console.log(
            "El servidor no pudo procesar la solicitud. Verifique los datos enviados."
          );
          break;
        case 415:
          console.log(
            "Formato de datos no válido. Asegúrese de enviar datos en el formato JSON correcto."
          );
          break;
        case 500:
          console.log(
            "Error interno del servidor. Inténtalo más tarde o contacta a soporte."
          );
          break;
        default:
          console.log(
            "Error desconocido. Contacta a soporte para obtener ayuda."
          );
          break;
      }
    } finally {
      setLoadingFetch(false);
    }
  }

  return { makeRequest, loadingFetch };
}
export default useFetch;
