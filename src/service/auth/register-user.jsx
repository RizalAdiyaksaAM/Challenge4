import { useMutation } from "@tanstack/react-query";
import { API_ENDPOINT } from "../../utils/api-endpoints";
import http2 from "../../utils/http2";
import http3 from "../../utils/http3";


const RegisterUser = async (input) => {

  return await http3.post(API_ENDPOINT.REGISTER_USER, input );
   
};

const useCreateUser = () => {
  return useMutation(RegisterUser);
};
export { RegisterUser, useCreateUser };
