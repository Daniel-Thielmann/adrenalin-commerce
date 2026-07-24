import { apiFetch } from "./client";

export async function login(email: string, password: string) {
  return apiFetch<{ token: string; user: { id: number; email: string; name: string; role: string } }>(
    "/auth/login",
    {
      method: "POST",
      body: JSON.stringify({ email, password }),
    }
  );
}

export async function getProfile(token: string) {
  return apiFetch<{ id: number; email: string; name: string; role: string }>("/auth/me", {
    headers: { Authorization: `Bearer ${token}` },
  });
}