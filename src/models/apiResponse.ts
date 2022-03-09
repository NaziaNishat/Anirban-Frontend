export type APIResponseSchema<T> = {
  validationResult: {
    errors: [
      {
        errorCode: number;
        errorMessage: string;
        propertyName: string;
        resourceName: string;
      }
    ];
    isValid: boolean;
  };
  result?: T;
  events: null;
};
