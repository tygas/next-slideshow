import axios from "axios";
import { ICat } from "@/app/interfaces/cats.interface";

const CATS_PAGE_LIMIT = 20;
const theCatApiUrl = (limit = CATS_PAGE_LIMIT) => `https://api.thecatapi.com/v1/images/search?limit=${limit}`;
const api_key = "live_4K1hXmyRhwpZ77jrRCmAmojQsUbtHYQI5Tpd6fWUB1DW8i8PLNsqwQFKXyt4SQ3G";

// Simple in-memory cache for cat data
const catDataCache = new Map<string, ICat[]>();

export const fetchCatsApi = async (): Promise<ICat[]> => {
  const url = theCatApiUrl();

  // Check if data is already cached
  if (catDataCache.has(url)) {
    return catDataCache.get(url)!;
  }

  try {
    const response = await axios.get<ICat[]>(url, {
      headers: {
        "x-api-key": api_key,
      },
    });

    // Cache the cat data
    const catData = response.data;
    catDataCache.set(url, catData);

    return catData;
  } catch (error) {
    throw new Error("Failed to fetch data from " + url);
  }
};
