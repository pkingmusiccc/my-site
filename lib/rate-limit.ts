import { LRUCache } from "lru-cache";

/**
 * Tiny in-memory rate limiter. Keyed by IP. Suitable for a single-instance
 * deployment or behind a single edge region; for multi-region / serverless
 * production, swap in Upstash Redis or an equivalent.
 *
 * Limit: default 5 submissions per 10 minutes per key.
 */
const buckets = new LRUCache<string, number[]>({
  max: 5000,
  ttl: 1000 * 60 * 15,
});

export type RateLimitResult =
  | { ok: true; remaining: number }
  | { ok: false; retryAfterMs: number };

export function rateLimit(
  key: string,
  { max = 5, windowMs = 10 * 60 * 1000 }: { max?: number; windowMs?: number } = {},
): RateLimitResult {
  const now = Date.now();
  const windowStart = now - windowMs;
  const hits = (buckets.get(key) ?? []).filter((t) => t > windowStart);

  if (hits.length >= max) {
    const oldest = hits[0] ?? now;
    return { ok: false, retryAfterMs: Math.max(0, oldest + windowMs - now) };
  }

  hits.push(now);
  buckets.set(key, hits);
  return { ok: true, remaining: max - hits.length };
}
