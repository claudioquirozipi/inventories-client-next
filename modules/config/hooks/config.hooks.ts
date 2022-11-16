import { useQuery } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { SocialNetworks } from "../dto/social-networks-response";
import { Config } from "../entities/config.entities";
import { apiConfig } from "../service/config.service";

const useConfig = () => {
  const {
    data: socialNetworks,
    isLoading,
    error,
  } = useQuery<AxiosResponse<SocialNetworks[]>>(apiConfig.getSocialNetworks);

  let config: Config = {
    id: "",
    title: "",
    socialNetworks: socialNetworks?.data || [],
  };
  return {
    config,
    isLoadingConfig: isLoading,
    errorConfig: error,
  };
};

export default useConfig;
