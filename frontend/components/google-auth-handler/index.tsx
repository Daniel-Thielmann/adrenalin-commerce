"use client"

import { Suspense, useEffect, useRef } from "react"
import { useRouter, useSearchParams } from "next/navigation"

function Handler() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const processed = useRef(false)

  useEffect(() => {
    if (processed.current) return
    const token = searchParams.get("token")
    if (!token) return

    processed.current = true

    localStorage.setItem("token", token)
    document.cookie = `session=${token}; path=/; max-age=${60 * 60 * 24 * 7}`

    fetch(
      `${process.env.NEXT_PUBLIC_API_URL || "http://localhost:3333/api"}/auth/me`,
      { headers: { Authorization: `Bearer ${token}` } }
    )
      .then((res) => (res.ok ? res.json() : null))
      .then((user) => {
        const url = new URL(window.location.href)
        url.searchParams.delete("token")
        window.history.replaceState({}, "", url.toString())

        if (user?.role === "admin" && user?.email === "admin@adrenalin.com") {
          router.push("/admin")
        }
      })
      .catch(() => {
        const url = new URL(window.location.href)
        url.searchParams.delete("token")
        window.history.replaceState({}, "", url.toString())
      })
  }, [searchParams, router])

  return null
}

export default function GoogleAuthHandler() {
  return (
    <Suspense fallback={null}>
      <Handler />
    </Suspense>
  )
}
