import { UseToastOptions } from "@chakra-ui/react";
import { APIResponseSchema } from "../models/apiResponse";

export const errorToast = (result?: APIResponseSchema<any>) => {
  const toastOption: UseToastOptions = {
    title: result?.validationResult.errors.length
      ? result?.validationResult.errors[0].errorMessage
      : "Something went wrong",
    status: "error",
    duration: 5000,
    isClosable: true,
  };
  return toastOption;
};
