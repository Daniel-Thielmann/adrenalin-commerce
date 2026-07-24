import * as memberRepo from "../repositories/members";
import { AppError } from "../middlewares/errorHandler";

const ITEMS_PER_PAGE = 8;

export async function listAllMembers() {
  return memberRepo.findAll();
}

export async function getMemberById(id: number) {
  const member = await memberRepo.findById(id);
  if (!member) throw new AppError("Membro não encontrado", 404);
  return member;
}

export async function listAllMembersPaginated(page: number, query: string = "") {
  const offset = (page - 1) * ITEMS_PER_PAGE;
  const members = query
    ? await memberRepo.search(query, ITEMS_PER_PAGE, offset)
    : await memberRepo.findAllPaginated(ITEMS_PER_PAGE, offset);
  const count = query
    ? await memberRepo.countSearch(query)
    : await memberRepo.count();
  const totalPages = Math.ceil(count / ITEMS_PER_PAGE);
  return { members, count, totalPages };
}

export async function createMember(data: { name: string; role: string; email: string }) {
  const existing = await memberRepo.findByEmail(data.email);
  if (existing) throw new AppError("Membro com este email já existe");
  return memberRepo.create(data);
}

export async function updateMember(id: number, data: { name?: string; role?: string; email?: string }) {
  const existing = await memberRepo.findById(id);
  if (!existing) throw new AppError("Membro não encontrado", 404);

  if (data.email && data.email !== existing.email) {
    const emailTaken = await memberRepo.findByEmail(data.email);
    if (emailTaken) throw new AppError("Email já está em uso");
  }

  return memberRepo.update(id, data);
}

export async function deleteMember(id: number) {
  const existing = await memberRepo.findById(id);
  if (!existing) throw new AppError("Membro não encontrado", 404);
  return memberRepo.remove(id);
}