import { axios } from "../axios";

export interface TranslatedField {
  ar: string;
  en: string;
}

export interface TripImage {
  id: number;
  url: string;
  responsive_urls: string[];
}

export interface Place {
  id: number;
  name: TranslatedField;
  is_active: boolean;
  images: TripImage[];
  num_trips?: number;
  created_at: string;
  updated_at: string;
}

export const getPlaces = async (): Promise<Place[]> => {
  const { data } = await axios.get<Place[]>("/places");
  return data;
};
