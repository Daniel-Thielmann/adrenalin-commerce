"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

function GitHubIcon({ size }: { size: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

const githubButtonVariants = cva(
  [
    "relative inline-flex items-center justify-center overflow-hidden rounded-xl font-medium tracking-tight",
    "backdrop-blur-xl shadow-lg shadow-black/20",
    "transition-colors duration-200 select-none",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
  ].join(" "),
  {
    variants: {
      variant: {
        default: [
          "bg-gradient-to-b from-white/[0.08] to-white/[0.03]",
          "text-text hover:text-white",
          "border border-white/[0.12] hover:border-white/[0.2]",
          "hover:from-white/[0.12] hover:to-white/[0.06]",
        ].join(" "),
        ghost: [
          "bg-transparent text-text-secondary hover:text-text",
          "border border-transparent hover:border-border-light",
          "hover:bg-card",
        ].join(" "),
        outline: [
          "bg-transparent text-text",
          "border border-border-light hover:border-white/40",
          "hover:bg-white/[0.04]",
        ].join(" "),
      },
      size: {
        sm: "px-3 py-1.5 gap-1.5 text-xs",
        md: "px-4 py-2 gap-2 text-sm",
        lg: "px-5 py-2.5 gap-2.5 text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "lg",
    },
  },
);

interface GitHubRepositoryButtonProps extends VariantProps<
  typeof githubButtonVariants
> {
  repositoryUrl: string;
  label?: string;
  showArrow?: boolean;
  showLabel?: boolean;
  animate?: boolean;
  className?: string;
  target?: string;
  rel?: string;
  tooltip?: string;
  iconOnlyOnMobile?: boolean;
  iconSize?: number;
}

const SPRING = { type: "spring" as const, stiffness: 300, damping: 20 };
const SPRING_ICON = { type: "spring" as const, stiffness: 300, damping: 15 };

const entryAnimation = {
  initial: { opacity: 0, y: -8, filter: "blur(4px)" },
  animate: { opacity: 1, y: 0, filter: "blur(0px)" },
  transition: {
    delay: 0.15,
    duration: 0.5,
    ease: [0.25, 0.46, 0.45, 0.94] as const,
  },
};

export function GitHubRepositoryButton({
  repositoryUrl,
  label = "View Source",
  variant,
  size,
  showArrow = true,
  showLabel = true,
  animate = true,
  className,
  target = "_blank",
  rel = "noopener noreferrer",
  tooltip = "View source code on GitHub",
  iconOnlyOnMobile = true,
  iconSize,
}: GitHubRepositoryButtonProps) {
  const sizeConfig = size ?? "lg";

  return (
    <motion.a
      href={repositoryUrl}
      target={target}
      rel={rel}
      title={tooltip}
      aria-label={tooltip}
      tabIndex={0}
      {...(animate ? entryAnimation : undefined)}
      whileHover={{
        scale: 1.03,
        y: -1,
        boxShadow:
          "0 8px 30px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.15)",
        transition: SPRING,
      }}
      whileTap={{ scale: 0.97 }}
      className={cn(githubButtonVariants({ variant, size }), className)}
    >
      <motion.span
        className="relative z-10 flex items-center"
        style={{
          gap:
            sizeConfig === "sm"
              ? "0.375rem"
              : sizeConfig === "md"
                ? "0.5rem"
                : "0.625rem",
        }}
        layout
      >
        <motion.span
          className="flex shrink-0 items-center justify-center"
          variants={{
            rest: { rotate: 0, scale: 1 },
            hover: { rotate: 8, scale: 1.1, transition: SPRING_ICON },
          }}
          initial="rest"
          whileHover="hover"
        >
          <GitHubIcon
            size={iconSize ?? (sizeConfig === "sm" ? 15 : sizeConfig === "md" ? 17 : 19)}
          />
        </motion.span>

        <AnimatePresence mode="wait">
          {showLabel && (
            <motion.span
              key="label"
              initial={{ opacity: 0, x: -4 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -4 }}
              transition={{ duration: 0.2 }}
              className={cn(
                "whitespace-nowrap",
                iconOnlyOnMobile && "hidden sm:inline",
              )}
            >
              {label}
            </motion.span>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {showArrow && (
            <motion.span
              key="arrow"
              initial={{ opacity: 0, x: -4, y: 2 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              exit={{ opacity: 0, x: -4, y: 2 }}
              transition={SPRING}
              className={cn(
                "flex shrink-0 items-center",
                iconOnlyOnMobile && "hidden sm:flex",
              )}
            >
              <ArrowUpRight
                size={sizeConfig === "sm" ? 12 : sizeConfig === "md" ? 13 : 14}
              />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.span>

      <motion.span
        className="pointer-events-none absolute inset-0 -inset-x-full z-0 rounded-xl"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.08) 50%, transparent 100%)",
        }}
        variants={{
          rest: { x: "-100%" },
          hover: {
            x: "200%",
            transition: {
              duration: 0.6,
              ease: "easeInOut",
              repeat: Infinity,
              repeatDelay: 1.5,
            },
          },
        }}
        initial="rest"
        whileHover="hover"
      />
    </motion.a>
  )
}
