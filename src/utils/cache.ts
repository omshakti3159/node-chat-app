import { redisClient } from "../config/db";

export const cacheResource = (key: string, data: any) => {
  const serializedData = JSON.stringify(data);
  redisClient.set(key, serializedData);
};

export const getCachedResource = async (key: string) => {
  const cachedData = await redisClient.get(key);
  return cachedData ? JSON.parse(cachedData) : null;
};
