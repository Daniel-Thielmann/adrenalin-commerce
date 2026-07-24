"use server"

import prisma from "@/lib/db"
import { verifyPassword, createToken, setSession } from "@/lib/auth"
import { redirect } from "next/navigation"

export async function login(formData: FormData) {
  const email = formData.get("email") as string
  const password = formData.get("password") as string

  if (!email || !password) {
    return { error: "Email e senha são obrigatórios" }
  }

  const user = await prisma.user.findUnique({ where: { email } })
  if (!user) {
    return { error: "Email ou senha inválidos" }
  }

  const valid = await verifyPassword(password, user.password)
  if (!valid) {
    return { error: "Email ou senha inválidos" }
  }

  const token = await createToken({ id: user.id, email: user.email, role: user.role })
  await setSession(token)
  redirect("/admin")
}

export async function logout() {
  const { clearSession } = await import("@/lib/auth")
  await clearSession()
  redirect("/login")
}