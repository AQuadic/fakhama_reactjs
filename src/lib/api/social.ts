import { axios } from "../axios";

export interface SocialLinks {
  facebook_link: string;
  whatsapp: string;
  instagram_link: string;
}

export const getSocialLinks = async (): Promise<SocialLinks> => {
  try {
    const response = await axios.get<SocialLinks>("/social");
    return response.data;
  } catch (error) {
    console.error("Failed to fetch social links:", error);
    throw error;
  }
};
