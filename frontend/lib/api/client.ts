const PUBLIC_API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3333/api";
const SERVER_API_URL = process.env.API_URL || "http://backend:3333/api";

export interface FetchOptions extends RequestInit {
  params?: Record<string, string | number | undefined>;
  timeoutMs?: number;
  next?: {
    revalidate?: number | false;
    tags?: string[];
  };
}

const DEFAULT_TIMEOUT_MS = 8_000;

function getApiUrl(): string {
  if (typeof window !== "undefined") return PUBLIC_API_URL;
  return SERVER_API_URL;
}

function buildUrl(path: string, params?: Record<string, string | number | undefined>): string {
  const url = new URL(`${getApiUrl()}${path}`);
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined) url.searchParams.set(key, String(value));
    });
  }
  return url.toString();
}

export async function apiFetch<T>(path: string, options: FetchOptions = {}): Promise<T> {
  const { params, timeoutMs = DEFAULT_TIMEOUT_MS, ...fetchOpts } = options;
  const url = buildUrl(path, params);

  const headers: Record<string, string> = {
    "Content-Type": "application/json",
    ...(fetchOpts.headers as Record<string, string>),
  };

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), timeoutMs);

  if (fetchOpts.signal) {
    if (fetchOpts.signal.aborted) {
      controller.abort();
    } else {
      fetchOpts.signal.addEventListener("abort", () => controller.abort(), { once: true });
    }
  }

  let res: Response;
  try {
    const cache = fetchOpts.cache ?? (fetchOpts.next ? undefined : "no-store");
    res = await fetch(url, {
      ...fetchOpts,
      headers,
      signal: controller.signal,
      ...(cache ? { cache } : {}),
    });
  } finally {
    clearTimeout(timeout);
  }

  if (!res.ok) {
    const body = await res.json().catch(() => ({}));
    throw new Error(body.error || `Erro ${res.status}`);
  }

  if (res.status === 204) return undefined as T;
  return res.json();
}

export async function apiFetchWithAuth<T>(path: string, options: FetchOptions = {}): Promise<T> {
  const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;
  return apiFetch<T>(path, {
    ...options,
    headers: {
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...(options.headers || {}),
    },
  });
}
