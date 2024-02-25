import axios, { AxiosResponse } from "axios";
import { ICatsResponse } from "@/app/Cats/cats.interface";

const CATS_PAGE_LIMIT = 20;
const theCatApiUrl = (limit = CATS_PAGE_LIMIT) => `https://api.thecatapi.com/v1/images/search?limit=${limit}`;
const api_key = "live_4K1hXmyRhwpZ77jrRCmAmojQsUbtHYQI5Tpd6fWUB1DW8i8PLNsqwQFKXyt4SQ3G";

// Simple in-memory cache
const cache = new Map<string, Promise<Response>>();

export const fetchCatsApi = async () => {
  const url = theCatApiUrl();
  const cachedResponse = cache.get(url);

  if (cachedResponse) {
    return cachedResponse;
  }

  try {
    const response: ICatsResponse = await axios.get(url, {
      headers: {
        "x-api-key": api_key,
      },
      responseType: "json",
    });

    // Cache the new response
    cache.set(url, response);

    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch data"); // Handle error appropriately
  }
};
