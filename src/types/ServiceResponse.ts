type ServiceResponseErrorType = 'INVALID_DATA' | 'UNAUTHORIZED' | 'NOT_FOUND' | 'IS_REQUIRED';

export type ServiceResponseError = {
  status: ServiceResponseErrorType, 
  data: { message: string }
};

export type ServiceResponseSuccess<T> = {
  status: 'SUCCESSFUL' | 'CREATED', 
  data: T
};

export type ServiceResponse<T> = ServiceResponseError | ServiceResponseSuccess<T>;