import { axios } from "../axios";

export interface TranslatedField {
  ar: string;
  en: string;
}

export interface Place {
  id: number;
  name: TranslatedField;
}

export interface Testimonial {
  id: number;
  name: TranslatedField;
  place_id: number;
  place: Place;
  stars: number;
  content: TranslatedField;
  created_at: string;
  updated_at: string;
}

export const getTestimonials = async (): Promise<Testimonial[]> => {
  try {
    const response = await axios.get<Testimonial[]>("/testimonials");
    return response.data;
  } catch (error) {
    console.error("Failed to fetch testimonials:", error);
    throw error;
  }
};
