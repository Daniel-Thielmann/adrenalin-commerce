"use client";
import { Menu, X, ShoppingCart, Search, User, LogOut } from "lucide-react";
import { GitHubRepositoryButton } from "@/components/ui/GitHubRepositoryButton";
import { useEffect, useState, Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useSearchParams } from "next/navigation";
import SearchComponent from "../search";
import { useCart } from "@/contexts/cart-context";

const mainLinks = [
  { href: "/", label: "Início" },
  { href: "/categories", label: "Categorias" },
  { href: "/allproducts", label: "Produtos" },
  { href: "/contact", label: "Contato" },
];

export default function Header() {
  return (
    <Suspense fallback={null}>
      <HeaderContent />
    </Suspense>
  );
}

function HeaderContent() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [user, setUser] = useState<{
    name: string;
    email: string;
    role: string;
  } | null>(null);
  const [menuUserOpen, setMenuUserOpen] = useState(false);
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { totalItems, openCart } = useCart();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return;
    fetch(
      `${process.env.NEXT_PUBLIC_API_URL || "http://localhost:3333/api"}/auth/me`,
      {
        headers: { Authorization: `Bearer ${token}` },
      },
    )
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => setUser(data))
      .catch(() => {});
  }, []);

  function handleLogout() {
    localStorage.removeItem("token");
    document.cookie = "session=; path=/; max-age=0";
    window.location.href = "/";
  }

  useEffect(() => {
    setSearchOpen(false);
    setMenuOpen(false);
    setMenuUserOpen(false);
  }, [pathname, searchParams]);

  useEffect(() => {
    if (!menuUserOpen) return;
    function handleClick(e: MouseEvent) {
      const target = e.target as HTMLElement;
      if (
        !target.closest('[aria-label="Usuário"]') &&
        !target.closest(".user-menu")
      ) {
        setMenuUserOpen(false);
      }
    }
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [menuUserOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="bg-adrenalin-yellow py-1.5 px-4 text-center">
        <span className="font-body text-[10px] md:text-xs font-semibold text-adrenalin-black uppercase tracking-[0.2em]">
          Frete Grátis para todo o Brasil | Aproveite as Ofertas
        </span>
      </div>

      <header
        className={`sticky top-0 z-50 w-full transition-all duration-500 ${
          scrolled
            ? "bg-adrenalin-black/95 backdrop-blur-xl shadow-lg shadow-black/20"
            : "bg-adrenalin-black/80 backdrop-blur-sm"
        }`}
      >
        <div className="container-premium">
          <div className="flex items-center justify-between h-16 md:h-20">
            <button
              className="lg:hidden w-10 h-10 flex items-center justify-center text-white hover:text-adrenalin-yellow transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Abrir menu"
            >
              {menuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>

            <Link href="/" className="flex items-center gap-3 shrink-0">
              <Image
                src="/logo/adrenalin1.png"
                alt="Adrenalin"
                width={40}
                height={40}
                className="w-8 h-8 md:w-10 md:h-10 object-contain"
              />
              <span className="font-heading text-2xl md:text-3xl text-white leading-none tracking-wider">
                ADRENALIN
              </span>
            </Link>

            <nav className="hidden lg:flex items-center gap-1">
              {mainLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`font-body text-xs uppercase tracking-[0.15em] px-4 py-2 transition-all duration-300
                    ${
                      pathname === link.href
                        ? "text-adrenalin-yellow"
                        : "text-white/70 hover:text-white"
                    }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-1 md:gap-2">
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="w-10 h-10 flex items-center justify-center text-white/70 hover:text-adrenalin-yellow transition-colors"
                aria-label="Buscar"
              >
                <Search className="w-5 h-5" />
              </button>

              {user ? (
                <div className="relative hidden md:block">
                  <button
                    onClick={() => setMenuUserOpen(!menuUserOpen)}
                    className="w-10 h-10 flex items-center justify-center text-white/70 hover:text-adrenalin-yellow transition-colors"
                    aria-label="Usuário"
                  >
                    <User className="w-5 h-5" />
                  </button>
                  {menuUserOpen && (
                    <div className="user-menu absolute right-0 mt-2 w-48 bg-adrenalin-black border border-white/10 rounded-lg shadow-xl z-50">
                      <div className="px-4 py-3 border-b border-white/10">
                        <p className="text-sm text-white font-medium truncate">
                          {user.name}
                        </p>
                        <p className="text-xs text-white/50 truncate">
                          {user.email}
                        </p>
                      </div>
                      {user.role === "admin" && (
                        <Link
                          href="/admin"
                          className="block px-4 py-2 text-sm text-white/70 hover:text-white hover:bg-white/5 transition-colors"
                        >
                          Admin
                        </Link>
                      )}
                      <button
                        onClick={handleLogout}
                        className="flex items-center gap-2 w-full px-4 py-2 text-sm text-red-400 hover:bg-white/5 transition-colors"
                      >
                        <LogOut className="w-4 h-4" />
                        Sair
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  href="/login"
                  className="hidden md:flex w-10 h-10 items-center justify-center text-white/70 hover:text-adrenalin-yellow transition-colors"
                  aria-label="Login"
                >
                  <User className="w-5 h-5" />
                </Link>
              )}

              <button
                onClick={openCart}
                className="relative w-10 h-10 flex items-center justify-center text-white/70 hover:text-adrenalin-yellow transition-colors"
                aria-label="Carrinho"
              >
                <ShoppingCart className="w-5 h-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 min-w-[16px] h-4 px-1 flex items-center justify-center bg-adrenalin-yellow text-adrenalin-black text-[9px] font-bold rounded-full">
                    {totalItems}
                  </span>
                )}
              </button>
              <GitHubRepositoryButton
                repositoryUrl="https://github.com/Daniel-Thielmann/adrenalin-eccomerce"
                variant="ghost"
                size="md"
                showLabel={false}
                showArrow={false}
                iconSize={20}
              />
            </div>
          </div>
        </div>

        {searchOpen && (
          <div className="border-t border-white/5 animate-fade-in-down">
            <div className="container-premium py-4">
              <SearchComponent onClose={() => setSearchOpen(false)} />
            </div>
          </div>
        )}

        {menuOpen && (
          <div className="lg:hidden border-t border-white/5 animate-fade-in">
            <nav className="container-premium py-6 flex flex-col gap-2">
              {mainLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`font-body text-sm uppercase tracking-[0.15em] py-3 px-4 transition-all
                    ${
                      pathname === link.href
                        ? "text-adrenalin-yellow bg-adrenalin-yellow/5"
                        : "text-white/70 hover:text-white hover:bg-white/5"
                    }`}
                >
                  {link.label}
                </Link>
              ))}
              {user ? (
                <>
                  {user.role === "admin" && (
                    <Link
                      href="/admin"
                      className="font-body text-sm uppercase tracking-[0.15em] py-3 px-4 text-white/70 hover:text-white hover:bg-white/5 transition-all"
                    >
                      Admin
                    </Link>
                  )}
                  <button
                    onClick={handleLogout}
                    className="font-body text-sm uppercase tracking-[0.15em] py-3 px-4 text-red-400 hover:text-red-300 hover:bg-white/5 transition-all text-left"
                  >
                    Sair
                  </button>
                </>
              ) : (
                <Link
                  href="/login"
                  className="font-body text-sm uppercase tracking-[0.15em] py-3 px-4 text-white/70 hover:text-white hover:bg-white/5 transition-all"
                >
                  Login
                </Link>
              )}
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
