"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Sidebar from "@/components/Sidebar"; // ajuste o caminho se for diferente

export default function HomePage() {
  const router = useRouter();
  const [checkingAuth, setCheckingAuth] = useState(true);

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("auth");
    if (isAuthenticated) {
      router.push("/dashboard");
    } else {
      router.push("/login");
    }
    setCheckingAuth(false);
  }, []);

  if (checkingAuth) {
    return (
      <div className="flex">
        <Sidebar />
        <div className="p-4">Verificando autenticação...</div>
      </div>
    );
  }

  return null;
}
