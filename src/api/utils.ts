type IResponseSuccess<T> = {
  success: true;
  data: T;
};

type IResponseError = {
  success: false;
  error: string[];
};

export type IResponse<T> = IResponseSuccess<T> | IResponseError;

export const getDataFromResponse = <T>(response: T): IResponse<T> => {
  return {
    success: true,
    data: response,
  };
};

export const getErrorsFromResponse = (ex: any): IResponseError => {
  if (ex.response.status >= 400 && ex.response.status < 500) {
    if (ex.response.data.errors) {
      const errorArrays: string[] = Object.values(ex.response.data.errors);
      return {
        success: false,
        error: errorArrays.flat(),
      };
    }
    if (ex.response.data.detail) {
      return {
        success: false,
        error: [ex.response.data.detail],
      };
    }
  }
  return {
    success: false,
    error: [ex.message],
  };
};
