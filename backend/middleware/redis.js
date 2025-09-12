import client from "./redisClient.js";

export const setDataInRedis = (ttl) => {
  return async (req, res, next) => {
    const cacheKey = req.originalUrl;
    console.log("Cache Key:", cacheKey);

    const cachedData = await client.get(cacheKey);
    
    if (cachedData) {
      console.log("Served from cache");
      return res.json(JSON.parse(cachedData));
    }

    // Overwrite res.json to save response in Redis
    const originalJson = res.json.bind(res);
    res.json = (body) => {
      client.setEx(cacheKey, ttl, JSON.stringify(body)); // save with TTL
      return originalJson(body);
    };

    next();
  };
};
