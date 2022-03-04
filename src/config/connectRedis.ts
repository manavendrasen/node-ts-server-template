import redis from "redis";
import { createClient } from "redis";

const client = createClient();

export const connectRedis = async () => {
  client.on("error", (err) => console.log("Redis Client Error", err));
  client.on("ready", () => console.log("Redis Client Connected"));
  client.on("end", () => {
    console.log("Redis Client Disconnected");
  });

  await client.connect();
  return client;
};

export async function clientClose() {
  client.quit();
}
