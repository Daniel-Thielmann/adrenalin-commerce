import { apiFetch, apiFetchWithAuth } from "./client";
import type { Member } from "@/types/data";

export async function fetchMembers(page: number = 1, query: string = "") {
  return apiFetch<{ members: Member[]; totalPages: number; count: number }>("/members", {
    params: { page: String(page), ...(query ? { q: query } : {}) },
  });
}

export async function fetchAllMembersAdmin() {
  return apiFetchWithAuth<{ members: Member[]; count: number }>("/members");
}

export async function fetchMemberByIdAdmin(id: number) {
  return apiFetchWithAuth<Member>(`/members/${id}`);
}

export async function createMember(data: { name: string; email: string; role: string }) {
  return apiFetchWithAuth<Member>("/members", {
    method: "POST",
    body: JSON.stringify(data),
  });
}

export async function updateMember(id: number, data: { name?: string; email?: string; role?: string }) {
  return apiFetchWithAuth<Member>(`/members/${id}`, {
    method: "PUT",
    body: JSON.stringify(data),
  });
}

export async function deleteMember(id: number) {
  return apiFetchWithAuth<void>(`/members/${id}`, { method: "DELETE" });
}