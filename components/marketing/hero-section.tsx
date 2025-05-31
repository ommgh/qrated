"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";

import Image from "next/image";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { ModeToggle } from "@/components/mode-toggle";
import { LayoutDashboard, LogIn, UserPlus } from "lucide-react";

export default function HeroSection() {
  const session = useSession();
  const user = session.data?.user;
  const router = useRouter();
  return (
    <>
      <div className="px-4 sm:px-6 mx-auto max-w-6xl">
        <header className="w-full py-3 flex justify-between items-center bg-background/50 backdrop-blur-sm border rounded-lg mt-4">
          <div className="flex items-center space-x-2 px-2">
            <div className="w-7 h-7 bg-black dark:bg-white rounded-md flex items-center justify-center">
              <span className="text-white dark:text-black font-bold text-sm">
                Q
              </span>
            </div>
            <span className="text-xl font-semibold text-black dark:text-white">
              Qrated
            </span>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            {user ? (
              <Button
                variant="outline"
                className="flex items-center gap-2 text-xs sm:text-sm"
                onClick={() => router.push("/dashboard")}
                size="sm"
              >
                <LayoutDashboard className="w-4 h-4" />
                <span className="hidden sm:inline">Dashboard</span>
              </Button>
            ) : (
              <>
                <Button
                  variant="ghost"
                  className="flex items-center gap-2 text-xs sm:text-sm"
                  onClick={() => router.push("/auth/login")}
                  size="sm"
                >
                  <LogIn className="w-4 h-4" />
                  <span className="hidden sm:inline">Login</span>
                </Button>
                <Button
                  className="flex items-center gap-2 text-xs sm:text-sm"
                  onClick={() => router.push("/auth/register")}
                  size="sm"
                >
                  <UserPlus className="w-4 h-4" />
                  <span className="hidden sm:inline">Register</span>
                </Button>
              </>
            )}
            <ModeToggle />
          </div>
        </header>
      </div>

      <main>
        <div
          aria-hidden
          className="z-2 absolute inset-0 isolate hidden opacity-50 contain-strict lg:block"
        >
          <div className="w-140 h-320 -translate-y-87.5 absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />
          <div className="h-320 absolute left-0 top-0 w-60 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] [translate:5%_-50%]" />
          <div className="h-320 -translate-y-87.5 absolute left-0 top-0 w-60 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
        </div>

        <section className="overflow-hidden bg-white dark:bg-transparent">
          <div className="relative mx-auto max-w-5xl px-6 py-28 lg:py-24">
            <div className="relative z-10 mx-auto max-w-2xl text-center">
              <h1 className="text-balance text-4xl font-semibold md:text-5xl lg:text-6xl">
                Transform YourBio Links Into Revenue
              </h1>
              <p className="mx-auto my-8 max-w-2xl text-xl">
                Create a professional affiliate storefront that converts. Join
                the waitlist to be the first to monetize your influence
              </p>

              <Button asChild size="lg">
                <Link href="#">
                  <span className="btn-label">Start Building</span>
                </Link>
              </Button>
            </div>
          </div>

          <div className="mx-auto -mt-16 max-w-7xl">
            <div className="perspective-distant -mr-16 pl-16 lg:-mr-56 lg:pl-56">
              <div className="[transform:rotateX(20deg);]">
                <div className="lg:h-176 relative skew-x-[.36rad]">
                  <div
                    aria-hidden
                    className="bg-linear-to-b from-background to-background z-1 absolute -inset-16 via-transparent sm:-inset-32"
                  />
                  <div
                    aria-hidden
                    className="bg-linear-to-r from-background to-background z-1 absolute -inset-16 bg-white/50 via-transparent sm:-inset-32 dark:bg-transparent"
                  />

                  <div
                    aria-hidden
                    className="absolute -inset-16 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:24px_24px] [--color-border:var(--color-zinc-400)] sm:-inset-32 dark:[--color-border:color-mix(in_oklab,var(--color-white)_20%,transparent)]"
                  />
                  <div
                    aria-hidden
                    className="from-background z-11 absolute inset-0 bg-gradient-to-l"
                  />
                  <div
                    aria-hidden
                    className="z-2 absolute inset-0 size-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,transparent_40%,var(--color-background)_100%)]"
                  />
                  <div
                    aria-hidden
                    className="z-2 absolute inset-0 size-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,transparent_40%,var(--color-background)_100%)]"
                  />

                  <Image
                    className="rounded-(--radius) z-1 relative border dark:hidden"
                    src="https://res.cloudinary.com/dcwsgwsfw/image/upload/v1748705201/qrated/Light-Qrated_1_fqbjh2.png"
                    alt="Tailark hero section"
                    width={2880}
                    height={2074}
                  />
                  <Image
                    className="rounded-(--radius) z-1 relative hidden border dark:block"
                    src="https://res.cloudinary.com/dcwsgwsfw/image/upload/v1748705200/qrated/Dark-Qrated_1_by2b0n.png"
                    alt="Tailark hero section"
                    width={2880}
                    height={2074}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
