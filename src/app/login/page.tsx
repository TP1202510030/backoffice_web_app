"use client";
import { LoginForm } from "@/components/sections/login/login-form";
import Image from "next/image";

export default function LoginPage() {
  return (
    <main>
      <div className="grid min-h-svh lg:grid-cols-2">
        <div className="flex flex-col gap-4 p-6 md:p-10">
          <div className="flex justify-center gap-2 md:justify-start">
            <a href="#" className="flex items-center gap-2 font-medium">
              Greenhouse
            </a>
          </div>
          <div className="flex flex-1 items-center justify-center">
            <div className="w-full max-w-xs">
              <LoginForm />
            </div>
          </div>
        </div>
        <div className="bg-muted relative hidden lg:block">
          <Image
            src="/images/mushrooms.webp"
            alt="Cultivo de champiñones en un ambiente controlado"
            fill
            priority
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover dark:brightness-[0.2] dark:grayscale"
          />
        </div>
      </div>
    </main>
  );
}
