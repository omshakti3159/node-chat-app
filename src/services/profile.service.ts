import { SortOrder } from "mongoose";
import { ProfileModel } from "../models/profile.model";
import { getCachedResource, cacheResource } from "../utils/cache";

export const getProfiles = async (
  page: number = 1,
  limit: number = 10,
  sort: SortOrder = "asc"
) => {
  const cacheKey = `resources_${page}_${limit}_${sort}`;
  const cachedData = await getCachedResource(cacheKey);
  if (cachedData && cachedData.length) {
    console.log("Data retrieved from cache");
    return cachedData;
  }

  const resources = await ProfileModel.find()
    .sort({ name: sort })
    .skip((page - 1) * limit)
    .limit(limit);
  cacheResource(cacheKey, resources);
  return resources;
};
