import { SocialNetworks } from "../dto/social-networks-response";

export interface Config {
  id: string;
  title: string;
  socialNetworks: SocialNetworks[];
}
