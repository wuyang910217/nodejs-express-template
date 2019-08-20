import { Redis } from 'maodou-redis-util';

export async function saveKey(key, value, expired) {
  await Redis.setKey(key, value, expired);
}
