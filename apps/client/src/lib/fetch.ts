import axios, {
  type Method,
  type AxiosRequestConfig,
  type AxiosResponse,
} from "axios";

const makeRequest = async <T>(config: AxiosRequestConfig): Promise<T> => {
  try {
    const response: AxiosResponse<T> = await axios({
      headers: { "Content-Type": "application/json" },
      ...config,
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export async function fetcherStatus<T, U = never>(
  url: string,
  method: Method,
  data: T,
  params?: U,
  config?: AxiosRequestConfig
): Promise<number> {
  try {
    const requestConfig = {
      method: method,
      data: { ...data },
      params,
      paramsSerializer: { indexes: null },
      url,
      ...config,
    };
    const response: AxiosResponse = await axios({
      headers: { "Content-Type": "application/json" },
      ...requestConfig,
    });
    return response.status;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function getFetcher<T, U = never>(
  url: string,
  params?: U,
  config?: AxiosRequestConfig
): Promise<T> {
  return await makeRequest<T>({
    ...{
      method: "GET",
      params,
      paramsSerializer: { indexes: null },
      url,
      ...config,
    },
  });
}

export async function postFetcher<T, U>(
  url: string,
  data: U,
  config?: AxiosRequestConfig
): Promise<T> {
  return await makeRequest<T>({ ...{ method: "POST", data, url, ...config } });
}

export async function putFetcher<T, U = never>(
  url: string,
  data?: U,
  config?: AxiosRequestConfig
): Promise<T> {
  return await makeRequest<T>({ ...{ method: "PUT", data, url, ...config } });
}

export async function deleteFetcher<T>(
  url: string,
  config?: AxiosRequestConfig
): Promise<T> {
  return await makeRequest<T>({ method: "DELETE", url, ...config });
}
