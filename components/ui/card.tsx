import { cn } from "@/lib/cn";

export function Card({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("rounded-3xl border border-white/10 bg-white/5 shadow-2xl backdrop-blur-xl", className)} {...props} />;
}
