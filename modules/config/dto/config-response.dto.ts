import { SocialNetworks } from "./social-networks-response";

export interface ConfigResponse {
  id: string;
  title: string;
  socialNetworks: SocialNetworks[];
}
