import axios from "axios";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export const apiConfig = {
  getConfig: {
    queryKey: ["config"],
    queryFn: () => axios.get(`${baseUrl}/config`),
  },
  getSocialNetworks: {
    queryKey: ["social-networks"],
    queryFn: () => axios.get(`${baseUrl}/social-networks`),
  },
};
