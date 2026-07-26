'use client'
import React, { Suspense, useState, useEffect } from 'react'
import Link from 'next/link'
import { MoveLeft, Mail, Lock } from 'lucide-react'
import { login } from '@/lib/api'
import { useRouter, useSearchParams } from 'next/navigation'

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3333/api"

function LoginForm() {
    const [error, setError] = useState("")
    const router = useRouter()
    const searchParams = useSearchParams()

    useEffect(() => {
        const token = searchParams.get('token')
        if (token) {
            localStorage.setItem('token', token)
            document.cookie = `session=${token}; path=/; max-age=${60 * 60 * 24 * 7}`
            router.push('/')
        }
        const errorParam = searchParams.get('error')
        if (errorParam === 'google_auth_failed') {
            setError("Falha na autenticação com Google")
        }
    }, [searchParams, router])

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        setError("")
        const form = e.currentTarget
        const formData = new FormData(form)
        const email = formData.get('email') as string
        const password = formData.get('password') as string

        try {
            const result = await login(email, password)
            localStorage.setItem('token', result.token)
            document.cookie = `session=${result.token}; path=/; max-age=${60 * 60 * 24 * 7}`
            router.push('/admin')
        } catch (err: any) {
            setError(err.message || "Erro ao fazer login")
        }
    }

    return (
        <div className="min-h-screen bg-adrenalin-black flex items-center justify-center px-4">
            <div className="w-full max-w-md">
                <Link href="/" className="inline-flex items-center gap-2 font-body text-xs text-adrenalin-light hover:text-white uppercase tracking-wider transition-colors mb-12">
                    <MoveLeft className="w-4 h-4" />
                    Voltar para página inicial
                </Link>

                <div className="card-premium p-8 md:p-10">
                    <div className="text-center mb-8">
                        <h1 className="font-heading text-5xl md:text-6xl text-white tracking-wide leading-none">ADRENALIN</h1>
                        <p className="font-body text-sm text-adrenalin-light mt-3">Acesse sua conta</p>
                    </div>

                    {error && (
                        <div className="mb-4 p-3 bg-red-500/10 border border-red-500/30 text-red-400 rounded text-sm text-center font-body">
                            {error}
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div>
                            <label className="font-body text-xs text-white/60 uppercase tracking-wider block mb-2">E-mail</label>
                            <div className="relative">
                                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-adrenalin-light/50" />
                                <input
                                    name="email"
                                    type="email"
                                    className="w-full pl-10 pr-4 py-3 bg-adrenalin-black border border-white/10 text-white font-body text-sm
                                               placeholder:text-adrenalin-light/30 focus:outline-none focus:border-adrenalin-yellow/50 transition-all duration-300"
                                    placeholder="seu@email.com"
                                    required
                                />
                            </div>
                        </div>

                        <div>
                            <label className="font-body text-xs text-white/60 uppercase tracking-wider block mb-2">Senha</label>
                            <div className="relative">
                                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-adrenalin-light/50" />
                                <input
                                    name="password"
                                    type="password"
                                    className="w-full pl-10 pr-4 py-3 bg-adrenalin-black border border-white/10 text-white font-body text-sm
                                               placeholder:text-adrenalin-light/30 focus:outline-none focus:border-adrenalin-yellow/50 transition-all duration-300"
                                    placeholder="••••••••"
                                    required
                                />
                            </div>
                        </div>

                        <button type="submit" className="btn-primary w-full justify-center mt-2">
                            Entrar
                        </button>
                    </form>

                    <div className="mt-8 pt-6 border-t border-white/5">
                        <a
                            href={`${API_URL}/auth/google`}
                            className="flex items-center justify-center gap-2 py-2.5 border border-white/10 text-adrenalin-light hover:text-white hover:border-white/30 font-body text-xs uppercase tracking-wider transition-all duration-300"
                        >
                            Google
                        </a>
                    </div>

                    <div className="mt-6 flex justify-between">
                        <button className="font-body text-xs text-adrenalin-light hover:text-white transition-colors">
                            Esqueci a senha
                        </button>
                        <button className="font-body text-xs text-adrenalin-light hover:text-white transition-colors">
                            Ajuda
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default function LoginPage() {
    return (
        <Suspense fallback={null}>
            <LoginForm />
        </Suspense>
    )
}